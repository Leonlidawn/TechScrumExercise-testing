import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        category:{
            type: String,
            required: true,
            trim: true
        },
    },
    {
        timestamps: true
    }
);
// performs a critical function in defining and exporting a Mongoose model in a Node.js application. 
const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;

/*
    Parameters:

"Ticket": This is the name of the model. By convention, model names are usually capitalized and singular. 
Mongoose will look for a collection named tickets (plural form of Ticket) in the MongoDB database.
ticketSchema: This is the schema that defines the structure of the documents within the tickets collection. 
The schema includes the fields, their data types, and any constraints or validation rules.
Summary:
mongoose.model: This function creates a Mongoose model based on the provided name and schema.
Model Name: Ticket - This will be mapped to the tickets collection in MongoDB.
Schema: ticketSchema - Defines the structure and constraints of the documents within the tickets collection.

*/