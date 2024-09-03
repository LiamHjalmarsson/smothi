import { Router } from "express";
import { getProduct, getProducts } from "../../controller/product/Product.js";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProduct);

export default router;