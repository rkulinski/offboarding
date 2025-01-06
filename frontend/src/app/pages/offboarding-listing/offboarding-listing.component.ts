import { Component, OnInit } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {
  MatCell,
  MatHeaderCell,
  MatHeaderRow,
  MatRow,
  MatTable,
} from '@angular/material/table';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-offboarding-listing',
  imports: [
    MatFormField,
    MatTable,
    MatHeaderCell,
    MatHeaderRow,
    MatCell,
    MatRow,
    FormsModule,
    MatLabel,
  ],
  templateUrl: './offboarding-listing.component.html',
  styleUrl: './offboarding-listing.component.scss',
})
export class OffboardingListingComponent implements OnInit {
  employees = [];
  searchQuery = '';

  // constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    // this.employeeService.getEmployees().subscribe((data) => {
    //   this.employees = data;
    // });
  }

  filterEmployees() {
    return this.employees;
  }
}
