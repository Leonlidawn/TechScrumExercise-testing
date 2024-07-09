import { body } from "express-validator";

// user: An array of validation rules for user input fields.
const user = [
    body("fname").isString(),
    body("lname").isString(),//.isLength({ min: 3, max: 255 }),
    body("email").isString().isEmail(),
    body("password").isString(),
    //body("age").isInt().withMessage("Age must be an integer"),
];
// Creating and Exporting the userValidation Object
const userValidation = { user };
export default userValidation;
// userValidation: An object that contains the user array. 
// This makes it easier to manage and export.