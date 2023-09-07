const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = new Product({
    name: "m8",
    price: "5000",
    brand: "max",
    category: "Mobile",
  });
  let result = await data.save();

  console.log(result);
};

const updateInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.updateOne(
    {name: "m 40"},
    {
      $set:{price:370,name:'max 0'},
    }
  );
  console.log(data);
};

const deleteInDB = async()=>{
    const product = mongoose.model("products",ProductSchema);
    let data = await product.deleteOne({name:'max 0'})
    console.log(data)
}

const findInDB = async ()=>{
    const product = mongoose.model("products",ProductSchema);
    let data = await product.find({name:'u10'});
    console.log(data)
}
findInDB();