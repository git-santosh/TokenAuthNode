const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport')
const userController = require('../controllers/user');
const passportConf = require('../passport');
const { validateBody ,schemas } = require('../helpers/routerHelper');

router.route('/signup').post(validateBody(schemas.authSchema), userController.signUp);
router.route('/signin').post(userController.signIn);
router.route('/secret').get(passport.authenticate('jwt',{session:false}), userController.secret);

module.exports = router;
