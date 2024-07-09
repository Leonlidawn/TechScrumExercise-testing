import expressLoader from "./express"; // Import the expressLoader module which is responsible for setting up and configuring the Express application.
import serverLoader from "./server"; // Import the serverLoader module which is responsible for starting the server.
//import {initDB} from "./mongoose"; // Import the initDB function which is responsible for initializing the MongoDB database connection using Mongoose.

// Define the init function which initializes the application by loading the necessary modules and configurations.
const init = ()=>{
    // Create and configure the Express application by calling the expressLoader function. 
    const app = expressLoader();
    // Start the server using the configured Express application by calling the serverLoader function. Pass the "app" configured Express application.
    // This function starts the server and listens for incoming requests on the specified port, makes the application ready to handle requests.
    serverLoader(app);
    // Initialize the database connection by calling the initDB function. This sets up th enecessary connection to the MongoDB database using Mongoose.
    //initDB();
}
export default init;

