import mongoose from "mongoose";


const adminSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        unique: true,
    },
    phone: {
        type: String,
        require: true,
        unique: true,
    },
    role: {
        type: String,
        require: true,
    },
})

export const adminModel = mongoose.model('Admin', adminSchema);