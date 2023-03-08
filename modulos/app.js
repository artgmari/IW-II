const http = require('http')

http.createServer(function(req,res){
    res.end("Meu primeiro servidor NodeJS")
}).listen(8081)

console.log("Servidor node funcionando!")