const User = require("../models/User");
const { hashPassword, comparePasswords } = require("../utils/bcrypt");
const { generateToken } = require("../utils/jwt");

const authService = {};

authService.register = async (userData) => {
  const { username, password } = userData;
  const hashedPassword = await hashPassword(password);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();
};

authService.login = async (userData) => {
  const { username, password } = userData;
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error("Invalid username or password");
  }
  const isValidPassword = await comparePasswords(password, user.password);
  if (!isValidPassword) {
    throw new Error("Invalid username or password");
  }
  const token = generateToken({ username });
  return token;
};

module.exports = authService;
