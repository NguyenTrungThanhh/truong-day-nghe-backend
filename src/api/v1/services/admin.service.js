const jwt = require('jsonwebtoken');
const config = require('../../../../src/api/v1/configs/app.config');

const loginAdmin = async (password) => {
    if (password !== config.adminPassword) {
        return null;
    }

    // Tạo JWT token
    const token = jwt.sign({ role: 'admin' }, config.jwtSecret, { expiresIn: config.jwtExpiresIn });

    return token;
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, config.jwtSecret);
    } catch (err) {
        return null;
    }
};

module.exports = {
    loginAdmin,
    verifyToken,
};
