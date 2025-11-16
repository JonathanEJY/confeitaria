import prisma from "../../../prisma/client";
import type { Stock } from "../../types";

class CreateStockModel {
  async createStock(data: Stock) {
    const stock = await prisma.stock.create({
      data: {
        name: data.name,
        userId: data.userId,
      },
    });

    return stock;
  }
}

export { CreateStockModel };