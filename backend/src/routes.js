import { fibonacci } from './nan/fibonacci.js'

export const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/get_fibonacci_number":
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.writeHead(200);
            res.end(JSON.stringify({ number: fibonacci.get_next_number() }));
            break
    }
}
