var express = require('express');
var app = express();

var responsePort = 3001;  // ����ҳ������3001�˿�

app.get('/api', (req, res) => {
    res.send("Hello world from Proxy. ?")
});

app.listen(responsePort, function () {
    console.log('Responser is listening on port '+ responsePort);
});
