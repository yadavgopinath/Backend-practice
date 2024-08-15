const http = require('http')

const server =http.createServer((req,res)=>{
    console.log(req.url,req.headers,req.method);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from node js server</h1></body>');
    res.write('</html>');
    
});

server.listen(4000);
