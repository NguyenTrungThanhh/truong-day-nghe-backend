const { verifyToken } = require('../../../../src/api/v1/services/admin.service');

const authAdmin = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // format: Bearer <token>

    if (!token) {
        return res.status(401).json({ success: false, message: 'Missing token' });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(403).json({ success: false, message: 'Invalid token' });
    }

    if (decoded.role !== 'admin') {
        return res.status(403).json({ success: false, message: 'Access denied' });
    }

    req.admin = decoded;
    next();
};

module.exports = {
    authAdmin,
};
