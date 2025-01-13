import express from "express";
import ConnectDb from "./config/dbconnection.js";
import authRoute from "./routes/auth.routes.js"
import MessageRoute from "./routes/message.routes.js"
import sideBarUser from "./routes/user.route.js"
import cookieParser from "cookie-parser";
import cors from 'cors';
import { app, server } from "./socket/socket.js"

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Auth Spefic Route
app.use('/api/auth', authRoute);
// Message Spefic Route
app.use('/api/message', MessageRoute);
// UserProfile Spefic Route
app.use('/api/user', sideBarUser);

server
  .listen(2020, () => {
    ConnectDb()
    console.log("server is running on port 2020");
  })
  .on("error", (err) => {
    console.log("Error :", err);
  });
