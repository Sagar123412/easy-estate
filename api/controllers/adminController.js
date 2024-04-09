import { getAdminData } from "../services/adminService.js"

export const verifyAdminLogin = async (req, res) => {
    const data = await getAdminData();
    const { email, password, phone, userRole } = req.body;

    if (!email || !password || !phone || !userRole) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (email !== data[0].email) {
        return res.status(401).json({ message: 'Invalid Email' });
    }

    if (password !== data[0].password) {
        return res.status(401).json({ message: 'Invalid Password' });
    }

    if (phone !== data[0].phone) {
        return res.status(401).json({ message: 'Invalid Phone Number' });
    }

    if (userRole !== data[0].role) {
        return res.status(401).json({ message: 'Invalid Role' });
    }

    res.status(200).json({ message: 'Login Success' });
}
