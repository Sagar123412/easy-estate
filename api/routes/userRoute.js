import express from "express";
import { signIn, signUp } from "../controllers/userController.js";
const router = express.Router();
router.post("/signUpUser", signUp);
router.post("/signInUser", signIn);
import { roleAuthorize } from "../middlewares/roleAuthorize.js";

router.post(
  "/moderator-only-route",
  roleAuthorize("moderator"),
  async (req, res) => {
    // Route logic for moderator only
  }
);

router.post(
  "/contributor-only-route",
  roleAuthorize("contributor"),
  async (req, res) => {
    // Route logic for contributor only
  }
);
export default router;
