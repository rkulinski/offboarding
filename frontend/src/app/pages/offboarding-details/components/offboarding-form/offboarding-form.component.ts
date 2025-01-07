import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-offboarding-form',
  templateUrl: './offboarding-form.component.html',
  styleUrls: ['./offboarding-form.component.scss'],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class OffboardingFormComponent {
  @Input() employeeId = '';
  @Output() formSubmitSuccess = new EventEmitter<void>();

  offboardingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
  ) {
    this.offboardingForm = this.fb.group({
      streetLine1: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', Validators.required],
      receiver: ['', Validators.required],
      notes: [''],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submit(): void {
    if (this.offboardingForm.valid) {
      this.apiService
        .offboardEmployee(this.employeeId, this.offboardingForm.value)
        .subscribe({
          next: () => this.formSubmitSuccess.emit(),
          error: (error: unknown) => {
            // TODO that could be a generic error message parser which would check the format of error and would try to pull
            // message out of it.
            if (typeof error === 'string') {
              this.offboardingForm.setErrors({ serverError: error });
            } else {
              this.offboardingForm.setErrors({
                serverError: 'Something went wrong. Please try again.',
              });
            }
          },
        });
    }
  }
}
