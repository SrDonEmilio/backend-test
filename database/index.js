const Sequelize = require('sequelize');

const feedbackModel = require('./models/feedback.model');
const userModel = require('./models/user.model');
const orderModel = require('./models/order.model');
const productModel = require('./models/product.model');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

const Feedback = feedbackModel(sequelize, Sequelize);
const User = userModel(sequelize, Sequelize);
const Order = orderModel(sequelize, Sequelize);
const Product = productModel(sequelize, Sequelize);

// Associations
User.hasMany(Order);
User.hasMany(Feedback);
Order.hasOne(Feedback);
Product.hasMany(Order)

sequelize.sync().then(() => {
  console.log('Sync Database');
});

module.exports = {
  Feedback,
  User,
  Order,
  Product
};
