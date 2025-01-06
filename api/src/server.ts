import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { Employee } from "./entities";
import { db, saveDb } from "./db";
import cors from "cors";

export const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/employees", (req: Request, res: Response) => {
  res.json(db.employees);
});

app.get("/employees/:id", (req: Request, res: Response) => {
  const employee = db.employees.find(
    (emp: Employee) => emp.id === req.params.id,
  );
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
});

app.post("/users/:id/offboard", (req: Request, res: Response) => {
  const employee = db.employees.find(
    (emp: Employee) => emp.id === req.params.id,
  );
  if (employee) {
    employee.status = "OFFBOARDED";
    saveDb();
    res.json({ message: "Employee offboarded successfully" });
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}
