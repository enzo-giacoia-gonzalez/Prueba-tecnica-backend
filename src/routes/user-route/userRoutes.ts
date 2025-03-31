
import express from "express";
import { deleteUserController, getUsersController, loginUserController, registerUserController, updateUserController } from "./controllers";
import { authenticatedToken, authorizatedRole } from "./middlewares";

const router = express.Router();

router.post("/register", registerUserController);
router.post("/login", loginUserController);
router.get("/", getUsersController);
router.put("/:id", authenticatedToken, updateUserController);
router.delete("/:id", authenticatedToken, authorizatedRole("ADMIN"), deleteUserController);

export default router;
