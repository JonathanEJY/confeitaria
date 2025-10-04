import DeleteUserModel from "../../models/user/DeleteUserModel";

class DeleteUserService {
  async execute(userId: string) {
    const deleteUserModel = new DeleteUserModel();
    const deletedUser = await deleteUserModel.deleteUser(userId);
    return deletedUser;
  }
}

export default DeleteUserService;
