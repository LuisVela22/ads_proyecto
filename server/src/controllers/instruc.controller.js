import Instruc from '../models/instructor.model.js'
import crypto from 'node:crypto';
import bcrypt from 'bcryptjs';
import createAccessToken from '../libs/jwt.js';
import { SALT_ROUNDS, expiration, SECRET_JWT_KEY } from '../config.js';

class InstructorController {
    async register(req, res) {
        const { username, email, phone, password } = req.body;

        try {
            const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

            const newInstruc = new Instruc({
                username,
                email,
                phone,
                password: hashedPassword,
            });

            const instrucSaved = await newInstruc.save();

            const token = createAccessToken({ id: instrucSaved._id });
            res
                .cookie('acces_token', token, {
                    httpOnly: true,
                })
                .json({
                    id: instrucSaved._id,
                    username: instrucSaved.username,
                    email: instrucSaved.email,
                });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async login(req, res) {
        const { email, password } = req.body;

        try {
            const instrucFound = await Instruc.findOne({ email });

            if (!instrucFound) {
                return res.status(404).json({ message: "Instructor no encontrado en la base de datos" });
            }

            const compareInstruc = await bcrypt.compare(password, instrucFound.password);

            if (!compareInstruc) {
                return res.status(401).json({ message: "Unauthorized" });
            }

            const token = createAccessToken({ id: instrucFound._id });

            res
                .cookie('acces_token', token, {
                    httpOnly: true,
                })
                .json({
                    id: instrucFound._id,
                    username: instrucFound.username,
                });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    logout(req, res) {
        try {
            res.cookie('acces_token', "", {
                expires: new Date(0),
                httpOnly: true,
            });
            return res.status(200).json({ message: "Logout exitoso" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async profile(req, res) {
        const instrucFound = await Instruc.findById(req.instruc.id);


        if (!instrucFound) return res.status(400).json({ message: "Instruc not founf" });

        return res.json({
            id: instrucFound._id,
            username: instrucFound.username,
            email: instrucFound.email
        })

    }
}


const controller = new InstructorController();
export const register = controller.register.bind(controller);
export const login = controller.login.bind(controller);
export const logout = controller.logout.bind(controller);
export const profile = controller.profile.bind(controller);
