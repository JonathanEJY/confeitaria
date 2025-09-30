import prisma from "../../../prisma/client";
import { type Labor } from "../../types";

class CreateLaborModel {
  async createLabor(labor: Labor) {
    const newLabor = await prisma.labor.create({
      data: {
        desiredSalary: labor.desiredSalary,
        workDaysPerMonth: labor.workDaysPerMonth,
        workHoursPerDay: labor.workHoursPerDay,
        electricity: labor.electricity,
        rent: labor.rent,
        wage: labor.wage,
        water: labor.water,
        userId: labor.userId,
      },
    });
    return newLabor;
  }
}

export default CreateLaborModel;
