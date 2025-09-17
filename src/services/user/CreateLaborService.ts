import type { Labor } from "../../types";
import CreateLaborModel from "../../models/user/CreateLaborModel";

class CreateLaborService {
  async execute(labor: Labor) {
    const createLaborModel = new CreateLaborModel();
    const newLabor = await createLaborModel.createLabor(labor);
    return newLabor;
  }
}

export default CreateLaborService;
