import prisma from "../../../prisma/client";
import type { Stock } from "../../types";

class UpdateStockModel {
  async updateStock(stockId: string, newStock: Stock){
    try {
      const updatedStock = await prisma.stock.update({
        where: { uuid: stockId },
        data: {
          name: newStock.name
        },
      });
      return updatedStock;
    } catch (error) {
      throw new Error(`Failed to update stock with ID ${stockId}: ${error}`);
    }       
    
  }
}

export default UpdateStockModel;