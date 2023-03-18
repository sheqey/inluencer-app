const mongoose = require('mongoose');

const connectdb = async()=>{
try{

const con = await mongoose.connect(process.env.MONGO_URI,{

useNewUrlParser: true, 

useUnifiedTopology: true 


})
console.log(`mongo db connected at : ${(con.connection.host)}`);


} catch(err){

    console.log(err);
    process.exit(1)
}


}
mongoose.set('strictQuery', true);
module.exports = connectdb