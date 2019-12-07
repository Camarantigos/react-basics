const db = require("../models");
const jwt = require("jasonwebtoken");

exports.signin = function() {};

exports.signup = async function(req, res, next) {
  try {
    // create user
    let user = await db.User.create(req.body);
    let { id, username, profileImageUrl } = user;
    // create token
    let token = jwt.sign(
      {
        id,
        username,
        profileImageUrl
      },
      process.env.SECRET_KEY
    );
    return res.status(200).json({
      id,
      username,
      profileImageUrl,
      token
    });
    // process.env.SECRET_KEY
  } catch (err) {
    //   if validation fails!
    if (err.code === 11000) {
      err.message = "Sorry, that username and/or email is taken!";
    }
    return next({
      status: 400,
      message: err.message
    });
    // if a certain error show message else a generic 400
  }
};
