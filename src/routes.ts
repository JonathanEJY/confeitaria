import express from "express";
import CreateUserController from "./controllers/user/CreateUserController";
import CreateLaborController from "./controllers/user/CreateLaborController";
import DeleteUserLaborController from "./controllers/user/DeleteUserLaborController";

const router = express.Router();

// User
const createUserController = new CreateUserController();
router.post("/signup", createUserController.handle);

const deleteUserLaborController = new DeleteUserLaborController();
router.delete("/user/delete", deleteUserLaborController.handle);

// Labor
const createLaborController = new CreateLaborController();
router.post("/user/labor", createLaborController.handle);

// Update Labor
//const updateLaborController = new UpdateLaborController()
router.patch("/user/labor");

export default router;

// TODO: update labor
// TODO: Login user and persist user data on JWT usind a middleware
