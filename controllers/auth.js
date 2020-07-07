const User = require('../models/User');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('config');

const signin = async (req, res) => {
  try {
    let user = await User.findOne({
      'email': req.body.email,
    });
    if (!user)
      return res.status('401').json({
        error: 'User not found',
      });

    if (!user.authenticate(req.body.password)) {
      return res.status('401').send({
        error: "Email and password don't match.",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      config.jwtSecret
    );

    return res.json({
      token,
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status('401').json({
      error: 'Could not sign in',
    });
  }
};

const signout = (req, res) => {
  res.clearCookie('t');
  return res.status('200').json({
    message: 'signed out',
  });
};

const requireSignin = expressJwt({
  secret: config.jwtSecret,
  userProperty: 'auth',
});

const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!authorized) {
    return res.status('403').json({
      error: 'User is not authorized',
      req: `auth: ${req.auth.iat}`,
    });
  }
  next();
};

module.exports = {
  signin,
  signout,
  hasAuthorization,
  requireSignin,
};
