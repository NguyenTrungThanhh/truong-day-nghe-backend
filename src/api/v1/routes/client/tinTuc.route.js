const express = require('express');
const router = express.Router();

const {
    handlerGetAllNews,
    handlerGetNewsBySlug,
} = require('../../../../../src/api/v1/controllers/client/tinTuc.controller');

router.get('/', handlerGetAllNews);
router.get('/:slug', handlerGetNewsBySlug);

module.exports = router;
