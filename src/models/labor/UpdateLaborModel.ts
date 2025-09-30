import prisma from "../../../prisma/client";
import type { Labor } from "../../types";

class UpdateLaborModel {
  async updateLabor(laborId: string, laborData: Labor) {
    const updatedLabor = await prisma.labor.update({
      where: {
        uuid: laborId,
      },
      data: laborData,
    });
    return updatedLabor;
  }
}

export default UpdateLaborModel;