const jwt = require('jsonwebtoken');
const User = require('../models/user');

// authenticates the user that has logged in/signed up
// sets the the authenticated user and token to the request
const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({
      _id: decoded._id,
      'tokens.token': token,
    });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    console.log(e);
    res.status(401).send({ error: 'Please Authenticate' });
  }
};

module.exports = auth;
