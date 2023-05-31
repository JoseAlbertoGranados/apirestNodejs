import {Router} from "express"
import { database } from "../controllers/index.controller.js";
const router = Router();

router.get("/ping", database);

export default router