import dotenv from 'dotenv';

// Load environment variables from a .env file into process.env
dotenv.config();
// Create a configuration object using environment variables with default values
const config = { 
    port: process.env.PORT ?? 8000, // Use PORT from .env or default to 8000
    secret: process.env.SECRET ?? "" // Use SECRET from .env or default to an empty string
};

export default config;
