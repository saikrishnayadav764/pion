const authService = require("../services/authService");

exports.register = async (req, res) => {
  try {
    await authService.register(req.body);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Invalid request body or username already exists" });
  }
};

exports.login = async (req, res) => {
  try {
    const token = await authService.login(req.body);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

exports.logout = (req, res) => {
  res.json({ message: "Logged out successfully" });
};
