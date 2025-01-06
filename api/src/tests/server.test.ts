import request from "supertest";
import { app } from "../server";
import { Employee } from "../entities";
import { db, saveDb } from "../db";

jest.mock("../db", () => ({
  db: { employees: [] },
  saveDb: jest.fn(),
}));

describe("Employee API", () => {
  const mockDb = {
    employees: [
      { id: "1", name: "John Doe", status: "ACTIVE" },
      { id: "2", name: "Jane Doe", status: "ACTIVE" },
    ],
  };

  beforeEach(() => {
    db.employees = [...mockDb.employees];
    jest.clearAllMocks();
  });

  it("should fetch all employees", async () => {
    const response = await request(app).get("/employees");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockDb.employees);
  });

  it("should fetch a single employee by ID", async () => {
    const response = await request(app).get("/employees/1");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockDb.employees[0]);
  });

  it("should return 404 if employee not found", async () => {
    const response = await request(app).get("/employees/999");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: "Employee not found" });
  });

  it("should offboard an employee by ID", async () => {
    const response = await request(app).post("/users/1/offboard");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "Employee offboarded successfully",
    });

    const updatedEmployee = db.employees.find(
      (emp: Employee) => emp.id === "1",
    );
    expect(updatedEmployee?.status).toBe("OFFBOARDED");

    expect(saveDb).toHaveBeenCalled();
  });

  it("should return 404 when trying to offboard a non-existent employee", async () => {
    const response = await request(app).post("/users/999/offboard");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: "Employee not found" });

    expect(saveDb).not.toHaveBeenCalled();
  });
});
