import mongoose from "mongoose";

const ConversionModel = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    message: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "message",
            default: [],
        }
    ]
}, { timestamps } )



const conversion = mongoose.model("conversion", ConversionModel);

export default conversion