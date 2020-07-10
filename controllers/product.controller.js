const { Product } = require('../database');

module.exports = {
  async indexAll(req, res) {
    const adminExist = await Product.findOne({ where: { userType: 'admin' } });
    if (!adminExist) {
      return res.json({
        message: 'You need be administrator user',
      });
    }
    return res.json(await Product.findAll());
  },

  async registerProduct(req, res) {
    try {
      let product = await Product.create(req.body);
      return res.json(product);
    } catch (err) {
      return res.json({error: err.message}).sendStatus(500);
    }
  },

  async editProduct(req, res) {
    try {
      await Product.update(req.body, {
        where: { id: req.params.userId }
      });
      return res.json({success: 'Product was modificated'})
    } catch (err) {
      return res.sendStatus(500)
    }
  },

  async deleteProduct(req, res) {
    try {
      await Product.destroy({where: {id: req.params.userId}})
      return res.json({success: 'Product was deleted'})
    } catch (error) {
      return res.sendStatus(500)
    }
  }
};
