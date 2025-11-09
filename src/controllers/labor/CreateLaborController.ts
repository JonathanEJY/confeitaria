import { Request, Response } from "express";
import CreateLaborService from "../../services/labor/CreateLaborService";
import type { Labor } from "../../types";

class CreateLaborController {
  async handle(req: Request, res: Response) {
    const userId = req.user!.uuid;
    const labor: Labor = req.body;
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }
    labor.userId = userId;
    const createLaborService = new CreateLaborService();
    try {
      const newLabor = await createLaborService.execute(labor);
      res.json(newLabor);
    } catch (error: any) {
      res.status(409).json({ error: 'User já tem Labor criado' });
    }
  }
}
// TODO: return error if user already has labor created

export default CreateLaborController;
