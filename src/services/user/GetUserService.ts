import GetUserModel from "../../models/user/GetUserModel";

class GetUserService {
  async execute(userId: string) {
    const getUserModel = new GetUserModel();
    const user = await getUserModel.execute(userId);
    return user;
  }
}

export default GetUserService;