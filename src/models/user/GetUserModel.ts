import prisma from "../../../prisma/client";

class GetUserModel {
  async execute(userId: string) {
    const user = await prisma.user.findUnique({
      where: { uuid: userId },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });

    return user;
  }
}

export default GetUserModel;