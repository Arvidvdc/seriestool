
// Adding new serie
exports.new = (req,res) => {
    res.render("./series/new", {page: "addSerie"});
}

exports.new_post = (req,res) => {
    res.send("Serie toevoegen post.")
}