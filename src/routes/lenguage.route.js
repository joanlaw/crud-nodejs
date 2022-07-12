import { response, Router } from "express";
import { methods as languageController } from "../controllers/languaje.controller";

const router=Router();

router.get("/", languageController.getLanguages);

export default router;
