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
    // Seting the token in client-side cookies or local storage
    res.cookie('token', token, { httpOnly: true }); // For setting cookie
    res.setHeader('Authorization', `${token}`); // For setting in header
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

exports.logout = (req, res) => {
  / Checking if the token exists in the request headers
    if (!req.headers.authorization) {
      return res.status(401).json({ message: "You are not logged in" });
    }
  // Removing the token from client-side
  res.clearCookie('token'); // For clearing cookie
  res.json({ message: "Logged out successfully" });
};
