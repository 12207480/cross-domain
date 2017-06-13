var express = require('express');
var app = express();

var responsePort = 3001;  // ��Ӧ�����ҳ������3001�˿�

app.get('/', (req, res) => {
    // ������������origin������3000�˿ڷ���3001�˿�
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.send({message: "This is data returned from the CORS server"})
});

app.listen(responsePort, function () {
    console.log('responser is listening on port '+ responsePort);
});
