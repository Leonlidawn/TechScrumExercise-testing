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