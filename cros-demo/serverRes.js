var express = require('express');
var app = express();

var responsePort = 3001;  // ��Ӧ�����ҳ������3001�˿�

// ���Ըı䡮/��Ϊ������·��������֮��serverReq.js���������·��Ҳ��Ҫ�ı�
app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000'); // ������������origin������3000�˿ڷ���3001�˿�
    res.send({message: "This is data returned from the CORS server"})
});

app.listen(responsePort, function () {
    console.log('responser is listening on port '+ responsePort);
});
