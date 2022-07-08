const {Router} = require('express');
const router = Router();
const {index,addCart, updateCart, removeCart} = require('../controllers/main.controller');
router.get('/',index)
router.post('/cart/add',addCart)
router.post('/cart/update',updateCart)
router.post('/cart/delete',removeCart)
module.exports = router