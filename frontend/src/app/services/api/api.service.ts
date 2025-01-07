import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Equipment {
  id: string;
  name: string;
}

export interface Employee {
  id: string;
  name: string;
  department: string;
  status: 'ACTIVE' | 'INACTIVE' | 'OFFBOARDED';
  email: string;
  equipments: Equipment[];
}

export interface OffboardingData {
  streetLine1: string;
  country: string;
  postalCode: string;
  receiver: string;
  notes: string;
  phone: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(`${this.baseUrl}/employees`);
  }

  getEmployeeById(id: string) {
    return this.http.get<Employee>(`${this.baseUrl}/employees/${id}`);
  }

  offboardEmployee(id: string, data: OffboardingData) {
    return this.http.post<Employee>(
      `${this.baseUrl}/users/${id}/offboard`,
      data,
    );
  }
}
