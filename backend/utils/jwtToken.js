//ccceate tokenan saaaeeeha in cookie

const user = require("../model/user");

const sendToken = (user, statusCode, res) => {
  const token = user.getJwtToken();

  //options for cookie
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  res
    .header("Access-Control-Allow-Origin", "https://e-wish-mart.onrender.com")
    .status(statusCode)
    .cookie("token", token, options)
    .json({
      success: true,
      user,
      token,
    });
};
module.exports = sendToken;
