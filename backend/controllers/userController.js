import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "all flied are required",
        success: false,
        error: true,
      });
    }
    const user = await userModel.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "user already exist", success: false, error: true });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({ name, email, password: hashPassword });
    await newUser.save();
  } catch (error) {
    return res.status(500).json({
      message: "all flied are required",
      success: false,
      error: true,
    });
  }
};
