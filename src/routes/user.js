const { Router } = require('express');

const router = Router();
const userController = require('../controllers/user');

router.post('/api/v1/user', userController.createUser);
router.get('/api/v1/user', userController.listUser);
router.delete('/api/v1/user/:id', userController.deleteUser);
router.put('/api/v1/user/:id', userController.updateUser);
router.get('/api/v1/user/:id', userController.readUser);

module.exports = router;