var express = require('express')
var app = express()
app.use(express.static('/home/barnettedavid/itc134-final-project-webapp/'));
var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Express app listening at http://%s:%s', host, port)
    console.log('Ctrl+C to end serving website')
})
