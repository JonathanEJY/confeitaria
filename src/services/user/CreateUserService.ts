import CreateUserModel from "../../models/user/CreateUserModel";
import { User } from "../../types";

class CreateUserService {
  async execute(user: User) {
    const createUserModel = new CreateUserModel();

    const newUser = await createUserModel.create(user);
    return newUser;
  }
}

export default CreateUserService;
