const   Serie    = require("../models/serie"),
        fs       = require("fs"),
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
            console.log(err);
        } else {
            res.render("./series/edit", {path: "/images", foundSerie: foundSerie, css: "../../css/main.css", page: "editPage"});
        };
    });
}

// Update route
exports.put = (req,res) => {
    // First change booleans to correct value
    if(req.body.update.seenAllEpisodes=="on") {
        req.body.update.seenAllEpisodes = true;
    } else {
        req.body.update.seenAllEpisodes = false;
    }
    if(req.body.update.registerdInKodi=="on") {
        req.body.update.registerdInKodi = true;
    } else {
        req.body.update.registerdInKodi = false;
    }
    // Update record
    Serie.findOneAndUpdate({title: req.params.id}, req.body.update, (err, foundSerie)=>{
        if(err) {
            console.log(err.message);
            res.redirect("/series/" + req.params.id + "/edit");
        } else {
            res.redirect("/series/" + req.params.id);
        }
    });
}

// Destroy route
exports.delete = (req,res) => {
    // Remove image from file
    let file="public/images/" + req.params.id +".jpg";
    fs.unlink(file, (err) => {
        if (err) throw err;
        console.log(file + " was deleted");
    });

    // Remove serie from database
    Serie.findOneAndDelete({title: req.params.id}, (err) =>{
        res.redirect("/");
    });
}