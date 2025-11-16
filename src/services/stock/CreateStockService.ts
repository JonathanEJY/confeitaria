import { CreateStockModel } from "../../models/stock/CreateStockModel";
import type { Stock } from "../../types";

class CreateStockService {
  async execute(data: Stock){
    if (!data.name || !data.userId) {
      throw new Error("Missing required fields: name and userId");
    }
    try{
      const createStockModel = new CreateStockModel();
      const newStock = await createStockModel.createStock(data);
      return newStock;
    } catch (error) {
      throw new Error("Error creating stock: " + (error as Error).message);
    }
  }
}

export { CreateStockService };
