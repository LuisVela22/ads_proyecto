import { Router } from "express";
import {register, login, logout, profile} from '../controllers/instruc.controller.js'
import {authRequired} from '../middlewares/validarTokenInstruc.js';

const router = Router();

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout);
router.get("/profile",  authRequired, profile);
router.get("/profile/create",  authRequired, profile);//
router.get("/", ()=> {
    console.log("bienvenidoooo")
})

export default router;