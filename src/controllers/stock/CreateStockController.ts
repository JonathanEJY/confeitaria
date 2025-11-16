import { CreateStockService } from "../../services/stock/CreateStockService";
import { Request, Response } from "express";

class CreateStockController {
  async handle(req: Request, res: Response) {
    const data = req.body;
    const userId = req.user!.uuid;
    data.userId = userId;

    const createStockService = new CreateStockService();

    try {
      const newStock = await createStockService.execute(data);
      res.json(newStock);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
export { CreateStockController };
