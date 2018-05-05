import * as express from 'express';

let multer  = require('multer')
let upload = multer({ dest: 'uploads/' })
let router = express.Router();


router.get("/1", function(req, res){
    res.json({"a":"b"});
});


router.post("/imgpost", upload.single('imgpost'), function(req, res, next){
    try{
        res.json({"opr": "File Uploaded Successfully"});
    }catch(err){
        console.log(err);
        res.json({"err": err});
    }
});

export const fuRouter = router;