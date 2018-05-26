import {MiddlewareFunction, NestMiddleware} from "@nestjs/common";
const fs = require('fs');


export class CookieMiddleware implements NestMiddleware {
    resolve(...args: any[]): MiddlewareFunction | Promise<MiddlewareFunction> {
        return (request, response, next) => {

            console.log(request.cookies);
            if(request.cookies['login']){
                    fs.writeFile(__dirname + '/html/cookie.html', '<h1>EN CACHE</h1>' ,'utf-8', (err) => {
                        if (err) throw err
                    });
            } else{
                fs.writeFile(__dirname + '/html/cookie.html', '<h1>NO EN CACHE</h1>' ,'utf-8', (err) => {
                    if (err) throw err
                });
            }

            return next();
        };
    }

}