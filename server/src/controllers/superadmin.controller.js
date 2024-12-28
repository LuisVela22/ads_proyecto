import SuAdmin from '../models/superadmin.model.js'
import crypto from 'node:crypto';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import createAccessToken from '../libs/jwt.js';
import { SALT_ROUNDS, expiration, SECRET_JWT_KEY } from '../config.js';

class SuAdminController {
    async register(req, res) {
        const { username, email, password, role } = req.body;
        try {
            const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

            const newSuAdmin = new SuAdmin({
                username,
                email,
                password: hashedPassword,
                role,
            })

            const SuAdminSaved = await newSuAdmin.save();

            //en el payload no asignamos contaseña 
            //o direccion para no exponer esos datos a
            //alguien que pueda acceder al token
            const token = createAccessToken({ id: SuAdminSaved._id });
            res
                .cookie('acces_token', token, {
                    httpOnly: true
                })
                .json({
                    id: SuAdminSaved._id,
                    username: SuAdminSaved.username,
                    email: SuAdminSaved.email
                });

        } catch (error) {
            res.status(500).json({ message: error.message })
        }

    }

    async login(req, res) {
        const { email, password } = req.body;

        try {
            const SuAdminFound = await SuAdmin.findOne({ email })
            if (!SuAdminFound) return res.status(404).json({ message: "usuario no encontrado" })

            const compareSuAdmin = await bcrypt.compare(password, SuAdminFound.password);

            if (!compareSuAdmin) return res.status(401).json({ message: "Unauthrorized" })


            const token = createAccessToken({ id: SuAdminFound._id });
            res
                .cookie('acces_token', token, {
                    httpOnly: true
                })
                .json({
                    id: SuAdminFound._id,
                    username: SuAdminFound.username,
                });

        } catch (error) {
            //console.log("entra aqui");
            res.status(500).json({ message: error.message })
        }
    }

    logout(req, res) {
        //res.status(500).json({message: "hola"})
        try {
            //console.log("intentando limpiar cookie")
            res.cookie('acces_token', "", {
                expires: new Date(0),
                httpOnly: true,
            })
            console.log("cookie bien limpiada")
            return res.status(200).json({ message: "Logout exitoso" });;
        } catch (error) {
            res.status(500).json({ message: error.message })
        }

    }

    async profile(req, res) {
        const SuAdminFound = await SuAdmin.findById(req.admin.id);

        if (!SuAdminFound) return res.status(400).json({ message: "SuperAdmin not found" });

        return res.json({
            id: SuAdminFound._id,
            username: SuAdminFound.username,
            email: SuAdminFound.email
        })
    }

    editar(req, res) {
        res.status(200).json({message: "falta la logica para mostrar, para editar los datos manualmente de la base de datos"});
    }
}

const controller = new SuAdminController();
//export const register = controller.register.bind(controller);
export const login = controller.login.bind(controller);
export const logout = controller.logout.bind(controller);
export const profile = controller.profile.bind(controller);
export const editar = controller.editar.bind(controller);