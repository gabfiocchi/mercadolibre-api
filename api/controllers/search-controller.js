import https from 'https';
import { mappingResponse } from './../models';

class SearchControllerClass {
    getList(req, res) {
        https.get('https://api.mercadolibre.com/sites/MLA/search?q=' + req.query.q + '&limit=5', (response) => {
            let msg = '';

            response.on('data', (d) => {
                msg += d;
            });
            response.on('end', function () {

                if (JSON.parse(msg).results.length === 0) {
                    res.status(404);
                    res.send({
                        author: {
                            name: "Gabriel",
                            lastname: "Fiocchi"
                        },
                        error: 'La búsqueda no coincide con ningún producto.'
                    });
                } else {
                    res.send(mappingResponse.list(msg));
                }
            });
        }).on('error', (e) => {
            console.error(e);
        });
    }
}

export const searchController = new SearchControllerClass();
