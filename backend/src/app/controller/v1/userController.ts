import { Request, Response } from "express";
import { userService } from "../../services/v1/userService";
import { validationResult } from "express-validator";

export function userController(req: Request, res: Response) {
    //console.log(req.body);
    const error = validationResult(req);
    if(!error.isEmpty()) {
        const errorMessages = error.array().map(error => `${error.param}: ${error.msg}`);
        console.log(errorMessages);
        return res.status(422).json({ errors: error.array() });
    }
    userService();
    res.send("♡♡♡♡♡♡♡[controller]:userController is called ♡♡♡♡♡♡♡");
}

// router.post('/register', validateUser, (req: Request, res: Response) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     const { username, email, password } = req.body;
//     // TODO: Implement user registration logic
//     res.status(201).json({ message: 'User registered successfully', data: { username, email } });
// });
