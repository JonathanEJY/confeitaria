import express from "express";
import CreateUserController from "./controllers/user/CreateUserController";
import CreateLaborController from "./controllers/labor/CreateLaborController";
import DeleteUserController from "./controllers/user/DeleteUserController";
import DeleteLaborController from "./controllers/labor/DeleteLaborController";
import UpdateLaborController from "./controllers/labor/UpdateLaborController";
const router = express.Router();

// User
const createUserController = new CreateUserController();
router.post("/signup", createUserController.handle);

const deleteUserController = new DeleteUserController();
router.delete("/user/delete", deleteUserController.handle);

// Labor
const createLaborController = new CreateLaborController();
router.post("/user/labor", createLaborController.handle);

const deleteLaborController = new DeleteLaborController();
router.delete("/user/labor", deleteLaborController.handle);

const updateLaborController = new UpdateLaborController()
router.patch("/user/labor", updateLaborController.handle);

export default router;

// TODO: update labor
// TODO: Login user and persist user data on JWT usind a middleware
