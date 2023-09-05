const dbConnect = require('./mongodb'); 

const deleteData  = async ()=>{
    const data = await dbConnect();
    const result = await data.deleteMany( {name: 'notey'}
    );
    console.log(result);
};

deleteData();