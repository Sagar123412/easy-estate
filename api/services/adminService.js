import { adminModel } from "../models/adminModel.js"

export const getAdminData = () => {
    const data = adminModel.find();
    return data;
}