/// --- Routes: HTML Pages --- ///

// Modules
const path = require('path');



module.exports = function (app) {

    // Render Home Page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // Render Survey Questions
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}