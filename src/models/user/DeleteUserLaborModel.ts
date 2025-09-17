import prisma from "../../../prisma/client";

class DeleteUserLaborModel {
  async deleteUser(Useruuid: string) {
    const deletedUser = await prisma.user.delete({
      where: {
        uuid: Useruuid,
      },
    });
    return deletedUser;
  }
}

export default DeleteUserLaborModel;
