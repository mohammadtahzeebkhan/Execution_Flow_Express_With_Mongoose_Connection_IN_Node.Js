import mongoose from 'mongoose';
import express,{Router} from 'express';

console.log('after import ');
const PORT=8000;
URL="mongodb+srv://user:pass123@cluster0.dyvx5.mongodb.net/Cluster0?retryWrites=true&w=majority"

const app=express();
console.log('after const app=express(); variable runing...');
const route =express.Router();
console.log('after const route =express.Router(); variable runing...');


route.get('/user',(request,response)=>{
    console.log("After route.get(user,(request,response)=> runing...");

    response.status(200).json("hi from paradisehope");

})
route.get('/home',(request,response)=>{
    console.log(' After route.get(home,(request,response)=> runing...');


    response.status(200).json("hi from home");

})
console.log('Before app.use('/',route); runing...');

app.use('/',route);

console.log('After app.use('/',route); runing...');

mongoose.connect(URL,{useNewUrlParser:true,useUnifieldTopology:true,useFindAndModify:false}).then(()=>{
    console.log('After mongoose.connect( runing...');

app.listen(8000,()=>{
    console.log('server is running...');
});

}).catch(error =>{
    console.log('Error',error.message);
})

console.log('THIS last line runing...');
