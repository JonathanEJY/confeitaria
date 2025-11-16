import prisma from "../../../prisma/client";

class GetStockModel {
  async getStockById(stockId: string) {
    try {
      const stock = await prisma.stock.findUnique({
        where: { uuid: stockId },
      });
      return stock;
    } catch (error) {
      throw new Error(`Failed to retrieve stock with ID ${stockId}: ${error}`);
    }
  }
}

export default GetStockModel;