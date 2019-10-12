// --- Friend Finder Server --- //

/// --- Setup Modules
// Express
const express = require('express');
const app = express();
let portList = { friendFinder: 8080 }

//  Server: Config data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./app/public'))

// Server: Setup routing requests
require("./app/routes/apiroutes.js")(app);
require("./app/routes/htmlroutes.js")(app);

app.listen(portList.friendFinder, function() {
    console.log(`Server is successfully running and listening on port: ${portList.friendFinder}`);
});