import express from "express";
const route = express.Router();
import { ProtectRoute } from "../middleware/protectroute.js";
import { getUserForSidebar } from "../controller/user.controller.js"

// Route the get the user profile Detail
route.get("/getsidebaruser", ProtectRoute, getUserForSidebar);

export default route