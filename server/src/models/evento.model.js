import mongoose from "mongoose";

const eventoSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    description: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    registrationStart: { type: Date, required: true },
    registrationStart: { type: Date, required: true },
    modalities: [{ type: String }], // Ej: Exterior, Cinta, Categorías
    cost: { type: Number, required: true },
    requirements: { type: String },
    rules: { type: String },
    schedule: [
        {
            date: { type: Date },
            startTime: { type: String },
            endTime: { type: String }
        }
    ],
    sessions: [
        {
            sessionId: { type: String },
            description: { type: String },
            outOfCalendar: { type: Boolean, default: false },
            reason: { type: String } // Solo si está fuera de calendario
        }
    ]
}, {
    timestamps: true
});


export default mongoose.model('Evento', eventoSchema)