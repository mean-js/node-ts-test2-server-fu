import * as express from 'express';

export class UserServiceRouter {

    static userServiceRouter() {

        let router = express.Router();
        
        router.get("/");

        return router;
    }
}