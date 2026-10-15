import { Router } from "express"
import { LoanController } from "../controllers/loan_controller";

const LoanRouter = Router();

LoanRouter.get('/search', LoanController.getLoansByFilter);

LoanRouter.get('/:id', LoanController.getLoanById);

LoanRouter.post('/', LoanController.CreateLoan);

LoanRouter.put('/:id/accept', LoanController.acceptLoanInventory);

export default LoanRouter