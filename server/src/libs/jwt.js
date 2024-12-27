import { SECRET_JWT_KEY } from '../config.js';
import jwt from 'jsonwebtoken';

function createAccessToken(payload){
    const token = jwt.sign(
        payload, 
        SECRET_JWT_KEY, 
        {
            expiresIn: '1d'
        });
    return token;    
}

export default createAccessToken;
