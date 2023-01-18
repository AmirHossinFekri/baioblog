import { Router } from "express";

import { mainPage} from "../controllers/mainController.js";

const mainRouter1=Router();

mainRouter1.get("/",mainPage); //? send index page in view as mainPage into user

export const mainRouter=mainRouter1;