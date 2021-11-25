const express = require('express');
const router = express.Router();
const {
  registerUserValidations,
  loginUserValidations,
  validate,
} = require('../middleware/validations');
const userController = require('../controllers/user');

router.post(
  '/register',
  registerUserValidations(),
  validate,
  userController.userRegister
);

router.post(
  '/login',
  loginUserValidations(),
  validate,
  userController.userLogin
);

module.exports = router;
