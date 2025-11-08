export type User = {
  // uuid: string;
  // id: number;
  username: string;
  email: string;
  passwordHash: string;

  // labor: Labor | undefined;
};

export type Labor = {
  desiredSalary: number;
  workDaysPerMonth: number;
  workHoursPerDay: number;

  electricity: number;
  water: number;
  rent: number;
  wage: number;

  userId: string;
};


export type Product = {
  name: string;
  price: number;
  quantity: number;
  unit: Unit;
  userId: string;
  stockId: string;
};



export type Stock = {
  name: string;
  userId: string;
};

export type Unit = "kg" | "g" | "L" | "ml" | "un";



