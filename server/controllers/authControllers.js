import User from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import { json } from "express";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = await bcryptjs.hashSync(password, 12);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    return res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      next(errorHandler(404, "User not found"));
    }

    const validPassword = await bcryptjs.compareSync(password, user.password);

    if (!validPassword) {
      return next(errorHandler(400, "Invalid Password or Email"));
    }
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    const { password: pass, ...userInfo } = user._doc;

    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
      })
      .json({ user, userInfo, token });
  } catch (error) {
    next(error);
  }
};
