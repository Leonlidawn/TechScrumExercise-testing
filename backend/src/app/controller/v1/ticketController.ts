import { Request, Response } from "express";
import { ticketService } from "../../services/v1/ticketService";
import { validationResult } from "express-validator"; 

export function ticketController (req: Request, res: Response) {
    //console.log(req.body);
    const error = validationResult(req);
    if(!error.isEmpty()) {
        const errorMessages = error.array().map(error => `${error.param}: ${error.msg}`);
        console.log(errorMessages);
        return res.status(422).json({ errors: error.array() });
    }
    ticketService();
    res.send("♡♡♡♡♡♡♡[controller]:ticketController is called ♡♡♡♡♡♡♡");
}