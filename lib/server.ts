// lib/server.ts
import app from "./app";
import * as https from 'https';
import * as fs from 'fs';
const PORT = 3000;


const httpsOptions = {
    key: fs.readFileSync('./config/key.pem'),
    cert: fs.readFileSync('./config/cert.pem')
}

/**
 * Creating a HTTPS
 */
https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})



/**
 * 
 * Creating a HTTP server
 
app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})

*/