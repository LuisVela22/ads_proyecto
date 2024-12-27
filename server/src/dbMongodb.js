import mongoose from 'mongoose'
import { url_data } from './config.js';

const uri = url_data;


export const connectDB =  async () => {
    try {
        await mongoose.connect(uri)
        console.log("Database conectada");    
    } catch (error) {
        console.error(error)
    }
    
        
}
console.log("holaa")



