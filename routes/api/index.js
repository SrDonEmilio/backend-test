require('dotenv').config()

const router = require('express').Router();

const { checkAuthHeaders } = require('../../middlewares');

const feedbackRoutes = require('./feedback.routes');
const userRoutes = require('./user.routes');
const sessionRoutes = require('./session.routes');
const orderRoutes = require('./order.routes');
const productRoutes = require('./product.routes')

if(process.env.NODE_ENV === 'production'){
    router.use('/feedback', checkAuthHeaders, feedbackRoutes);
} else {
    router.use('/feedback', feedbackRoutes);
}

router.use('/user', userRoutes);
router.use('/session', sessionRoutes);
router.use('/order', orderRoutes);
router.use('/product', productRoutes)

module.exports = router;
