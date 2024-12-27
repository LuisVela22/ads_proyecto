import mongoose from "mongoose";

const competidorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String, 
        sex: ['man', 'woman'],
        required: true,
    },
    category: {
        type: String, 
        required: true, //infantil, juvenil, adulto
    }, 
    events: {
        eventId: {
            type: String, 
            require: true
        },
        year: {
            type: Number, 
            requird: true,
        }, 
        sessions:[
            {
                sessionId: {type: String},
                distanceKm: {type: Number},
                time: {type: String}
            }
        ] 
        
    }
}, {
    timestamps: true
})

export default mongoose.model('Competidor', competidorSchema);