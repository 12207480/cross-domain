var express = require('express'); // ����expressģ��
var app = express();  // ����һ���򵥵ķ�����

var requestPort = 3002;  // ����ҳ������3002�˿�

app.use(express.static(__dirname));
app.listen(requestPort, function () {
    console.log('Requester is listening on port '+ requestPort);
});
