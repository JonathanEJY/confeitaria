import { Request, Response } from "express";
import DeleteUserLaborService from "../../services/user/DeleteUserLaborService";

class DeleteUserLaborController {
  async handle(req: Request, res: Response) {
    const { Useruuid } = req.body;
    const deleteUserLaborService = new DeleteUserLaborService();
    const deletedUser = await deleteUserLaborService.execute(Useruuid);
    return res.json(deletedUser);
  }
}

export default DeleteUserLaborController;
