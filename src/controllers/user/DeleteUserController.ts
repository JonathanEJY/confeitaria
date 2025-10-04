import { Request, Response } from "express";
import DeleteUserService from "../../services/user/DeleteUserService";

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const deleteUserService = new DeleteUserService();
    const deletedUser = await deleteUserService.execute(userId);
    return res.json(deletedUser);
  }
}

export default DeleteUserController;
