const { loginAdmin } = require('../../../../../src/api/v1/services/admin.service');

const handlerLoginAdmin = async (req, res) => {
    try {
        const { password } = req.body;

        const token = await loginAdmin(password);
        if (!token) {
            return res.status(401).json({ success: false, message: 'Mật khẩu không đúng' });
        }

        return res.json({ success: true, token });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    handlerLoginAdmin,
};
