const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors")
const app = express();


app.use(cors());
app.use(fileUpload());

app.post("/upload", (req,res) =>  {
    console.log("server js");
    if (req.files === null) {
        return res.status(400).json({msg : "no files uploaded"});
    }
    const file = req.files.file;

    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
        if (err) {
            console.log(err);
            console.log("no possible mv")
            return res.status(500).send(err);
        }
    res.json({fileName : fileName,filePath:`/uploads/${file.name}`}); 
    });
});

app.listen(5000, () => console.log("server started"));
 



