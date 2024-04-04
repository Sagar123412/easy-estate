import {
    signInUser,
    signUpUser,
  } from "../controllers/user.js";
  import express from "express";
  const router = express.Router();
  router.post("/signUpUser", signUpUser);
  router.post("/signInUser", signInUser);
  export default router;
  