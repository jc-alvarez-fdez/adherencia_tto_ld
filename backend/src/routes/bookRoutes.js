// src/routes/paciente_routes.js
import { Router } from 'express';
import { getBooks, getBookById, addBook, updateBook, deleteBook } from '../controllers/bookController.js';
import authenticateToken from '../middlewares/authenticate_token.js';
import { bookValidator } from '../validations/book.Validation.js';
import { idValidator } from '../validations/generic_validation.js'

const router = Router();

// Rutas para obtener y modificar los datos de los usuarios
router.get('/', authenticateToken, getBooks);
router.get('/:id', authenticateToken, idValidator, getBookById);
router.post('/', authenticateToken, bookValidator, addBook);
router.patch('/:id', authenticateToken, idValidator, bookValidator, updateBook);
router.delete('/:id', authenticateToken, idValidator, deleteBook);

export default router;
