import { Request, Response } from 'express';
import { loginService } from '../../services/v1/authService';
import { validationResult } from 'express-validator';

export function authController(req: Request, res: Response) {
    //console.log(req.body);
    const error = validationResult(req);
    if(!error.isEmpty()) {
        const errorMessages = error.array().map(error => `${error.param}: ${error.msg}`);
        console.log(errorMessages);
        return res.status(422).json({ errors: error.array() });
    }
    loginService();
    res.send("♡♡♡♡♡♡♡[controller]:loginController is called ♡♡♡♡♡♡♡");
}