import { Router } from "express"
import { LoanController } from "../controllers/loan_controller";
import { validateLoanPayload } from "../middlewares/validateLoan.middleware";


const LoanRouter = Router();


LoanRouter.get('/search', LoanController.getLoansByFilter);

LoanRouter.get('/:id', LoanController.getLoanById);

LoanRouter.post('/', validateLoanPayload, LoanController.CreateLoan);

LoanRouter.put('/:id/accept', LoanController.acceptLoanInventory);

export default LoanRouter