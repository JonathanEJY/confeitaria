import DeleteLaborModel from "../../models/labor/DeleteLaborModel";

class DeleteLaborService {
  async execute(laborId: string) {
    const deleteLaborModel = new DeleteLaborModel();
    const deletedLabor = await deleteLaborModel.deleteLabor(laborId);
    return deletedLabor;
  }
}

export default DeleteLaborService;