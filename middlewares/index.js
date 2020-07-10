require('dotenv').config();

const jwt = require('jwt-simple');
const moment = require('moment');

const checkAuthHeaders = (req, res, next) => {
  if (!req.headers['user-token'] && !red.header['UserId']) {
    return res.sendStatus(401);
  }

  const userToken = req.headers['user-token'];
  let payload = {};

  try {
    payload = jwt.decode(userToken, process.env.TOKEN_PHRASE);
  } catch (err) {
    return res.sendStatus(401);
  }

  if (payload.expiredAt < moment().unix()) {
    return res.sendStatus(401);
  }

  next();
};

module.exports = {
    checkAuthHeaders : checkAuthHeaders
}