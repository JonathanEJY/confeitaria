import { Request, Response } from "express";
import CreateLaborService from "../../services/labor/CreateLaborService";
import type { Labor } from "../../types";

class CreateLaborController {
  async handle(req: Request, res: Response) {
    const labor: Labor = req.body;
    const createLaborService = new CreateLaborService();
    const newLabor = await createLaborService.execute(labor);
    res.json(newLabor);
  }
}

export default CreateLaborController;
