import LoginUserModel from "../../models/user/LoginUserModel";
import * as argon2 from "argon2";
import {sign} from "jsonwebtoken";

class LoginUserService {
  async execute(email: string, password: string) {
    const loginUserModel = new LoginUserModel();
    const user = await loginUserModel.findByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }
    const userPassword = await argon2.verify(user.passwordHash, password);
    if (user.email !== email) {
      throw new Error("Error logging in");
    }
    if (!userPassword) {
      throw new Error("Error logging in");
    }

    const token = sign(
      {
        username: user.username,
        email: user.email,
      },
      process.env.JWT_SECRET as string,
      {
        subject: user.uuid,
        expiresIn: "10m",
      }
    );

    const safeUser = {uuid: user.uuid, username: user.username, email: user.email, token: token};
    return safeUser;
  }
}

export default LoginUserService;