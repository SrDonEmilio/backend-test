const router = require('express').Router();
const { header, validationResult } = require('express-validator');

const { orderController } = require('../../controllers');

router.get(
  '/',
  header('UserId', 'UserId is required in headers').not().isEmpty(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
  orderController.indexAll
);
router.post('/', orderController.registerOrder);

module.exports = router;
