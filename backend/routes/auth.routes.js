import express from 'express';
import { create_user, login, logout } from '../controller/auth.controller.js';


const router = express.Router();


router.post("/create-user", create_user);
router.post("/login", login);
router.get("/logout", logout);

export default router
