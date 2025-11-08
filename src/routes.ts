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

import {authMiddleware} from "./middleware/authMiddleware";

const router = express.Router();

// User
const loginUserController = new LoginUserController();
router.post("/login", loginUserController.handle);

const createUserController = new CreateUserController();
router.post("/users", createUserController.handle);

const deleteUserController = new DeleteUserController();
router.delete("/users/:userId", authMiddleware, deleteUserController.handle);

const updateUserController = new UpdateUserController();
router.patch("/users/:userId", authMiddleware, updateUserController.handle);

const getUserController = new GetUserController();
router.get("/users/:userId", authMiddleware, getUserController.handle);

// Labor
const createLaborController = new CreateLaborController();
router.post("/users/:userId/labor", authMiddleware, createLaborController.handle);

const getLaborController = new GetLaborController();
router.get("/users/labor", authMiddleware, getLaborController.handle);

const deleteLaborController = new DeleteLaborController();
router.delete("/users/:userId/labor", authMiddleware, deleteLaborController.handle);

const updateLaborController = new UpdateLaborController()
router.patch("/users/:userId/labor", authMiddleware, updateLaborController.handle);

export default router;

// TODO: update labor
// TODO: Login user and persist user data on JWT usind a middleware
