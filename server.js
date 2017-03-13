import {app} from './';

export const PORT = 3000;

export const server =
    app.listen(PORT, () => console.log(`>>>>> Server port => ${PORT} <<<<<`));
