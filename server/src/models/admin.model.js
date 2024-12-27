import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlenght: 8
    },
    role: {
        type: String, 
        enum: ['admin', 'superadmin'], 
        default: 'admin'
    }
}, {
    timestamps: true
});


export default mongoose.model('Admin', adminSchema)