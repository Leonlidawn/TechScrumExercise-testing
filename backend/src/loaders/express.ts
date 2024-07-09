import express from "express"; // import the Exprss framework to create an Express applicaiton
import cors from "cors"; // import the cors middleware to enable Cross-Origin Resource Sharing (CORS) in the Express application
import helmet from "helmet"; // import the helmet middleware to secure the Express application by setting various HTTP headers
import compression from "compression"; // import the compression middleware to compress the response bodies for all requests
import rateLimit from "express-rate-limit"; // import the express-rate-limit middleware to limit repeated requests to public APIs and endpoints
import router from "../app/routes/v1/api"; // import the router that contains the API routes for the Express application

// Configure the rate limiter middleware with specific options
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs  // 100 requests per 15 minutes
    standardHeaders: true, // return rate limit info in the "X-RateLimit-*" headers
    legacyHeaders: false // Disable the "x-RateLimiter*" headers
});

// export a function that sets up and configures the Express applicaiton
export default () => { 
    // create a new Express application instance
    const app = express();
    app.use(cors());
    app.use(helmet());
    app.use(compression());
    app.use(express.json()); // Use the built-in middleware for parsing JSON payloads in incoming requests.
    if(process.env.LIMITER?.toString() === true.toString()) { 
        // Use the rate limiter middleware if the environment variable LIMITER is set to 'true'.
        app.use(limiter);
    }
    app.use("/api/v1", router); // Mount the router at the "/api/v1" path in the Express application.
    return app;  // Return the configured Express application instance.
}
