import * as express from 'express';
import {appRouter} from './app.router';
import {AppRouter} from './app.router1';
import * as cors from 'cors';

class Main {
    static main(){
        console.log("Hello World!!!");

        let app = express();
        app.use(cors());
        app.use(AppRouter.getApplicationRouter());

        app.listen(3006, function(){
            console.log("SERVER STARTED");
        });
    }
}

Main.main();