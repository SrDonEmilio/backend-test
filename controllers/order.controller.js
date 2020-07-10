const { Order } = require('../database');
const bcrypt = require('bcryptjs');
module.exports = {
  async indexAll(req, res) {
    const adminExist = await Order.findOne({ where: { userType: 'admin' } });
    if (!adminExist) {
      return res.json({
        message: 'You need be administrator user',
      });
    }
    return res.json(await Order.findAll());
  },

  async indexOne(req, res) {

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
        where: { id: req.params.userId }
      });
      return res.json({success: 'Order was modificated'})
    } catch (err) {
      return res.sendStatus(500)
    }
  },

  async deleteOrder(req, res) {
    try {
      await Order.destroy({where: {id: req.params.userId}})
      return res.json({success: 'Order was deleted'})
    } catch (error) {
      return res.sendStatus(500)
    }
  }
};
