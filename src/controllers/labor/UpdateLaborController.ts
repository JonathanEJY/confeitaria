import UpdateLaborService from "../../services/labor/UpdateLaborService";

import type { Request, Response } from "express";

class UpdateLaborController {
  async handle(req: Request, res: Response) {
    const { laborId, ...laborData } = req.body;

    const updateLaborService = new UpdateLaborService();
    const updatedLabor = await updateLaborService.execute(laborId, laborData);

    return res.json(updatedLabor);
  }
}

export default UpdateLaborController;