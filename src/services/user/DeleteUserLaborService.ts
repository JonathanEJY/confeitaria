import DeleteUserLaborModel from "../../models/user/DeleteUserLaborModel";

class DeleteUserLaborService {
  async execute(Useruuid: string) {
    const deleteUserLaborModel = new DeleteUserLaborModel();
    const deletedUser = await deleteUserLaborModel.deleteUser(Useruuid);
    return deletedUser;
  }
}

export default DeleteUserLaborService;
