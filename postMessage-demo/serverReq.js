var express = require('express');
var app = express();

var requestPort = 3004;  // ����ҳ������3004�˿�

app.use(express.static(__dirname + '/staticReq')); //3004�˿ڵľ�̬�ļ�����index.html

app.listen(requestPort, function () {
    console.log('Requester is listening on port '+ requestPort);
});
