const { Router } = require('express');

const router = Router();
const productController = require('../controllers/product');

router.post('/api/v1/product', productController.createProduct);
router.get('/api/v1/product', productController.listProduct);
router.delete('/api/v1/product/:id', productController.deleteProduct);
router.put('/api/v1/product/:id', productController.updateProduct);
router.get('/api/v1/product/:id', productController.readProduct);

module.exports = router;