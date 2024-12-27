import mongoose from "mongoose";

const premioSchema = new mongoose.Schema({
    ueventId: { type: String, required: true },
    competidorId: { type: String, required: true },
    place: { type: Number, required: true }, // Lugar obtenido
    merits: { type: String }, // Ej: Kilómetros recorridos
    recognition: { type: String }, // URL del reconocimiento descargable
    ceremonyDate: { type: Date }, // Fecha de la ceremonia de premiación
}, {
    timestamps: true
});


export default mongoose.model('Premio', premioSchema);