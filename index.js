// Require dependencies
const   express         = require("express"),
        app             = express(),
        mongoose        = require("mongoose"),
        indexRoutes     = require("./routes/index"),
        seriesRoutes    = require("./routes/series");

// dotENV
require('dotenv').config();

// Express variables
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Database connection
mongoose.connect(process.env.DB_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false}).then(
        () => {
          console.log('Database is connected') },
        err => { console.log('Can not connect to the database'+ err)}
    );

app.use((req,res,next)=>{
    res.locals.currentUser=req.user;
    next();
});

// Routes
app.use(indexRoutes);
app.use("/series", seriesRoutes);

// Listener
app.listen(process.env.APP_PORT, process.env.APP_IP, ()=>console.log("SeriesTool started on " + process.env.APP_IP + " port " + process.env.APP_PORT));