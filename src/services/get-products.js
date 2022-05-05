//import data from "./products.json";
import { dbConnect } from "../lib/database";
import Product from "../models/Products";
import Category from "../components/Category";

export async function getProducts() {
  await dbConnect();
  const data = await Product.find().populate("category");
  console.log(data[0]);
  return data.map(({ id, name, description, tags, price, category }) => ({
    id,
    name,
    description,
    tags,
    price,
    category: category.name,
  }));
}
