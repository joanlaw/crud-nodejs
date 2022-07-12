import { response, Router } from "express";
import { methods as languageController } from "../controllers/languaje.controller";

const router=Router();

router.get("/", languageController.getLanguages);
router.get("/:id", languageController.getLanguage);
router.post("/", languageController.addLanguages);
router.put("/:id", languageController.updateLanguage);
router.delete("/:id", languageController.deleteLanguage);
export default router;
