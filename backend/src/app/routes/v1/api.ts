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

export default router;