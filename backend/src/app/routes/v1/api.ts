import { Router } from "express";
import { userController } from "../../controller/v1/userController";
import { ticketController} from "../../controller/v1/ticketController"; 
import { authController } from "../../controller/v1/authController";
import userValidation from "../../validations/v1/userValidation";
import ticketValidation from "../../validations/v1/ticketValidation";
import loginValidation  from "../../validations/v1/loginValidation";
import registerValidation from "../../validations/v1/registerValidation";

const router = Router();

router.get("/user", userValidation.user, userController);
router.post("/user", userValidation.user, userController);
router.get("/ticket",  ticketValidation.ticket, ticketController);
router.post("/ticket", ticketValidation.ticket, ticketController);
router.post("/login", loginValidation.user, authController);
router.post("/register", registerValidation.user, authController);

export default router;

// route.get -> get data from server
// route.post -> trasfer data to server
// route.put -> replace all data in the db
// route.patch -> replace data partially
// route.delete -> delete data

// establish a ticket RESTFUL API:
// get tickets from server - DB
// route.get('/tickets', ticketIndex)
// get ticket from server
// route.get('/tickets/:id', ticketShow)
// transfer ticket to server
// route.post('/tickets', ticketStore)
// replace ticket partially
// router.put('/tickets/:id', ticketUpdate)
// replace all tickets in the db
// route.patch('/tickets', ticket?)
// delete ticket
// route.delete('/tickets', ticketDestroy)

/* Notes: 
- The API routes are defined in this file.
- The routes are defined using the express.Router class.
- The controller is used for handling the request and response. Formatting data for backend usage.
- The validation is used for validating the request data. The first safety net for the backend.
- GET and POST methods: GET can send data to server but will be recorded by the browser and easy to be hacked
- POST is more secure and can send data to server without being recorded by the browser.
In this project, we use POST method for login and register to secure the data.
ticket is for practicing RESTful API.
user is used for testing the route.

*/
