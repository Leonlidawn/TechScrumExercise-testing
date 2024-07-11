import Ticket from '../../model/ticket';
import { TicketData } from '../../types/Ticket';

export function indexTicket () {
    console.log("[Ticket Service]: new Ticket is saved to the database.")
}

export function showTicket () {}

export function storeTicket (data: TicketData) {
    const ticket = new Ticket(data);
    ticket.save();
    console.log("[Ticket Service]: new Ticket is saved to the database.")
}

export function updateTicket () {}

export function destroyTicket () {}