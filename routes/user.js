const express = require('express');
const router = require('express-promise-router')();

const userController = require('../controllers/user');
const { validateBody ,schemas } = require('../helpers/routerHelper');

router.route('/signup').post(validateBody(schemas.authSchema), userController.signUp);
router.route('/signin').post(userController.signIn);
router.route('/secret').get(userController.secret);

module.exports = router;
