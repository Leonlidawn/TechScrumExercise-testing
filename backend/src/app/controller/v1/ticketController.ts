import { Request, Response } from "express";
import {  indexTicket, showTicket, storeTicket, updateTicket, destroyTicket } from "../../services/v1/ticketService";
import { validationResult } from "express-validator"; 

export function ticketIndex (req: Request, res: Response) {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        const errorMessages = error.array().map(error => `${error.param}: ${error.msg}`);
        console.log(errorMessages);
        return res.status(422).json({ errors: error.array() });
    }
    indexTicket();
    res.send("[Ticket Controller]: ticketIndex is called.");
}

export function ticketShow (req: Request, res: Response) {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        const errorMessages = error.array().map(error => `${error.param}: ${error.msg}`);
        console.log(errorMessages);
        return res.status(422).json({ errors: error.array() });
    }
    res.send("[Ticket Controller]: ticketShow is called.");
    showTicket();
}

export function ticketStore (req: Request, res: Response) {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        const errorMessages = error.array().map(error => `${error.param}: ${error.msg}`);
        console.log(errorMessages);
        return res.status(422).json({ errors: error.array() });
    }
    res.send("[Ticket Controller]: ticketStore is called.");
    storeTicket(req.body);
}

export function ticketUpdate (req: Request, res: Response) {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        const errorMessages = error.array().map(error => `${error.param}: ${error.msg}`);
        console.log(errorMessages);
        return res.status(422).json({ errors: error.array() });
    }
    res.send("♡♡♡♡♡♡♡[controller]:ticketUpdate is called ♡♡♡♡♡♡♡");
    updateTicket();
}

export function ticketDestroy (req: Request, res: Response) {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        const errorMessages = error.array().map(error => `${error.param}: ${error.msg}`);
        console.log(errorMessages);
        return res.status(422).json({ errors: error.array() });
    }
    res.send("[Ticket Controller]: ticketDestroy is called.");
    destroyTicket();
}