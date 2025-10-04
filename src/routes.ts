import express from "express";
import CreateUserController from "./controllers/user/CreateUserController";
import CreateLaborController from "./controllers/labor/CreateLaborController";
import GetUserController from "./controllers/user/GetUserController";
import DeleteUserController from "./controllers/user/DeleteUserController";
import DeleteLaborController from "./controllers/labor/DeleteLaborController";
import UpdateUserController from "./controllers/user/UpdateUserController";
import UpdateLaborController from "./controllers/labor/UpdateLaborController";
const router = express.Router();

// User
const createUserController = new CreateUserController();
router.post("/users", createUserController.handle);

const deleteUserController = new DeleteUserController();
router.delete("/users/:userId", deleteUserController.handle);

const updateUserController = new UpdateUserController();
router.patch("/users/:userId", updateUserController.handle);

const getUserController = new GetUserController();
router.get("/users/:userId", getUserController.handle);

// Labor
const createLaborController = new CreateLaborController();
router.post("/users/:userId/labor", createLaborController.handle);

// const getLaborController = new GetLaborController();
// router.get("/users/:userId/labor", getLaborController.handle);

const deleteLaborController = new DeleteLaborController();
router.delete("/users/:userId/labor", deleteLaborController.handle);

const updateLaborController = new UpdateLaborController()
router.patch("/users/:userId/labor", updateLaborController.handle);

export default router;

// TODO: update labor
// TODO: Login user and persist user data on JWT usind a middleware
