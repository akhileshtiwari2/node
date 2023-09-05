const dbConnect = require('./mongodb'); 

const insert  = async ()=>{
    const db = await dbConnect();
    const result = await db.insertMany ([
        {name:'note', brandL:'vivo', price:200,category:'mobile'},
        {name:'notex', brandL:'vivo1', price:2001,category:'mobile'},
        {name:'notey', brandL:'vivo2', price:2002,category:'mobile'},
     ] )
    if(result.acknowledged){
        console.log("data inserted")
    }
}
insert();