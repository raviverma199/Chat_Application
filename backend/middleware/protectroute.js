import jwt from "jsonwebtoken";
import { SendErrorResponse } from "../utils/helper.js";
import User from "../models/user.model.js";
import dotenv from "dotenv";
dotenv.config();

const ProtectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return SendErrorResponse(
        false,
        res,
        "Unauthorized - No Token Provided",
        400
      );
    }
    // Decoded the jwt token through secret key
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return SendErrorResponse(false, res, "Token is Expired", 400);
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return SendErrorResponse(false, res, "User Not Found", 404);
    }
    req.user = user;

    next();
  } catch (error) {
    console.error(error);
  }
};

export { ProtectRoute };
