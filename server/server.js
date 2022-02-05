const path=require("path");
const express=require("express");
function print(...vars){
    console.log(...vars);
}
const PORT=process.env.port||3500;
const publicPath=path.join(__dirname,'..','public');
const app=express();
app.use(express.static(publicPath));

app.get('/',(req,res)=>{
    res.sendFile('index.html');
})







app.listen(PORT,()=>
{
    print(`Server is running on port ${PORT}`)
});