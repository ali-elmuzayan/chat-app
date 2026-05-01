import bcrypt from "bcryptjs";

// Hashes the password using bcrypt and returns the hashed password
export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Compares the provided password with the hashed password and returns true if they match,
// false otherwise
export const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};
