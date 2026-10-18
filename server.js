const http = require('http');
const server = http.createServer((req,res)=>{
	res.write("hello from sample node");
	res.end();
});
server.listen(9000,()=>{
	console.log("server is running on port 3000");
});

