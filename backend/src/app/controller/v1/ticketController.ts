import { Request, Response } from "express";
import { ticketService, ticketCreation, getAllTickets } from "../../services/v1/ticketService";
import { validationResult } from "express-validator"; 

// ticket index is get one ticket
// 1. validation error check
// 2. if error, log and return the error
// 3. if mo error, continue running coresponded service 
export function ticketIndex (req: Request, res: Response) {
    //console.log(req.body);
    const error = validationResult(req);
    if(!error.isEmpty()) {
        const errorMessages = error.array().map(error => `${error.param}: ${error.msg}`);
        console.log(errorMessages);
        return res.status(422).json({ errors: error.array() });
    }
    ticketService();
    res.send("♡♡♡♡♡♡♡[controller]:ticketIndex ♡♡♡♡♡♡♡");
} 
// QUESTION: does it need to be changed to async await function
// QUESTION: if the validation is the same, can they share the validation?

//ticket store is create a ticket
export function ticketStore(req: Request, res: Response) {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        console.log(errors.array());
        return res.status(422).json({ error: errors.array()});
    }
    ticketCreation(req.body);
    res.send("♡♡♡♡♡♡♡[controller]:ticketStore ♡♡♡♡♡♡♡")
}

//ticket retrive all 
export async function ticketGetAll(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array());
        return res.status(422).json({error: errors.array()})
    }
    try {
        const tickets =  await getAllTickets();
        res.send(tickets);
    } catch(e) {
        res.status(500).send({e});
    }

}