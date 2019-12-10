// Require dependencies
const   express         = require("express"),
        app             = express(),
        indexRoutes     = require("./routes/index");

// dotENV
require('dotenv').config();

// Express variables
app.set("view engine", "ejs");
app.use(express.static(__dirname + "./public"));

// Routes
app.use(indexRoutes);

// Listener
app.listen(process.env.APP_PORT, process.env.APP_IP, ()=>console.log("SeriesTool started on " + process.env.APP_IP + " port " + process.env.APP_PORT));