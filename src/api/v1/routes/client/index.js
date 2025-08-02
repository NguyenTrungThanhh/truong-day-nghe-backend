const express = require('express');
const router = express.Router();

const tinTucRoute = require('./tinTuc.route');

router.use('/TinTuc', tinTucRoute);

module.exports = router;
