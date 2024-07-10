import { Router } from "express";
import { userController } from "../../controller/v1/userController";
import {  ticketIndex, ticketStore, ticketGetAll} from "../../controller/v1/ticketController"; 
import { register,login } from "../../controller/v1/authController";
import userValidation from "../../validations/v1/userValidation";
import ticketValidation from "../../validations/v1/ticketValidation";
import loginValidation  from "../../validations/v1/loginValidation";
import registerValidation from "../../validations/v1/registerValidation";

const router = Router();

router.get("/user", userValidation.user, userController);
router.post("/user", userValidation.user, userController);
router.get("/ticket",  ticketValidation.ticket, ticketIndex);
router.get("/tickets",  ticketValidation.ticket, ticketGetAll);
router.post("/ticket", ticketValidation.ticket, ticketStore);
router.post("/login", loginValidation.user, login);
router.post("/register", registerValidation.user, register);
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

export default router;
