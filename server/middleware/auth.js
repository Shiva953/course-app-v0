/* eslint-disable no-undef */
const jwt = require('jsonwebtoken');
let SECRET;
// const SECRET = 'cbhjcdanwcdaxiqwhgjdc';  // This should be in an environment variable in a real application

const authenticateJwt = (req, res, next) => {

  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    return res.sendStatus(401);
  }
};

const signToken = (data) => {
  if (data.role === 'admin') {
    SECRET = 'ad98tu4ih'; 
  } else if (data.role === 'user') {
    SECRET = 'us78tiruw'; 
  } else {
    throw new Error('Invalid role');
  }
  return jwt.sign(data, SECRET, { expiresIn: '1h' });
};

module.exports = {
    authenticateJwt,
    signToken
}