import LoginUserService from "../../services/user/LoginUserService";

class LoginUserController {
  async handle(request: any, response: any) {
    const { email, password } = request.body;

    const loginUserService = new LoginUserService();

    try {
      const user = await loginUserService.execute(email, password);
      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({ message: "Error" });
    }
  }
}

export default LoginUserController;

// criar error handling middleware para tratar erros de forma global
// criar error para usar no json de resposta
// criar testes para esse endpoint de login