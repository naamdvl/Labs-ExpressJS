import { Router } from "express";
import LoanRouter from "./loan_router";

const ApiRouter = Router();

ApiRouter.use('/loans', LoanRouter)

export default ApiRouter;