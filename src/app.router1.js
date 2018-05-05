import * as express from 'express';
import * as fu from './fileupload.router';

export class AppRouter {

    static getApplicationRouter(){
        let router = express.Router();

        router.get("/", function(req, res, next){
            res.json({"KEY" : "VALUE"});
        });

        router.use("/upload", fu.fuRouter);

        return router;
    }
}