import jwt from "jsonwebtoken";

// Validate email format
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate Password format
export const isValidPassword = (password) => {
  return password.length >= 8;
};

// Function to generate a new access token
export const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, `${process.env.ACCESS_TOKEN_SECRET}`, { expiresIn: `${process.env.TOKEN_EXPIRY_TIME}` }); // Adjust the expiration time as needed
};
// Function to generate a new refresh token
export const generateRefreshToken = (userId) => {
  return jwt.sign({ userId }, `${process.env.ACCESS_TOKEN_SECRET}`, { expiresIn: `${process.env.REFRESH_TOKEN_EXPIRY_TIME}` }); // Adjust the expiration time as needed
};
