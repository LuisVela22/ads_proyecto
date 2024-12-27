import mongoose from "mongoose";

const instrucSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    password: {
      type: String, 
      required: true,
      minlenght: 8
    },
    events: [
      {
        eventId: { type: String, required: true },
        role: { type: String, enum: ['responsable', 'asistente'] }
      }
    ]
}, {
    timestamps: true
});


export default mongoose.model('Instructor', instrucSchema);