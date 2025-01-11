import mongoose from "mongoose";

const SignupSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
}, { timestamps: true } );


const user = mongoose.model("User", SignupSchema);

export default user
