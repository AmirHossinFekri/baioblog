import { Router } from "express";

import { LoginPage,RegisterPage,RegisterController, LoginContreoller } from "../controllers/mainController.js";

const UserRouter=Router();

//?------GET-----------
UserRouter.get("/login",LoginPage);//? send user into /user/login

UserRouter.get("/register",RegisterPage);//? send user into /user/register
//?--------------------

//*-----POST-----------
UserRouter.post("/register",RegisterController);//? send user feedback into /user/register

UserRouter.post("/login",LoginContreoller);//? send user feedback into /user/login
//*--------------------


export const userRouter=UserRouter;
