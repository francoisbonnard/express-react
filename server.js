const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors")
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors({ credentials: true }));
app.use(fileUpload());

app.post("/upload", (req,res) =>  {
    console.log("server js");
    if (req.files === null) {
        return res.status(400).json({msg : "no files uploaded"});
    }
    const file = req.files.file;

    file.mv(`${__dirname}/client/public/images/${file.name}`, err => {
        if (err) {
            console.log(err);
            console.log("no possible mv")
            return res.status(500).send(err);
        }
    res.json({fileName : file.name,filePath:`/images/${file.name}`}); 
    });
});

app.listen(5000, () => console.log("server started"));
 



