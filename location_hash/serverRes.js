var express = require('express');
var app = express();

var responsePort = 4002;  // ��Ӧ�����ҳ������3001�˿�

app.use(express.static(__dirname + '/staticRes'));


app.listen(responsePort, function () {
    console.log('Responser is listening on port '+ responsePort);
});
