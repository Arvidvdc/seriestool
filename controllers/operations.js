const   Serie    = require("../models/serie"),
        fs       = require("fs");

// Seeds route
exports.seed = (req,res) => {
    res.render("./operations/seed", {css: "../../css/main.css", buttons: "../../css/buttons.css", menu: "operations", page: "seedsPage"});
}