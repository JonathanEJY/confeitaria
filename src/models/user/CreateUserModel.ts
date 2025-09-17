import prisma from "../../../prisma/client";
import { type User } from "../../types";

class CreateUserModel {
  async create(user: User) {
    const newUser = await prisma.user.create({
      data: {
        username: user.username,
        email: user.email,
        passwordHash: user.passwordHash,
      },
    });
    return newUser;
  }
}

export default CreateUserModel;
