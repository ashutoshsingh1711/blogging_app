const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//This middleware parses the incoming request's body if it is in JSON format and makes it available as req.body in the subsequent middleware or route handlers.
// By using express.json(), you can easily handle JSON data in your Express application. It automatically parses the request body and converts it into a JavaScript object
app.use(express.json()); 

const connectWithDb = require('./config/database');
connectWithDb();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})