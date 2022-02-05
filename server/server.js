const path=require("path");
const express=require("express");
function print(...vars){
    console.log(...vars);
}
const PORT=process.env.port||3500;
const app=express();
const server=app.listen(PORT,()=>
{
    print(`Server is running on port ${PORT}`)
});
const publicPath=path.join(__dirname,'..','public');
const socketIO=require("socket.io");
const io=socketIO(server);
app.use(express.static(publicPath));

app.get('/',(req,res)=>{
    res.sendFile('index.html');
})






