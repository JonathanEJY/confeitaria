import prisma from "../../../prisma/client";

class DeleteLaborModel {
  async deleteLabor(userId: string) {
    const getLaborId = new GetLaborId();
    const laborId = await getLaborId.getLaborId(userId);
    if (!laborId) {
      throw new Error("Labor not found");
    }
    const deletedLabor = await prisma.labor.delete({
      where: {
        uuid: laborId,
      },
    });
    return deletedLabor;
  }
}

class GetLaborId{
  async getLaborId(userId: string){ 
    const labor = await prisma.labor.findFirst({
      where: {
        userId: userId,
      },
    });
    return labor?.uuid || null;
  }
}

export default DeleteLaborModel;