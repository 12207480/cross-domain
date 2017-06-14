var express = require('express');
var proxy = require('http-proxy-middleware');

var requestPort = 3000;  // ����ҳ������3006�˿�
var app = express();

app.use(express.static(__dirname));

app.use('/api', proxy({target: 'http://localhost:3001/', changeOrigin: true}));
// changeOrigin����Ϊtrue�����ػ�����һ������˽���������󲢴��㷢�͸�����
// http://localhost:3000/api   -->   http://localhost:3001/api

app.listen(requestPort, function () {
    console.log('Requester is listening on port '+ requestPort);
});

