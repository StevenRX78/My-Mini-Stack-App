import express from "express"; // Import express from node_modules
import cors from "cors"; // Import cors from node_modules

const app = express(); // Created an instance of express in the const "app"

app.use(express.json()); // Allows us to look at the json in the body of the request

app.use(cors()); // Middleware

// Endpoint
app.get("/message", function(request, response) {
    response.json({message: "I am the message"});
});

// Start the Server
app.listen(8080, function() {
    console.log("Server is listening to port 8080");
});

// Run "node server" in the Terminal to start the server.