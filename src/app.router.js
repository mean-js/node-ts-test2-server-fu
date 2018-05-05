import * as express from 'express';

let router = express.Router();

router.get("/", function(req, res, next){
    res.json({"1": "Hello World!!"});
});


export const appRouter = router;