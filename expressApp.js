const express = require("express");
const d = require("dotenv");
const e = process.argv[2] || "dev";
d.config({ path : `.env.${e}`
});
const app = express();
const PORT = process.env.PORT;
const APP = process.env.APP;


function log(message)
{
	const time = new Date().toISOString();
	console.log(`[${time}} [${e.toUpperCase()}] ${message}`)};

app.get('/',(req,res)=>{
	res.send("hello from express"+APP);
});
app.listen(PORT,()=>
	{
log("server is running on"+PORT);
	});
app.get('/method1',(req,res) => 
	{
		
		res.send("hello from express method 1");
	});

app.get('/health',(req,res) => 
	{
		log("Health check called");
		res.status(200).json({status:"UP"});
	});

