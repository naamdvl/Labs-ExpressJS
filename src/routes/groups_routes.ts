
import { Router } from "express"
import { validateLoanNewGroup } from "../middlewares/validateLoanNewGroup";
import { GroupsController } from "../controllers/group_controllers";

const LoanRouter = Router();

LoanRouter.post('/new-group-labs', validateLoanNewGroup, GroupsController.newGroupLab);

LoanRouter.get('/list-groups-exists', GroupsController.listGroupExists);

LoanRouter.patch('/update-group/:id', GroupsController.listGroupExists);