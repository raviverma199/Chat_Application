import { SendErrorResponse, BcryptPassword } from "../utils/helper.js";
import { GenerateTokenAndSetCookie } from "../utils/generatetoken.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";

// Signup Controller
export const signup = async (req, res) => {
  try {
    const { fullName, username, password, gender } = req.body;
    if (!fullName || !username || !password || !gender) {
      return SendErrorResponse(false, res, "Required fields are blank", 400);
    }

    let UserExist = await User.findOne({ username });
    if (UserExist) {
      return SendErrorResponse(false, res, "User Already Exist", 400);
    }
    // Hash Password
    let HasedPassword = await BcryptPassword(password);

    // Create User
    const user = new User({
      fullName,
      username,
      password: HasedPassword,
      gender,
    });

    if (user) {
      // Generate Token
      await GenerateTokenAndSetCookie(user._id, res);
      // save user
      await user.save();
      res
        .status(201)
        .json({ success: true, msg: "User Created Successfully", user: user });
    }
  } catch (error) {
    return SendErrorResponse(
      false,
      res,
      `Internal server Error: ${error}`,
      500
    );
  }
};

// Login Controller
export const loginuser = async (req, res) => {
  try {
    const { username, password } = req?.body;

    // Finding User
    let UserExist = await User.findOne({ username });
    if (!UserExist) {
      return SendErrorResponse(false, res, "User Not Exist", 400);
    }

    // Encrypt the password
    let EncryptPassword = await bcrypt.compare(password, UserExist?.password);
    if (!EncryptPassword) {
      return SendErrorResponse(false, res, "Password is Incorrect", 400);
    }

    await GenerateTokenAndSetCookie(UserExist._id, res);

    res
      .status(201)
      .json({ success: true, msg: "User Login Successfully", Data: UserExist });
  } catch (error) {
    return SendErrorResponse(
      false,
      res,
      `Internal server Error: ${error}`,
      500
    );
  }
};

// Logout Controller
export const logoutuser =  (req, res) => {
  try {
    res.cookie("jwt", "", {maxAge: 0})
    res.status(200).json({success: true, msg: "Logout successfully"})
  } catch (error) {
    return SendErrorResponse(
      false,
      res,
      `Internal server Error: ${error}`,
      500
    );
  }
};
