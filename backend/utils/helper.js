import bcrypt from "bcrypt";

// Function to send the Error Response in JSON
function SendErrorResponse(success, res, msg, statusCode = 400) {
  try {
    const response = {
      success: success,
      message: msg,
    };

    res.status(statusCode).json(response);
  } catch (error) {
    console.error(error);
  }
}

// Function to Bcrypt the Password
async function BcryptPassword(password) {
  try {
    const SaltRound = 10;
    let HasedPassword = await bcrypt.hash(password, SaltRound);
    return HasedPassword;
  } catch (error) {
    console.error(error);
  }
}

export { SendErrorResponse, BcryptPassword };
