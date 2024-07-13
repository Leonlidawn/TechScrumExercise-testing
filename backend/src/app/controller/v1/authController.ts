import { Request, Response } from 'express';
<<<<<<< HEAD
import { registerUser, loginUser, logoutUser } from '../../services/v1/authService';
=======
import { registerUser } from '../../services/v1/authService';
>>>>>>> c087ff499e6c90edc0a297b01dd76a0299f8d877
import { validationResult } from 'express-validator';
import User from '../../model/user';

<<<<<<< HEAD
export function register(req: Request, res: Response) {
=======
export async function register(req: Request, res: Response) {
    //console.log(req.body);
>>>>>>> c087ff499e6c90edc0a297b01dd76a0299f8d877
    const error = validationResult(req);
    if(!error.isEmpty()) {
        const errorMessages = error.array().map(error => `${error.param}: ${error.msg}`);
        console.log(errorMessages);
        return res.status(422).json({ errors: error.array() });
    }
<<<<<<< HEAD
    registerUser(req.body);
    res.send("[controller]:loginController is called ");
}

export function login(req: Request, res: Response) {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        const errorMessages = error.array().map(error => `${error.param}: ${error.msg}`);
        console.log(errorMessages);
        return res.status(422).json({ errors: error.array() });
    }
    loginUser(req.body);
    res.send("[controller]:loginController is called");
}

export function logout(req: Request, res: Response) {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        return res.status(422).json({ errors: error.array() });
    }
    logoutUser(req.body);
    res.send("[controller]:logoutController is called");
=======
    // await registerUser(req.body);
    // res.send("♡♡♡♡♡♡♡[controller]:loginController is called ♡♡♡♡♡♡♡");
    const result = await registerUser(req);
    res.send(result);
}

export async function login(req: Request) {
    // 1. get user email and password
    // 2. use encrpt.compare to validate password
    // 3. if match, return user
    // 4. else return 401
    // 5. generate JWT token, so user can start using other secure api calls
    // 6. return user with JWT token
    
    const user = await User.findByCredentials(req.body.email, req.body.password);
    if(!user) {
        throw new Error("401");
    }
    console.log("---------->", user);
    const token = await user.generateJWTToken();
    return {user, ...{token: token}};
>>>>>>> c087ff499e6c90edc0a297b01dd76a0299f8d877
}