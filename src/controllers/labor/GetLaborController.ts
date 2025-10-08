import { Request, Response } from "express";
import GetLaborService from "../../services/labor/GetLaborService";

class GetLaborController {
  async handle(req: Request, res: Response) {
    if (!req.params.userId) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const userId = req.params.userId;
    const getLaborService = new GetLaborService();
    try {
      const laborId = await getLaborService.execute(userId);
      if (!laborId) {
        return res.status(404).json({ error: "Labor not found for this user" });
      }
      res.json({ laborId });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
} 
export default GetLaborController;
