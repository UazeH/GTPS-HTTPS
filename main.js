const https = require('https');

var key = `put your key`;
var cert = `put your certificate`;

const options = {
  key: key,
  cert: cert
};

const growtopia = https.createServer(options, function(req, res) {
  let ipAddress = req.connection.remoteAddress;
  ipAddress = ipAddress.split(/::ffff:/g).filter(a => a).join('');
  if (req.url == "/growtopia/server_data.php") {
      res.write(`server|127.0.0.1\nport|17091\ntype|1\n#maint|gtps\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|ni.com\nRTENDMARKERBS1001`);
      console.log(`[GROWTOPIA] : Client ${ipAddress} send request to path ${req.url} with method ${req.method}`);
      res.end();
}});

growtopia.listen(443)
