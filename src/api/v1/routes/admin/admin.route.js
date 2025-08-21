const express = require('express');
const { handlerLoginAdmin } = require('../../../../../src/api/v1/controllers/admin/admin.controller');
const router = express.Router();

router.post('/', handlerLoginAdmin);

module.exports = router;
