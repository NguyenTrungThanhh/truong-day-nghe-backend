const express = require('express');
const router = express.Router();

const adminRoute = require('./admin.route');
const tinTucRoute = require('./tinTuc.route');
const uploadImageRoute = require('./uploadImage.route');

router.use('/adminLogin', adminRoute);
router.use('/TinTuc', tinTucRoute);
router.use('/upload-image', uploadImageRoute);

module.exports = router;
