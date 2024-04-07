// src/routes/medicamento_routes.js
import { Router } from 'express';
import { getMisMedicamentos, getMiMedicamentoById, addMiMedicamento, updateMiMedicamento, deleteMiMedicamento } from "../controllers/mi_medicamento_controller.js";
import authenticateToken from '../middlewares/authenticate_token.js';
import { medicamentoValidator } from '../validations/medicamento_validation.js';
import { idValidator } from '../validations/generic_validation.js'


const routerMisMedicamentos = Router();

// Rutas para crud de medicamentos
routerMisMedicamentos.get('/', authenticateToken, getMisMedicamentos); //devuelve todos los medicamentos
routerMisMedicamentos.get('/:id', authenticateToken, idValidator, getMiMedicamentoById); //devuelve medicamento por id
routerMisMedicamentos.post('/', authenticateToken, medicamentoValidator, addMiMedicamento); // añade medicamento
routerMisMedicamentos.put('/:id', authenticateToken, idValidator, medicamentoValidator, updateMiMedicamento); // actualiza medicamento
routerMisMedicamentos.delete('/:id', authenticateToken, idValidator, deleteMiMedicamento); // elimina medicamento por id

export default routerMisMedicamentos;