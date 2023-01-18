import {UserValid} from "../validation/UserValid.js";


//?-------get-pages--------
//! @dec this method whill send back pages into user 
//! just send view to user

//* @Route /
export const mainPage=(req,res)=>{
    res.render("index" ,{pageTitle:"به وبلاگ من خوش آمدید"});
}


//* @Route /user/login
export const LoginPage=(req,res)=>{
    res.render("login",{pageTitle:"ورود"})
}


//* @Route /user/register
export const RegisterPage=(req,res)=>{
    res.render("register",{pageTitle:"ثبت نام"});
}
//?-------------------------




//?--------post---pages-----
//! @dec this will resive user sended to server

//* @Route /user/register
export const RegisterController=(req,res)=>{
    UserValid.isValid({
        fullname:req.body.fullname,
        email:req.body.email,
        password:req.body.password,
        passwordConfirm:req.body.passwordConfirm
    }).then((valid)=>{
        if(valid)console.log(req.body);
    });
    UserValid.validate({}).catch((err)=>console.log(err.errors));

    res.redirect("/");
}

export const LoginContreoller=(req,res)=>{
    console.log(req.body);
    res.redirect("/");
}
//?-------------------------