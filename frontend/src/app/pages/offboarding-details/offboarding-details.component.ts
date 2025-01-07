import { Component, OnInit } from '@angular/core';
import { ApiService, Employee } from 'src/app/services/api/api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import {
  FormValues as OffboardingFormValues,
  OffboardingFormComponent,
} from './components/offboarding-form/offboarding-form.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-offboarding-details',
  imports: [
    FormsModule,
    MatTableModule,
    CommonModule,
    MatButton,
    RouterLink,
    ModalComponent,
    OffboardingFormComponent,
  ],
  templateUrl: './offboarding-details.component.html',
  styleUrl: './offboarding-details.component.scss',
})
export class OffboardingDetailsComponent implements OnInit {
  employee: Employee | null = null;
  isOffboardingModalOpen = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    const employeeId = this.route.snapshot.paramMap.get('id');
    if (employeeId) {
      this.apiService
        .getEmployeeById(employeeId)
        .subscribe((data: Employee) => {
          this.employee = data;
        });
    }
  }

  openOffboardingForm() {
    if (!this.employee) {
      throw new Error('No employee selected.');
    }
    this.isOffboardingModalOpen = true;

    this.apiService.offboardEmployee(this.employee.id);
  }

  offboardEmployee(data: OffboardingFormValues) {
    if (!this.employee) {
      throw new Error('No employee selected.');
    }
    this.isOffboardingModalOpen = true;

    this.apiService.offboardEmployee(this.employee.id);
  }
}
