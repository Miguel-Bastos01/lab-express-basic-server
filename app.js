// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`

const express = require("express")
const logger = require("morgan")



// CREATE EXPRESS APP
// Here you should create your Express app:

const app = express()



// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

app.use(express.static('public'))
app.use(express.json())
app.use(logger('dev'))



// ROUTES
// Start defining your routes here:
app.get("/", (request, response) => {
    console.log(request);
    response.send("<h1> Welcome User, this is the home page </h1>")
})
app.get("/blog",(request, response) => {
    console.log(request);
    response.send("<h1> Welcome User, this is the blog page </h1>")
})


// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => console.log("I am running"))
