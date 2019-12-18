const   Serie    = require("../models/serie"),
        css      = "../css/main.css";

// Show route
exports.show = (req,res) => {
    Serie.find({title: req.params.id}, (err,foundSerie) => {
        if(err) {
            console.log(err)
        } else {
            res.render("./series/show", {path: "/images", foundSerie: foundSerie, css: css, page: "showPage"});
        };
    });
}

// Adding new serie
exports.new = (req,res) => {
    res.render("./series/new", {page: "addSerie", css: css});
}

exports.new_post = (req,res) => {
    res.send("Serie toevoegen post.")
}

// Edit route
exports.edit = (req,res) => {
    Serie.find({title: req.params.id}, (err,foundSerie) => {
        if(err) {
            console.log(err)
        } else {
            res.render("./series/edit", {path: "/images", foundSerie: foundSerie, css: "../../css/main.css", page: "editPage"});
        };
    });
}