import express from "express";
const route = express.Router();
import { signup, loginuser, logoutuser } from "../controller/auth.controller.js";


// Main Route
route.get("/", (req, res) => {
  res.send("Hello world !");
});


// Route for signup the user
route.post("/signup", signup);

// Route for Login the User
route.post("/loginuser", loginuser)

// Route for Logout the User
route.post("/logoutuser", logoutuser)
export default route;
