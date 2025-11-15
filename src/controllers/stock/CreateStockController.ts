import { Request, Response } from "express";
import CreateStockService from "../../services/stock/CreateStockService";
import type { Stock } from "../../types";

class CreateStockController {
  async handle(req: Request, res: Response) {
    const userId = req.user!.uuid;
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }
    const dataStock: Stock = {
      name,
      userId,
    };
    const createStockService = new CreateStockService();
    const newStock = await createStockService.execute(dataStock);
    return res.json(newStock);
  }
}

export default CreateStockController;
