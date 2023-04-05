const express = require('expresss');
const router = express.Router();
const wsController = require('../controllers/wsController')

router.ws('/ws', wsController.handleConnection);

module.exports = router;