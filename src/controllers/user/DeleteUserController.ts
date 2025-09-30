import { Request, Response } from "express";
import DeleteUserService from "../../services/user/DeleteUserService";

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { Useruuid } = req.body;
    const deleteUserService = new DeleteUserService();
    const deletedUser = await deleteUserService.execute(Useruuid);
    return res.json(deletedUser);
  }
}

export default DeleteUserController;
