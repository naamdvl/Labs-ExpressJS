import { Router } from "express"
import { validateLoanUsuarios } from "../middlewares/validateLoanUsuarios";
import { UsuariosController } from "../controllers/usuarios_controllers";

const LoanRouter = Router();

LoanRouter.get('/usuarios', UsuariosController.getLoansUsers);

LoanRouter.post('/new-user', validateLoanUsuarios, UsuariosController.addNewUser);

LoanRouter.get('/usuarios/:id', UsuariosController.getUserById);

LoanRouter.patch('/usuarios/:id', UsuariosController.updateUser);

LoanRouter.delete('/usuarios/:id', UsuariosController.deleteUser);