import prisma from "../../../prisma/client";

class DeleteUserModel {
  async deleteUser(Useruuid: string) {
    const deletedUser = await prisma.user.delete({
      where: {
        uuid: Useruuid,
      },
    });
    return deletedUser;
  }
}

export default DeleteUserModel;
