import { Router } from "express";
import { login, logout, register } from "../../controller/auth/AuthController.js";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.delete("/logout", logout);

export default router;