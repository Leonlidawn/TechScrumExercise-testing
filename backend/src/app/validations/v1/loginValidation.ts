import { body } from 'express-validator';

const user = [
    body("fname").isString(),
    body("lname").isString(),
    body("email").isString().isEmail(),
    body("password").isString(),
];

const loginValidation = { user };
export default loginValidation;