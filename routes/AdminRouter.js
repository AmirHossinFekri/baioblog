import { Router } from "express";

import { adminController } from "../controllers/adminController.js";

const tempadminRouter = Router();

tempadminRouter.get('/index',adminController); //? send user into views/admin/mainPage as them dashboard 

export const adminRouter=tempadminRouter;