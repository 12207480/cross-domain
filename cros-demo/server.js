var express = require('express')
var app = express()

app.get('/cros', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:8081') // ������������origin
    res.json({
        success: true,
        msg: '������ʳɹ�'
    })
})

app.listen(3001);
