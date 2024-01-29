import express from "express";
import { loginController } from "../controller/index.js";
const router = express.Router();



router.get("/login",loginController.login);

export default router;