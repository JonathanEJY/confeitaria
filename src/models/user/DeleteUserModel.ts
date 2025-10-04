import prisma from "../../../prisma/client";

class DeleteUserModel {
  async deleteUser(userId: string) {
    const deletedUser = await prisma.user.delete({
      where: {
        uuid: userId,
      },
      select: {
        uuid: true,
        username: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return deletedUser;
  }
}

export default DeleteUserModel;
