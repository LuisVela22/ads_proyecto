import jwt from 'jsonwebtoken';
import {SECRET_JWT_KEY} from '../config.js'

export const authRequired = (req, res, next) => {
    //console.log(req.headers);
    const {acces_token} = req.cookies;
    //console.log(acces_token);
    
    if(!acces_token) return res.status(401).json({message: "SIN TOKEN"});
    

    jwt.verify(acces_token, SECRET_JWT_KEY, (err, admin) => {
        if(err) {
            //throw new Error(err);
            return res.status(403).json({
                message: "token invalido"
            
            })

        }
            
        req.admin = admin;
        next();
    })
}
