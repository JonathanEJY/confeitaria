import { Request, Response } from "express";
import UpdateUserService from "../../services/user/UpdateUserService";

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const userId = req.user!.uuid;
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const updateUserService = new UpdateUserService();
    await updateUserService.execute(userId, req.body);
    return res.status(200).json({ message: `User ${userId} updated successfully` });
  }
}

export default UpdateUserController;