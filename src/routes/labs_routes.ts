import { Router } from "express";
import { validateLoanNewLabs } from "../middlewares/validateLoanNewLabs";
import { LabsController } from "../controllers/labs_controllers";

const LoanRouter = Router();

LoanRouter.get('/labs-areas', LabsController.getListLabs);

LoanRouter.post('/new-labs-areas', validateLoanNewLabs, LabsController.postLabs);

LoanRouter.patch('/update-labs-areas/:id', LabsController.updateLabs);