var express = require('express')
var app = express()
var fs  = require('fs')
var path = require('path')

var buf = new Buffer.alloc(1024)


app.get('/', function (req, res) { 
    res.sendFile(__dirname + '/' + 'test.html')
 })

app.get('/getData', function (req, res) { 
    var file = path.join(__dirname, 'data.json')

    fs.readFile(file, 'utf-8', function (err, data) { 
        if (err){
            res.send('文件读取失败')
        } else {
            var json = JSON.stringify(data)
            res.send(json)
        }
     })
 })

 var server = app.listen(8080, function () { 
     var host = server.address().address
     var port = server.address().port

     console.log('Server is listening to http://%s:%s', host, port)
  })