const express = require('express');
const router = express.Router();
const upload = require('../../../../../src/api/v1/middleware/multer');
const { authAdmin } = require('../../../../../src/api/v1/middleware/auth.middleware');

const {
    handlerGetAllNews,
    handlerAddNews,
    handlerDeleteNews,
} = require('../../../../../src/api/v1/controllers/admin/tinTuc.controller');

router.get('/', authAdmin, handlerGetAllNews);
router.post('/add', authAdmin, upload.single('image'), handlerAddNews);
router.delete('/delete/:id', authAdmin, handlerDeleteNews);

module.exports = router;
