import {Controller, Get, Req, Res} from "@nestjs/common";
const fs = require('fs');

@Controller('Cookie')
export class CookieController {

    @Get()
    obtenerPagina(@Req() req, @Res() res){
        let contenidoHtml = '';
        console.log('Middleware cookie: ' + res.cookies);
        fs.readFile(__dirname + '/html/cookie.html', 'utf-8', (err, data) => {
            if(err)
                throw err;
            else
                contenidoHtml = data;
                console.log(contenidoHtml);
                return res.send(contenidoHtml);
        })
    }
}