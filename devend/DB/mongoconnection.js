const mongoose=require('mongoose')
const connectionString=process.env.DATABASE;
mongoose.connect(connectionString).then((res)=>{
    console.log('Mongodb Connected Successfully!!');
}).catch((err)=>{
    console.log('Mongodb Connection Failed',err);
})