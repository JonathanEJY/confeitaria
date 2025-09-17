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
