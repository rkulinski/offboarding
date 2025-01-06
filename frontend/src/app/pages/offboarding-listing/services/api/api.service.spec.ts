import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { ApiService, Employee } from './api.service';
import { HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ApiService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify(); // Verify that no unmatched requests are pending
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getEmployees', () => {
    it('should retrieve employees from the API via GET', () => {
      const mockEmployees: Employee[] = [
        {
          id: '1',
          name: 'John Doe',
          department: 'Engineering',
          status: 'ACTIVE',
          email: 'john.doe@example.com',
          equipments: [{ id: 'eq1', name: 'Laptop' }],
        },
      ];

      service.getEmployees().subscribe((employees) => {
        expect(employees.length).toBe(1);
        expect(employees).toEqual(mockEmployees);
      });

      const req = httpController.expectOne(`${service['baseUrl']}/employees`);
      expect(req.request.method).toBe('GET');
      req.flush(mockEmployees);
    });
  });

  describe('getEmployeeById', () => {
    it('should retrieve an employee by ID from the API via GET', () => {
      const mockEmployee: Employee = {
        id: '1',
        name: 'John Doe',
        department: 'Engineering',
        status: 'ACTIVE',
        email: 'john.doe@example.com',
        equipments: [{ id: 'eq1', name: 'Laptop' }],
      };

      service.getEmployeeById('1').subscribe((employee) => {
        expect(employee).toEqual(mockEmployee);
      });

      const req = httpController.expectOne(`${service['baseUrl']}/employees/1`);
      expect(req.request.method).toBe('GET');
      req.flush(mockEmployee);
    });
  });

  describe('offboardEmployee', () => {
    it('should offboard an employee via POST', () => {
      const mockEmployee: Employee = {
        id: '1',
        name: 'John Doe',
        department: 'Engineering',
        status: 'OFFBOARDED',
        email: 'john.doe@example.com',
        equipments: [],
      };

      service.offboardEmployee('1').subscribe((employee) => {
        expect(employee.status).toBe('OFFBOARDED');
        expect(employee).toEqual(mockEmployee);
      });

      const req = httpController.expectOne(
        `${service['baseUrl']}/users/1/offboard`,
      );
      expect(req.request.method).toBe('POST');
      req.flush(mockEmployee);
    });
  });
});
