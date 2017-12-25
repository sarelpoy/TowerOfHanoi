var express = require('express')
var path = require('path')
var app = express()
 
app.use(express.static('website'));
//app.use('/', express.static(path.join(__dirname+"/website", 'public')));


app.get('/', function (req, res) {
    res.sendFile(__dirname+'/website/index.html');
})
 
app.listen(3000)