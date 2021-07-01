import * as http from 'http'
import { requestListener } from './routes.js'

const host = 'localhost';
const port = 8000;


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
