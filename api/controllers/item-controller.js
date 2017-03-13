import https from 'https';
import { mappingResponse } from './../models';

class ItemControllerClass {
    getItem(req, res) {
        https.get('https://api.mercadolibre.com/items/' + req.params.id, (response) => {
            let msg = '';

            response.on('data', (d) => {
                msg += d;
            });

            response.on('end', function () {
                if (JSON.parse(msg).status === 404) {
                    res.status(404);
                    res.send({
                        author: {
                            name: "Gabriel",
                            lastname: "Fiocchi"
                        },
                        error: 'No se encontró el producto.'
                    });
                } else {
                    https.get('https://api.mercadolibre.com/items/' + req.params.id + '/description', (response) => {
                        let msgDescription = '';

                        response.on('data', (d) => {
                            msgDescription += d;
                        });
                        response.on('end', function () {
                            res.send(mappingResponse.item(msg, JSON.parse(msgDescription).text));
                        });
                    }).on('error', (e) => {
                        console.error(e);
                    });
                }
            });
        }).on('error', (e) => {
            console.error(e);
        });
    }
}

export const itemController = new ItemControllerClass();