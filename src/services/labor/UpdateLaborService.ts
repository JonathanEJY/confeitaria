import UpdateLaborModel from "../../models/labor/UpdateLaborModel";
import type { Labor } from "../../types";

class UpdateLaborService {
  async execute(laborData: Labor, userId: string) {
    const updateLaborModel = new UpdateLaborModel();
    const updatedLabor = await updateLaborModel.updateLabor(laborData, userId);
    return updatedLabor;
  }
}

export default UpdateLaborService;