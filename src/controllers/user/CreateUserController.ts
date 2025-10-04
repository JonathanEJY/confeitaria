import { Request, Response } from "express";
import CreateUserService from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { username, email, passwordHash } = req.body;
    if (!username || !email || !passwordHash) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const createUserService = new CreateUserService();
    const newUser = await createUserService.execute({ username, email, passwordHash });
    return res.json(newUser);
  }
}

export default CreateUserController;
