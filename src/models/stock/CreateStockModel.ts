import prisma from "../../../prisma/client";
import type { Stock } from "../../types";

class CreateStockModel {
  async execute(data: Stock) {
    const stock = await prisma.stock.create({
      data: {
        name: data.name,
        quantity: data.quantity,
        unit: data.unit,
      },
    });

    return stock;
  }
}

export { CreateStockModel };