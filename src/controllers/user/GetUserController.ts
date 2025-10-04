import { Request, Response } from "express";
import GetUserService from "../../services/user/GetUserService";

class GetUserController {
  handle(req: Request, res: Response) {
    const { userId } = req.params;
    if (typeof userId !== "string") {
      return res.status(400).json({ error: "userId is required and must be a string" });
    }
    const getUserService = new GetUserService();
    getUserService
      .execute(userId)
      .then((user) => {
        res.json(user);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  }
}
export default GetUserController;