import { Router } from "express";
import { likeProduct } from "../../controller/user/user.js";

const router = Router();

router.post("/", likeProduct);

export default router;