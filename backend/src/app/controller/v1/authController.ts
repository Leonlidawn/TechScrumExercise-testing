import { Request, Response } from 'express';
import { registerUser } from '../../services/v1/authService';
import { validationResult } from 'express-validator';
import User from '../../model/user';

export async function register(req: Request, res: Response) {
    //console.log(req.body);
    const error = validationResult(req);
    if(!error.isEmpty()) {
        const errorMessages = error.array().map(error => `${error.param}: ${error.msg}`);
        console.log(errorMessages);
        return res.status(422).json({ errors: error.array() });
    }
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
}