import bcrypt from "bcrypt";
import { userModel } from "../models/user.js";
import {
  generateAccessToken,
  generateRefreshToken,
  isValidEmail,
  isValidPassword,
} from "../services/authServices.js";

// signUpUser user
export const signUpUser = async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Validation error messages
      const validationErrors = [];
  
      // Validate name
      if (!name) {
        validationErrors.push("Name is required");
      }
  
      // Validate email format
      if (!email || !isValidEmail(email)) {
        validationErrors.push("Invalid email format");
      }
  
      // Validate password strength
      if (!password || !isValidPassword(password)) {
        validationErrors.push("Password must be at least 8 characters long");
      }
  
      // Check if there are any validation errors
      if (validationErrors.length > 0) {
        return res.status(400).json({
          success: false,
          message: "Invalid input data",
          errors: validationErrors,
        });
      }
  
      // Check if user already exists
      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: "Email already exists",
        });
      }
  
      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user with the hashed password
      const newUser = await userModel.create({
        name,
        email,
        password: hashedPassword,
      });
  
      // Generate JWT token with the ID of the newly created user
      const token = generateAccessToken(newUser._id);
  
      // Generate refresh token
      const refreshToken = generateRefreshToken(newUser._id);
      res.status(201).json({
        success: true,
        message: "User created successfully",
        token,
        refreshToken,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };
  

// signinUser user
export const signInUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if the user with the given email exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed. User not found.",
      });
    }
    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed. Invalid password.",
      });
    }
    // Generate access token
    const accessToken = generateAccessToken(user._id);
    // Generate refresh token
    const refreshToken = generateRefreshToken(user._id);
    res.status(200).json({
      success: true,
      message: "Authentication successful",
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
