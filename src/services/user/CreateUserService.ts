import CreateUserModel from "../../models/user/CreateUserModel";
import { User } from "../../types";
import * as argon2 from "argon2";

class CreateUserService {
  async execute(user: User) {
    const createUserModel = new CreateUserModel();
    user.passwordHash = await argon2.hash(user.passwordHash);

    const newUser = await createUserModel.create(user);
    return newUser;
  }
}

export default CreateUserService;
