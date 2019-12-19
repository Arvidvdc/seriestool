const   fs      = require("fs");

// Default
exports.default = (req,res)=>{
    let path="public/images"
    let server="http://" + process.env.APP_IP + ":" + process.env.APP_PORT + "/" + path
        fs.readdir(path,(err,imageList)=> {
        if(!err){
            req.flash("success", "Welkom!");
            res.render("./default/home",{path: "/images", imageList: imageList, page: "home", css: "css/main.css", buttons: "css/buttons.css"});
        } else {
            req.flash("error", "Error while loading images." + err.message);
            res.send("Error" + err)
        }
    });
}