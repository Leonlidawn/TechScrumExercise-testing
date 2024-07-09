import { body } from 'express-validator';

const user = [
    body('name').isString(),//.isLength({ min: 3, max: 255 }),
    body('email').isEmail(),
    body('password').isString()
];

const registerValidation = { user };
export default registerValidation;