import prisma from "../../../prisma/client";

class GetLaborModel {
  async getLabor(userId: string) {
    const labor = await prisma.labor.findFirst({
      where: {
        userId: userId,
      },
    });
    return labor
  }
}

export default GetLaborModel;