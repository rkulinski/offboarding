import fs from "fs";
const dbPath = "./db.json";

export const db = JSON.parse(fs.readFileSync(dbPath, "utf8"));

export const saveDb = () => {
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
};
