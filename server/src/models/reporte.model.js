import mongoose from "mongoose";

const reporteSchema = new mongoose.Schema({
    type: { 
        type: String, 
        enum: ['competidor', 'evento'], 
        required: true 
    },
    data: { type: Object }, // Información del reporte (puede variar según el tipo)
    generatedBy: { type: String }, // ID del admin/instructor que generó el reporte
}, {
    timestamps: true
});


export default mongoose.model('Reporte', reporteSchema);