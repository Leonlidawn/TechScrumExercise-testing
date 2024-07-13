<<<<<<< HEAD
import Ticket from '../../model/ticket';
import { TicketData } from '../../types/Ticket';

export async function indexTicket () {
    // QUESTION: This is not working why???????????
    // try {
    //     const tickets = await Ticket.find();
    //     console.log("tickets----> ", tickets);
    //     return tickets;
    // } catch (error: any) {
    //     console.log("error----> ", error.message);
    // }
    try {
      const cursor = Ticket.find().cursor();
  
      for (let ticket = await cursor.next(); ticket != null; ticket = await cursor.next()) {
        console.log("ticket----> ", ticket);
      }
    } catch (error: any) {
      console.log("error----> ", error.message);
    }
}

export async function showTicket (id: string, data: TicketData) {
  try {
    const ticketToShow = await Ticket.findById(id);
    if(!ticketToShow) {
      return {
        success: false,
        message: 'Ticket not found'
      };
    }
    return {
        success: true,
        message: 'Ticket found',
        ticketToShow
    }
    console.log("ticketToShow----> ", ticketToShow);
  } catch (error: any) {
    console.log("error----> ", error.message);
  }
}

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

export async function destroyTicket () {
    try {
      const ticket = await Ticket.deleteMany({});
      return ticket;
    } catch (error: any) {
      console.log("error----> ", error.message);
    }
}
=======
import Ticket from "../../model/ticket"
interface TicketData {
    title: string;
    category: string;
  }

export function ticketService () {
    console.log("♡♡♡♡♡♡♡[service]:ticketService ♡♡♡♡♡♡♡")
}

export function ticketCreation(data: TicketData) {
    console.log("[ticketService]: Create a ticket");
    const ticket =  new Ticket(data);
    ticket.save();
}

// practice using .then() method .catch() method
export function getAllTickets() {
   return Ticket.find()
   .then(tickets =>{
        return tickets;
   })
   .catch(e => {
        console.log("Error------------->", e);
        throw e;
   });
}

// Returning the Promise: The Ticket.find() method returns a promise. 
// Directly return this promise from the getAllTickets function.
// Handling Success with .then(): The .then() method is used to handle the successful resolution of the promise. 
// It receives the tickets as an argument and returns them.
// Handle error using .catch()
// It logs the error and then throws it to be handled by the calling function.

/* 
    Define TicketData Interface:
- The TicketData interface describes the expected structure of the ticket data. 
This helps to catch errors at compile time if the data does not conform to the expected structure.
- The createTicket function now accepts a parameter of type TicketData instead of any. 
This ensures that only valid ticket data can be passed to the function.
*/
>>>>>>> c087ff499e6c90edc0a297b01dd76a0299f8d877
