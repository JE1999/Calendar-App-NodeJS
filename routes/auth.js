const { Router } = require('express');
const { check } = require('express-validator')
const { fieldValidator } = require('../middlewares/field-validator')
const { 
    loginUser,
    createUser,
    reNewToken
} = require('../controllers/auth')

const router = Router();

router.post(
    '/',
    [
        check('email', 'Email is required').isEmail(),
        check('password', 'The password cannot be less than 6 characters').isLength({ min: 6 }),
        fieldValidator
    ],
    loginUser);

router.post(
    '/register', 
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('password', 'The password cannot be less than 6 characters').isLength({ min: 6 }),
        fieldValidator
    ], 
    createUser);

router.get('/renew', reNewToken);

module.exports = router
