
exports.show = (req,res) => {
    res.send("Showpage");
}

// Adding new serie
let css="../css/main.css"
exports.new = (req,res) => {
    res.render("./series/new", {page: "addSerie", css: css});
}

exports.new_post = (req,res) => {
    res.send("Serie toevoegen post.")
}