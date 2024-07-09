import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator'; // this is not there???
import User from '../../model/user';
import config from '../../config/app'; // the secret key is stored here

export async function registerUser(req: Request) {
    //const email = req.body.email;
    const { email = null} = req.body
    const password = req.body.password;
    const name = req.body.name;
    const user = await User.findOne(email);
    // if (user) {
    //     return { error: 'User already exists' };
    // }
    if (user) throw new Error('User already exists');
    const newUser = new User(req.body);
    const validationToken = jwt.sign({ id: newUser.id }, config.secret);
    newUser.token = validationToken;
    await newUser.save();
    return newUser
}

/*
    Destructuring Assignment: This syntax allows you to extract properties from objects and assign them to variables. 
    In this case, req.body is expected to be an object, and you're trying to extract the email property from it.

    Default Value: The = null part is setting a default value for the email variable. 
    If the email property does not exist in req.body, or if it is undefined, email will be set to null.

    const email = req.body.email !== undefined ? req.body.email : null;

    const req = {
        body: {
            email: "user@example.com"
        }
    };

    const { email = null } = req.body;
    console.log(email); // Output: "user@example.com"

    const req = {
        body: {}
    };

    const { email = null } = req.body;
    console.log(email); // Output: null

    And if email is not present in req.body:
    const req = {
        body: {}
    };
    const { email = null } = req.body;
    console.log(email); // Output: null

    This approach is useful for ensuring that you have a default value (in this case, null) 
    if the expected property (email) is not provided in the object (req.body).



*/




// export function loginService() {
//     console.log("♡♡♡♡♡♡♡[service]:loginService successfully accessed ♡♡♡♡♡♡♡");
// }

