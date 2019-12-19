const   Serie    = require("../models/serie"),
        fs       = require("fs"),
        css      = "../css/main.css",
        buttons  = "../css/buttons.css";

// Show route
exports.show = (req,res) => {
    Serie.findOne({title: req.params.id}, (err,foundSerie) => {
        if(foundSerie===null) {
            req.flash("error", "Bijhorend record in database niet gevonden.");
            res.redirect("/");
        } else {
            res.render("./series/show", {path: "/images", foundSerie: foundSerie, css: css, buttons: buttons, page: "showPage"});
        }
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
    Serie.findOne({title: req.params.id}, (err,foundSerie) => {
        if(foundSerie===null) {
            req.flash("error", "Bijhorend record in database niet gevonden.");
            res.redirect("back");
        } else {
            res.render("./series/edit", {path: "/images", foundSerie: foundSerie, css: "../../css/main.css", buttons: "../../css/buttons.css", page: "editPage"});
        }
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
            req.flash("error", "Record niet opgeslagen." + err.message);
            res.redirect("/series/" + req.params.id + "/edit");
        } else {
            req.flash("success", "Record is opgeslagen.");
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
        req.flash("success", req.params.id + ".jpg" + " is verwijderd." );
    });

    // Remove serie from database
    Serie.findOneAndDelete({title: req.params.id}, (err) =>{
        if(err) {
            req.flash("error", "Record niet verwijderd." + err.message);
        } else {
            req.flash("success", req.params.id + " is verwijderd." );
            res.redirect("/");
        }
    });
}