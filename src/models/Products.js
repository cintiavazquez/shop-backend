import mongoose from "mongoose";
import Category from "./Categories";

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  tags: Array,
  price: Number,
  /* String */
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});
console.log(Category);
const Product =
  mongoose.models.Product ?? mongoose.model("Product", productSchema);

export default Product;
