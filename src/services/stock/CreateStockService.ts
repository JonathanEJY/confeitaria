import CreateStockModel from "../../models/stock/CreateStockModel";
import type { Stock } from "../../types";

class CreateStockService {
  async execute(dataStock: Stock) {
    const createStockModel = new CreateStockModel();
    const newStock = await createStockModel.execute(dataStock);
    return newStock;
  }
}

export default CreateStockService;
