import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const GenerateTokenAndSetCookie = async (userId, res) => {
  try {
    let Token = await jwt.sign({ userId }, process.env.SECRET_KEY, {
      expiresIn: "15d",
    });
    res.cookie("jwt", Token, {
      maxAge: 15 * 24 * 60 * 60 * 1000, //MS
      httpOnly: true, // prevent xxs attack (cross site scripting attack)
      sameSite: "strict"  // prevent csrf attack (cross site forgery attack)
    });

  } catch (error) {
    console.error(error);
  }
};



export { GenerateTokenAndSetCookie }