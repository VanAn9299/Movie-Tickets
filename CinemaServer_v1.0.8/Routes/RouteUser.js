const UserController = require('../Controller/UserController')
const router = require('express').Router();

router.get('/', UserController.GetUser);
router.post('/login', UserController.Login);
router.post('/register', UserController.Register);
router.post('/payment', UserController.Payment);

module.exports = router;