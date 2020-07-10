const router = require('express').Router();
const cors = require('cors');
const compression = require('compression');

const apiRoutes = require('./api');

router.use(cors()).use(compression());

router.use('/api', apiRoutes);

module.exports = router;
