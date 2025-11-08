import prisma from "../../../prisma/client";

class GetLaborModel {
  async getLabor(userId: string) {
    console.log("Fetching labor for user ID:", userId);
    const labor = await prisma.labor.findFirst({
      where: {
        userId: userId,
      },
    });
    return labor
  }
}

export default GetLaborModel;