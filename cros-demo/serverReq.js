var express = require('express'); // ����expressģ��
var app = express();  // ����һ���򵥵ķ�����

var requestPort = 3000;  // ����ҳ������3000�˿�

app.use(express.static(__dirname)); //3000�˿ڵľ�̬�ļ�����index.html

//__dirnameΪ

app.listen(requestPort, function () {
    console.log('Requester is listening on port '+ requestPort);  // ��dos���ڻ�ִ������ص�����
});
