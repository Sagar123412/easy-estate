import express from "express";
import { roleAuthorize } from "../middlewares/roleAuthorize.js";
import { verifyAdminLogin } from "../controllers/adminController.js";
const router = express.Router();

router.post('/login', roleAuthorize('admin'), verifyAdminLogin)

export default router;