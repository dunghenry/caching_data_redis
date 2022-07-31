import { Router } from "express";
import getDataController from "../controllers/getDataController";
const router = Router();
router.get('/todos', getDataController.getTodos);
export default router;