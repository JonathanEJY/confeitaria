import express from "express";
import LoginUserController from "./controllers/user/LoginUserController";
import CreateUserController from "./controllers/user/CreateUserController";
import CreateLaborController from "./controllers/labor/CreateLaborController";
import GetUserController from "./controllers/user/GetUserController";
import GetLaborController from "./controllers/labor/GetLaborController";
import DeleteUserController from "./controllers/user/DeleteUserController";
import DeleteLaborController from "./controllers/labor/DeleteLaborController";
import UpdateUserController from "./controllers/user/UpdateUserController";
import UpdateLaborController from "./controllers/labor/UpdateLaborController";

import { authMiddleware } from "./middleware/authMiddleware";

const router = express.Router();
const getLaborController = new GetLaborController();

// User
const loginUserController = new LoginUserController();
router.post("/login", loginUserController.handle);

const createUserController = new CreateUserController();
router.post("/users", createUserController.handle);

const deleteUserController = new DeleteUserController();
router.delete("/users", authMiddleware, deleteUserController.handle);

const updateUserController = new UpdateUserController();
router.patch("/users", authMiddleware, updateUserController.handle);

const getUserController = new GetUserController();
router.get("/users", authMiddleware, getUserController.handle);

// Labor
const createLaborController = new CreateLaborController();
router.post("/users/labor", authMiddleware, createLaborController.handle);

const deleteLaborController = new DeleteLaborController();
router.delete("/users/labor", authMiddleware, deleteLaborController.handle);

router.get("/users/labor", authMiddleware, getLaborController.handle); // feito

const updateLaborController = new UpdateLaborController();
router.patch("/users/labor", authMiddleware, updateLaborController.handle);

export default router;
