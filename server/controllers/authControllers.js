import User from "../models/userSchema.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const hashedPassword = await bcryptjs.hashSync(password, 12);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    return res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
