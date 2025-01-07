import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ApiService, Employee } from 'src/app/services/api/api.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-offboarding-listing',
  imports: [
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './offboarding-listing.component.html',
  styleUrl: './offboarding-listing.component.scss',
})
export class OffboardingListingComponent implements OnInit {
  employees: Employee[] = [];
  searchQuery = '';
  displayedColumns: string[] = ['name', 'department', 'status', 'actions'];
  dataSource = new ExampleDataSource(this.employees);

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.apiService.getEmployees().subscribe((data) => {
      this.employees = data;
      this.dataSource.setData(data);
    });
  }

  filterEmployees(): void {
    const lowerCaseQuery = this.searchQuery.toLowerCase();

    const filteredData = this.employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(lowerCaseQuery) ||
        employee.department.toLowerCase().includes(lowerCaseQuery),
    );

    this.dataSource.setData(filteredData);
  }
}

class ExampleDataSource extends DataSource<Employee> {
  private _dataStream = new ReplaySubject<Employee[]>();

  constructor(initialData: Employee[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Employee[]> {
    return this._dataStream;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}

  setData(data: Employee[]) {
    this._dataStream.next(data);
  }
}
