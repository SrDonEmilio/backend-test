const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const adminRoutes = require('./admin.routes');

const { userController } = require('../../controllers');

router.use('/admin', adminRoutes);

router.get('/', userController.index);
router.post(
  '/',
  check('username', 'Username is required').not().isEmpty(),
  check('password', 'Password is required').not().isEmpty(),
  check('email', 'Email is required').isEmail(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
  userController.registerUser
);
router.put('/:userId', userController.editUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;
