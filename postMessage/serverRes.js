var express = require('express');
var app = express();

var responsePort = 3001;  // ����ҳ������3001�˿�

app.use(express.static(__dirname + '/staticRes')); //3001�˿ڵľ�̬�ļ�����index.html

app.listen(responsePort, function () {
    console.log('Responser is listening on port '+ responsePort);
});
