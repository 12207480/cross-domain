var express = require('express');
var app = express();

var responsePort = 3005;  // ����ҳ������3004�˿�

app.use(express.static(__dirname + '/staticRes')); //3005�˿ڵľ�̬�ļ�����index.html

app.listen(responsePort, function () {
    console.log('Responser is listening on port '+ responsePort);
});
