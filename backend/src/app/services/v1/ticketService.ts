import Ticket from '../../model/ticket';
import { TicketData } from '../../types/Ticket';

export function indexTicket () {
    console.log("[Ticket Service]: new Ticket is saved to the database.")
}

export function showTicket () {}

export async function storeTicket (data: TicketData) {
    const newTicket = new Ticket(data);
    const savedTicket = await newTicket.save();
    const { title, category } = savedTicket;
    const ticketId = savedTicket._id;
    console.log("ticketId----> ", ticketId);
    console.log("[Ticket Service]: new Ticket is saved to the database.")
}

export async function updateTicket (id: string, data: TicketData) {
    try {
        // Find the ticket by ID
        const ticket = await Ticket.findById(id);
        console.log("id----> ", id);
        console.log("ticket----> ", ticket);

        // Check if ticket exists
        if (!ticket) {
          return {
            success: false,
            message: 'Ticket not found'
          };
        }
    
        // Update the ticket with the new data
        Object.assign(ticket, data);
        await ticket.save();
    
        return {
          success: true,
          message: 'Ticket updated successfully',
          ticket
        };
      } catch (error: any) {
        return {
          success: false,
          message: `An error occurred: ${error.message}`
        };
      }
}

export function destroyTicket () {}