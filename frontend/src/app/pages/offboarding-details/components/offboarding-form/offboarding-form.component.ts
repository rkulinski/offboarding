import { Component, EventEmitter, Output } from '@angular/core';
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
import { OffboardingData } from 'src/app/services/api/api.service';

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
  @Output() formSubmit = new EventEmitter<OffboardingData>();

  offboardingForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
      this.formSubmit.emit(this.offboardingForm.value);
    }
  }
}
