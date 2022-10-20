/* require('dotenv').config()
const express = require('express')
const https = require('https');
var fs = require('fs');
var key = fs.readFileSync('./certs/key.key');
var cert = fs.readFileSync('./certs/cert.crt');
var options = {
  key: key,
  cert: cert
};
var port = process.env.PORT

app = express()
app.get('/', (req, res) => {
   res.send('Now using https..');
});

var server = https.createServer(options, app);

server.listen(port, () => {
  console.log("server starting on port : " + port)
});
 */
