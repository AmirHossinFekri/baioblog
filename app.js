import express from "express";
import dotEnv from 'dotenv';

import {setStatic} from "./utils/static.js";
import {mainRouter} from "./routes/mainRouter.js";
import {adminRouter} from "./routes/AdminRouter.js";
import {userRouter} from './routes/UesrRouter.js';
import {connectDB} from "./config/db.js";

//*-dotEnv-----------
dotEnv.config({path:"./config/config.env"});
//*------------------


const app=express();

//*---DB-Config------

connectDB();

//*------------------


//*---body-parser----
app.use(express.urlencoded({extended:false}));
//*------------------

//*-views-config-----
app.set("view engine","ejs");
app.set("views","views");
//*------------------

//*-seting-static----
setStatic(app);
//*------------------

//*-adding-Routers---
app.use(mainRouter);
app.use("/admin",adminRouter);
app.use("/user",userRouter);
//*------------------

const PORT =process.env.PORT || 5000;

const MODE=process.env.NODE_ENV || "nothing";

app.listen(PORT,(err)=>{if(!err)console.log(`server is running on port ${PORT} in ${MODE} mode `);});