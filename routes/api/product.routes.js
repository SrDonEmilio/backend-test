const router = require('express').Router();

const { productController } = require('../../controllers');

router.post('/', productController.registerProduct);

module.exports = router;
