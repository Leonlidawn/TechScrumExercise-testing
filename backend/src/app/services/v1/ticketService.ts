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