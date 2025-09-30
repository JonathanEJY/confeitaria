import { Request, Response } from "express";
import CreateUserService from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { username, email, passwordHash } = req.body;
    const createUserService = new CreateUserService();
    const newUser = await createUserService.execute({ username, email, passwordHash });
    return res.json(newUser);
  }
}

export default CreateUserController;
