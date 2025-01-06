import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import fs from "fs";
import { Employee } from "./entities";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use(bodyParser.json());

const dbPath = "./db.json";
const db = JSON.parse(fs.readFileSync(dbPath, "utf8"));

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
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    res.json({ message: "Employee offboarded successfully" });
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
