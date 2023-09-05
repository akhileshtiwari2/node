const dbConnect = require('./mongodb'); 

const update  = async ()=>{
    const data = await dbConnect();
    const result = await data.updateOne( {name: 'm 40'},{
    $set: { price: 251, brandL: 'Samsung' }
    });
    console.log(result);
};

update();