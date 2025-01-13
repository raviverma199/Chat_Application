import { SendErrorResponse } from "../utils/helper.js";
import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res) => {
  try {
    let loggedInUserId = req.user._id;
    (loggedInUserId)

    let FilteredUser = await User.find({ _id: { $ne: loggedInUserId } });

    res.status(200).json(FilteredUser);
  } catch (error) {
    console.error(error);
    return SendErrorResponse(
      false,
      res,
      `Internal Server Error :${error}`,
      500
    );
  }
};
