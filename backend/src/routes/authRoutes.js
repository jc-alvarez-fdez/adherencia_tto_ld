// src/routes/authRoutes.js
import { Router } from 'express';
import { register, login, logout, forgotPassword, changePassword } from '../controllers/auth_controller.js';
import { registerValidator, loginValidator, forgotPasswordValidator, changePasswordValidator } from '../validations/auth_validation.js'

const router = Router();

// Rutas para registrarse e iniciar sesión
router.post('/register', registerValidator, register);
router.post('/login', loginValidator, login);
router.post('/forgot-password', forgotPasswordValidator, forgotPassword);
router.post('/change-password', changePasswordValidator, changePassword);
router.get('/logout', logout);

export default router;
