type Equipment = {
  id: string;
  name: string;
};

export type Employee = {
  id: string;
  name: string;
  department: string;
  status: "ACTIVE" | "INACTIVE" | "OFFBOARDED";
  email: string;
  equipments: Array<Equipment>;
};
