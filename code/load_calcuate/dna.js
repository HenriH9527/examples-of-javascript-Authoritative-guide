//为贷款计算器提供放贷人的链接列表

var http = require('http');
var url = require('url');


http.createServer(function(req, res) {
    res.writeHead(200,{"Content-Type":'text/plain','charset':'utf-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});

    //解析url参数
    var params = url.parse(req.url, true).query;

    var response = {
        Error: '',
        urls:[
            { url: 'www.baidu.com', name: 'BaiDu' },
            { url: 'www.souhu.com', name: 'SouHu' },
        ]
    }
    
    var responseJson = JSON.stringify(response);
    res.write(responseJson);
    res.end();
}).listen(8070);

console.log('Server running at http://192.168.3.107:8070/');