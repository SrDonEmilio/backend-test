require('dotenv').config();

const { User } = require('../database');
const bcrypt = require('bcryptjs');
const generatePassword = (max, min) => {
  var passwordChars =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/';
  var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
  var randPassword = Array(randPwLen)
    .fill(passwordChars)
    .map(function (x) {
      return x[Math.floor(Math.random() * x.length)];
    })
    .join('');
  return randPassword;
};
module.exports = {
  async generateAdmin(req, res) {
    try {
      let adminPassword = process.env.ADMIN_PASSWORD || generatePassword(22, 20);
      let bcrpytPassword = bcrypt.hashSync(adminPassword, 10);
      const [admin, adminCreated] = await User.findOrCreate({
        where: { userType: 'admin' },
        defaults: {
          username: process.env.ADMIN_USERNAME,
          email: process.env.ADMIN_EMAIL,
          password: bcrpytPassword,
        },
      });
      if (adminCreated) {
        res.json({ admin, message: `Your password is ${adminPassword}` });
      } else {
        return res.sendStatus(403);
      }
    } catch (err) {
      return res.sendStatus(500);
    }
  },
};
