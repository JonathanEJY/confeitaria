import UpdateLaborModel from "../../models/labor/UpdateLaborModel";
import type { Labor } from "../../types";

class UpdateLaborService {
  async execute(laborId: string, laborData: Labor) {
    const updateLaborModel = new UpdateLaborModel();
    const updatedLabor = await updateLaborModel.updateLabor(laborId, laborData);
    return updatedLabor;
  }
}

export default UpdateLaborService;