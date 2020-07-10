require('dotenv').config();

const { User } = require('../database');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jwt-simple');

const createToken = (user) => {
  const payload = {
    userId: user.id,
    createdAt: moment().unix(),
    expiredAt: moment().add(5, 'minutes').unix(),
  };

  const tokenPhrase = process.env.TOKEN_PHRASE;

  return jwt.encode(payload, tokenPhrase);
};

module.exports = {
  async newSession(req, res) {
    const user = await User.findOne({
      where: {
        [Op.or]: [
          { username: req.body.username },
          { email: req.body.username },
        ],
      },
    });
    if (user) {
      const matchPassword = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (matchPassword) {
        res.json({ sucess: createToken(user) });
      } else {
        res.json({ error: 'User or password incorrect' });
      }
    } else {
      res.json({ error: 'User or password incorrect' });
    }
  },
};
