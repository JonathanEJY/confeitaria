import DeleteLaborModel from "../../models/labor/DeleteLaborModel";

class DeleteLaborService {
  async execute(userId: string) {
    const deleteLaborModel = new DeleteLaborModel();
    const deletedLabor = await deleteLaborModel.deleteLabor(userId);
    return deletedLabor;
  }
}

export default DeleteLaborService;