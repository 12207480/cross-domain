var express = require('express');
var http= require('http');

var portNumber = 3008;
var app = express();

app.use(express.static(__dirname)); //��index.html

app.get('/proxy', function(request, response){
    var url = request.query.url    // http://localhost:3009/

    // ��url��������
    http.get(url, function(responseFromOtherDomain) {
        // data�¼��������ݽ��չ����У�ÿ�յ�һ�����ݾʹ���һ�Σ����յ������ݱ�����ص�������
        responseFromOtherDomain.on("data", function(data) {
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            response.end(data);
        });
    });
});

app.listen(portNumber, function () {
    console.log('Requester with proxy is listening on port '+ portNumber);
});
