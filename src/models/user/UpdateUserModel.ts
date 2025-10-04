import prisma from "../../../prisma/client";
import type { User } from "../../types";

class UpdateUserModel {
  async execute(userId: string, userData: User) {
    const user = await prisma.user.update({
      where: { uuid: userId },
      data: userData,
    });

    return user;
  }
}

export default UpdateUserModel ;
