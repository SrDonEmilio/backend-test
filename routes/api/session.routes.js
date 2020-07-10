const router = require('express').Router();

const { sessionController } = require('../../controllers');

router.post('/', sessionController.newSession);

module.exports = router;
