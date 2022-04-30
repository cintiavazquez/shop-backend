import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  tags: Array,
  price: Number,
  category: String,
});
const Product =
  mongoose.models.Product ?? mongoose.model("Product", productSchema);

export default Product;
