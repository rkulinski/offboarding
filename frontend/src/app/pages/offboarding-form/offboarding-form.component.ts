import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

interface FormValues {
  streetLine1: string;
  country: string;
  postalCode: string;
  receiver: string;
  notes: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-offboarding-form',
  templateUrl: './offboarding-form.component.html',
  styleUrls: ['./offboarding-form.component.scss'],
  imports: [ReactiveFormsModule, MatFormFieldModule],
})
export class OffboardingFormComponent {
  @Output() formSubmit = new EventEmitter<FormValues>();

  offboardingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.offboardingForm = this.fb.group({
      streetLine1: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', Validators.required],
      receiver: ['', Validators.required],
      notes: [''],
      phone: ['', [Validators.required, Validators.pattern(/^\+\d{10,15}$/)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submit(): void {
    if (this.offboardingForm.valid) {
      this.formSubmit.emit(this.offboardingForm.value);
    }
  }
}
