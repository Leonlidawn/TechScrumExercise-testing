import { Router } from "express";
import { userController } from "../../controller/v1/userController";
import { ticketIndex, ticketShow, ticketStore, ticketUpdate, ticketDestroy } from "../../controller/v1/ticketController"; 
import { authController } from "../../controller/v1/authController";
import userValidation from "../../validations/v1/userValidation";
import ticketValidation from "../../validations/v1/ticketValidation";
import loginValidation  from "../../validations/v1/loginValidation";

const router = Router();

router.get("/user", userValidation.user, userController);
router.post("/user", userValidation.user, userController);

router.get("/tickets",  ticketValidation.ticket, ticketIndex);
router.get("/ticket/:id", ticketValidation.ticket, ticketShow);
router.post("/ticket", ticketValidation.ticket, ticketStore);
router.put("/ticket/:id", ticketValidation.ticket, ticketUpdate);
router.delete("/tickets", ticketValidation.ticket, ticketDestroy);

router.post("/login", loginValidation.user, authController);
router.post("/register", loginValidation.user, authController);

export default router;

//TODO: COMPLETE THE RESTFUL API ticket routes
//TODO: COMPLETE register, login, logout backend
//TODO: COMPLETE frontend for register, login, logout

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
