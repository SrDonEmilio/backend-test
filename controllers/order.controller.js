const { Order, User } = require('../database');

module.exports = {
  async indexAll(req, res) {
    const user = await User.findOne({
      where: { id: req.headers.userid },
    });
    if (user) {
      const userType = await user.getDataValue('userType');
      if (userType != 'admin') {
        return res.json({
          message: 'You need be administrator user',
        });
      }
      return res.json(await Order.findAll());
    } else {
      return res.status(401);
    }
  },

  async registerOrder(req, res) {
    try {
      let order = await Order.create(req.body);
      return res.json(order);
    } catch (err) {
      return res.sendStatus(500);
    }
  },

  async editOrder(req, res) {
    try {
      await Order.update(req.body, {
        where: { id: req.params.userId },
      });
      return res.json({ success: 'Order was modificated' });
    } catch (err) {
      return res.sendStatus(500);
    }
  },

  async deleteOrder(req, res) {
    try {
      await Order.destroy({ where: { id: req.params.userId } });
      return res.json({ success: 'Order was deleted' });
    } catch (error) {
      return res.sendStatus(500);
    }
  },
};
