/* 
this part will set static path for css and js codes 
all front assets will setting here!!
*/

import path from 'path';

import express from 'express';

import __dirname from './dirname.js';

export const setStatic = (app) => {
    //*-------------my-custom-assets------
    app.use("/css",express.static(path.join(__dirname, "public","css")));
    app.use("/js",express.static(path.join(__dirname, "public","js")));
    //*-----------------------------------

    //*-------------bootstrap-------------
    app.use("/css",express.static(path.join(__dirname, "node_modules", "bootstrap","dist","css")));
    app.use("/js",express.static(path.join(__dirname,"node_modules","bootstrap","dist","js")));
    //*-----------------------------------

    //*-------------fortawesome-------------
    app.use('/css', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/css')));
    app.use('/webfonts', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts')));
    //*-----------------------------------

    //*-------------jquery----------------
    app.use("/js",express.static(path.join(__dirname,"node_modules","jquery","dist")));
    //*-----------------------------------

}