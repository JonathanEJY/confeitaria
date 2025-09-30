import DeleteLaborService from "../../services/labor/DeleteLaborService";

import { Request, Response } from "express";

class DeleteLaborController {
  async handle(req: Request, res: Response) {
    const { laborId } = req.body;
    const deleteLaborService = new DeleteLaborService();
    const deletedLabor = await deleteLaborService.execute(laborId);
    return res.json(deletedLabor);
  }
}

export default DeleteLaborController;
