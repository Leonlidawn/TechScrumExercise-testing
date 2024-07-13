import { Request, Response } from "express";
<<<<<<< HEAD
import {  indexTicket, showTicket, storeTicket, updateTicket, destroyTicket } from "../../services/v1/ticketService";
=======
import { ticketService, ticketCreation, getAllTickets } from "../../services/v1/ticketService";
>>>>>>> c087ff499e6c90edc0a297b01dd76a0299f8d877
import { validationResult } from "express-validator"; 
import { TicketData } from '../../types/Ticket';
import mongoose from 'mongoose';
import Ticket from "../../model/ticket";

<<<<<<< HEAD
// TODO: I think this part can be simplified.
export async function ticketIndex (req: Request, res: Response) {
=======
// ticket index is get one ticket
// 1. validation error check
// 2. if error, log and return the error
// 3. if mo error, continue running coresponded service 
export function ticketIndex (req: Request, res: Response) {
    //console.log(req.body);
>>>>>>> c087ff499e6c90edc0a297b01dd76a0299f8d877
    const error = validationResult(req);
    if(!error.isEmpty()) {
        const errorMessages = error.array().map(error => `${error.param}: ${error.msg}`);
        console.log(errorMessages);
        return res.status(422).json({ errors: error.array() });
    }
<<<<<<< HEAD
    const tickets = await indexTicket();
    res.send("[Ticket Controller]: ticketIndex is called.");
}

export async function ticketShow (req: Request, res: Response) {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        const errorMessages = error.array().map(error => `${error.param}: ${error.msg}`);
        console.log(errorMessages);
        return res.status(422).json({ errors: error.array() });
    }
    res.send("[Ticket Controller]: ticketShow is called.");
    const { id } = req.params;
    try {
        const result = await showTicket(id, req.body);
        if (result && result.success) {
          return res.status(200).json({ message: result.message, ticket: result.ticketToShow });
        } else {
          return res.status(404).json({ message: result ? result.message : 'Ticket not found'});
        }
    } catch (error:any) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
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

/**
 * Updates a ticket by its ID.
 * 
 * @param id - The ID of the ticket to update.
 * @param updateData - The data to update the ticket with.
 * @returns The updated ticket or null if not found.
 */

export async function ticketUpdate (req: Request, res: Response) {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        const errorMessages = error.array().map(error => `${error.param}: ${error.msg}`);
        console.log(errorMessages);
        return res.status(422).json({ errors: error.array() });
    }
    const { id } = req.params;
    try {
        const result = await updateTicket(id, req.body);
        if (result.success) {
          return res.status(200).json({ message: result.message, ticket: result.ticket });
        } else {
          return res.status(404).json({ message: result.message });
        }
    } catch (error:any) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

export function ticketDestroy (req: Request, res: Response) {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        const errorMessages = error.array().map(error => `${error.param}: ${error.msg}`);
        console.log(errorMessages);
        return res.status(422).json({ errors: error.array() });
    }
    const result = destroyTicket();
    res.send(result);
=======
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
>>>>>>> c087ff499e6c90edc0a297b01dd76a0299f8d877

}