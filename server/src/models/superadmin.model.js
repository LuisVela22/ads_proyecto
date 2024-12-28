import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8, 
    },
    role: {
        type: String,
        enum: ['admin', 'superadmin'], 
        default: 'superadmin',
    },
}, {
    timestamps: true,
}); 

export default mongoose.model('SuperAdmin', adminSchema);
