const   fs      = require("fs");

// Default
exports.default = (req,res)=>{
    let path="public/images"
    let server="http://" + process.env.APP_IP + ":" + process.env.APP_PORT + "/" + path
        fs.readdir(path,(err,imageList)=> {
        if(!err){
            res.render("./default/home",{path: "/images", imageList: imageList});
        } else {
            console.log("Error");
            res.send("Error" + err)
        }
    });
}