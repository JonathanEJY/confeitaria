import UpdateStockService from "../../services/stock/UpdateStockService";
import { Request, Response } from "express";

class UpdateStockController {
  async handle(req: Request, res: Response) {
    const userId = req.user!.uuid;
    const { name } = req.body;
    const newStock = {
      userId,
      name,
    };
    const updateStockService = new UpdateStockService();
    const updatedStock = await updateStockService.execute(newStock);
  }
}

export default UpdateStockController;
// TODO: é preciso fazer um get no stockId usando o userId pra pegar. Talvez criar um utils?
