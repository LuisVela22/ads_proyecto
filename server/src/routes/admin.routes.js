import { Router } from "express";
import {register, login, logout, profile} from '../controllers/admin.controller.js'
import {authRequired} from '../middlewares/validarTokenAdmin.js';
const router = Router();

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout);
router.get("/profile",  authRequired, profile);
router.get("/", ()=> {
    console.log("bienvenido")
})

export default router;