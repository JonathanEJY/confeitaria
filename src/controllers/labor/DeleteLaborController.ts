import DeleteLaborService from "../../services/labor/DeleteLaborService";

import { Request, Response } from "express";

class DeleteLaborController {
  async handle(req: Request, res: Response) {
    const userId = req.user!.uuid;
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const deleteLaborService = new DeleteLaborService();
    const deletedLabor = await deleteLaborService.execute(userId);
    return res.json(deletedLabor);
  }
}

export default DeleteLaborController;
