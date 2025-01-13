import express from "express";
const route = express.Router();
import { SendMessage, getMessage } from "../controller/message.controller.js";
import { ProtectRoute } from "../middleware/protectroute.js";

// Route to Send Message Route
route.post("/send/:id", ProtectRoute, SendMessage);

// Route to Get the Message
route.get("/:id", ProtectRoute, getMessage);

export default route;
