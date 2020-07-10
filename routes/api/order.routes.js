const router = require('express').Router();

const { orderController } = require('../../controllers');

router.post('/', orderController.registerOrder);

module.exports = router;
