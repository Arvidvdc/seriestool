const   Serie    = require("../models/serie"),
        css      = "../css/main.css";

exports.show = (req,res) => {
    let path="public/images"
    Serie.find({title: req.params.id}, (err,foundSerie) => {
        if(err) {
            console.log(err)
        } else {
            res.render("./series/show", {path: "/images", foundSerie: foundSerie, css: css});
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