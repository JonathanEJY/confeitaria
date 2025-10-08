import UpdateLaborService from "../../services/labor/UpdateLaborService";

import type { Request, Response } from "express";

class UpdateLaborController {
  async handle(req: Request, res: Response) {
    const userId = req.params.userId;
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }
    
    const laborData  = req.body;

    const updateLaborService = new UpdateLaborService();
    const updatedLabor = await updateLaborService.execute(laborData, userId);
    return res.json(updatedLabor);
  }
}

export default UpdateLaborController;