var express = require('express');
var app = express();

var responsePort = 3007;  // ����ҳ������3007�˿�

app.get('/api', (req, res) => {
    res.send("Hello world from Proxy. ?")
});

app.listen(responsePort, function () {
    console.log('Responser is listening on port '+ responsePort);
});
