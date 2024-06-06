const express = require('express');
const router = express.Router();
const roomTypeController = require('../controllers/roomTypeController');

router.post('/', roomTypeController.createRoomType);
router.get('/', roomTypeController.getRoomTypes);

module.exports = router;
