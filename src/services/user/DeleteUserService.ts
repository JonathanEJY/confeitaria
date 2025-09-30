import DeleteUserModel from "../../models/user/DeleteUserModel";

class DeleteUserService {
  async execute(Useruuid: string) {
    const deleteUserModel = new DeleteUserModel();
    const deletedUser = await deleteUserModel.deleteUser(Useruuid);
    return deletedUser;
  }
}

export default DeleteUserService;
