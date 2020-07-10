const router = require('express').Router();

const { adminController } = require('../../controllers');

router.get('/', adminController.generateAdmin);

module.exports = router;
