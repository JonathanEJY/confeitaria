import prisma from "../../../prisma/client";

class DeleteLaborModel {
  async deleteLabor(laborId: string) {
    const deletedLabor = await prisma.labor.delete({
      where: {
        uuid: laborId,
      },
    });
    return deletedLabor;
  }
}

export default DeleteLaborModel;