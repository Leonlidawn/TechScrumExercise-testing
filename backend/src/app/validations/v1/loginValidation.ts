import { body } from 'express-validator';

const user = [
    body('name').isString(),
    body('email').isEmail(),
    body('password').isString()
];

const loginValidation = { user };
export default loginValidation;