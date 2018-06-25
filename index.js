let host = process.env.HOST || '0.0.0.0';
let port = process.env.PORT || 8080;
 
let cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
    console.log('Running server on ' + host + ':' + port);
});