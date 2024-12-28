import e, { Router } from "express";
import {login, logout, profile, editar} from '../controllers/superadmin.controller.js'
import {authRequired} from '../middlewares/validarTokenAdmin.js';

const router = Router();

//router.post("/register", register)
router.post("/login", login)
router.post("/logout", authRequired,logout);
router.get("/profile",  authRequired, profile);
router.put("/editar",  authRequired, editar);//faltta implementar
router.get("/", ()=> {
    console.log("bienvenido")
})

export default router;