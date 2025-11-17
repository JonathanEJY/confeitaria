import prisma from "../../../prisma/client";

class DeleteStockModel {
  async deleteStock(stockId: string) {
    try {
      const deletedStock = await prisma.stock.delete({
        where: { uuid: stockId },
      });
      return deletedStock;
    } catch (error) {
      throw new Error(`Failed to delete stock with ID ${stockId}: ${`error`}`);
    }
  }
}

export default DeleteStockModel;
