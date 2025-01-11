import express from "express";
const app = express();
import ConnectDb from "./config/dbconnection.js";
import authRoute from "./routes/auth.routes.js"
import MessageRoute from "./routes/message.routes.js"


app.use(express.json());

// Auth Spefic Route
app.use('/api/auth', authRoute)

// Message Spefic Route
app.use('/api/message', MessageRoute)

app
  .listen(2020, () => {
    ConnectDb()
    console.log("server is running on port 2020");
  })
  .on("error", (err) => {
    console.log("Error :", err);
  });
