const { User } = require('../database');
const bcrypt = require('bcryptjs');
module.exports = {
  async index(req, res) {
    const adminExist = await User.findOne({ where: { userType: 'admin' } });
    if (!adminExist) {
      return res.json({
        message: 'You need be administrator user',
      });
    }
    return res.json(await User.findAll());
  },

  async registerUser(req, res) {
    try {
      const adminExist = await User.findOne({ where: { userType: 'admin' } });
      if (!adminExist) {
        return res.json({
          message: 'You need an administrator user. Check the documentation',
        });
      }
      const userExist = await User.findOne({
        where: { username: req.body.username },
      });
      const emailExist = await User.findOne({
        where: { email: req.body.email },
      });
      if (userExist) {
        return res.json({ message: 'The username is already in use' });
      }
      if (emailExist) {
        return res.json({ message: 'The email is already in use' });
      }
      req.body.password = bcrypt.hashSync(req.body.password, 10);
      let user = await User.create(req.body);
      return res.json(user);
    } catch (err) {
      return res.sendStatus(500);
    }
  },

  async editUser(req, res) {
    try {
      await User.update(req.body, {
        where: { id: req.params.userId }
      });
      return res.json({success: 'User was modificated'})
    } catch (err) {
      return res.sendStatus(500)
    }
  },

  async deleteUser(req, res) {
    try {
      await User.destroy({where: {id: req.params.userId}})
      return res.json({success: 'User was deleted'})
    } catch (error) {
      return res.sendStatus(500)
    }
  }
};
