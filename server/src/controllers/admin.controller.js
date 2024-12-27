import Admin from '../models/admin.model.js'
import crypto from 'node:crypto';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import createAccessToken from '../libs/jwt.js';
import { SALT_ROUNDS, expiration, SECRET_JWT_KEY } from '../config.js';



export const register = async (req, res) => {
    const {username, email, password} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const newAdmin = new Admin({
            username,
            email,
            password: hashedPassword,
        })

        const adminSaved = await newAdmin.save();

        //en el payload no asignamos contaseña 
        //o direccion para no exponer esos datos a
        //alguien que pueda acceder al token
        const token = createAccessToken({id: adminSaved._id});
        res
            .cookie('acces_token', token, {
                httpOnly: true
            })
            .json({
                id: adminSaved._id,
                username: adminSaved.username,
                email: adminSaved.email
            });
            
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
    //console.log(email, password, username);
    //res.send("bienvenido al registro")
}

export const login = async (req, res) => {
    const {username, password} = req.body;
    
    try {
        const adminFound = await Admin.findOne({username})
        if(!adminFound) return res.status(404).json({message:"usuario no encontrado"})

        const compareAdmin = await bcrypt.compare(password, adminFound.password);

        if(!compareAdmin) return res.status(401).json({message: "Unauthrorized"})

        
        const token = createAccessToken({id: adminFound._id});
        res
            .cookie('acces_token', token, {
                httpOnly: true
            })
            .json({
                id: adminFound._id,
                username: adminFound.username,
            });
            
    } catch (error) {
        //console.log("entra aqui");
        res.status(500).json({message: error.message})
    }
}

export const logout = (req, res) => {
    //res.status(500).json({message: "hola"})
    try {
        console.log("intentando limpiar cookie")
        res.cookie('acces_token',"", {
            expires: new Date(0),
            httpOnly: true,
        })
        console.log("cookie bien limpiada")
        return res.status(200).json({ message: "Logout exitoso" });;    
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
}

export const profile = async (req, res) => {
    const adminFound = await Admin.findById(req.admin.id);
    
    if(!adminFound) return res.status(400).json({message: "Admin not founf"});

    return res.json({
        id: adminFound._id,
        username: adminFound.username,
        email: adminFound.email
    })
}