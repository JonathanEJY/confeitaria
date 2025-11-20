import UpdateStockModel from "../../models/stock/UpdateStockModel";
import type { Stock } from "../../types";

class UpdateStockService {
  async execute(dataStock: Stock) {
    const updateStockModel = new UpdateStockModel();
    const updatedStock = await updateStockModel.updateStock(dataStock);

    return updatedStock;
  }
}

export default UpdateStockService;
