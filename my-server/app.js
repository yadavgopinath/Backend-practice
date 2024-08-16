const http = require('http')
const fs= require('fs');

const server =http.createServer((req,res)=>{
  
    res.setHeader('Content-Type','text/html');
    const url=req.url;
    const method=req.method;
    if(url ==='/')
    {
        fs.readFile('message.txt',(err,data)=>{
            if(err)
            {
                console.log(err);
            }
            res.write('<html>');
            res.write('<head><title>Enter message</title></head>');
    
            res.write(`<body> ${data}<br> <form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`);
            res.write('</html>');
            res.end();
        });
       
    }
    if(url ==='/message' && req.method === 'POST')
    {
        const body=[];
       req.on('data',(chunk)=>{
        body.push(chunk);
       });
       req.on('end',()=>{
        const parsedBody =Buffer.concat(body).toString();
        console.log(parsedBody);
        const message=parsedBody.split('=')[1];
        fs.writeFile('message.txt', message,err=>{

            res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();

        });
        
       });
      
    
    }
});

server.listen(4000);

