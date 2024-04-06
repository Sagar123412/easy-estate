import { signInUser, signUpUser } from "../services/userservice.js";

export async function signUp(req, res) {
  const { name, email, phone, password, role } = req.body;
  try {
    const result = await signUpUser(name, email, password, phone, role);
    if (result.success) {
      res.status(201).json(result);
    } else {
      res.status(400).json(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export async function signIn(req, res) {
  const { emailOrPhone, password } = req.body;
  try {
    const result = await signInUser(emailOrPhone, password);
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(401).json(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
