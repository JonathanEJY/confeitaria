import prisma from "../../../prisma/client";

class LoginUserModel {
  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  }
}

export default LoginUserModel;
