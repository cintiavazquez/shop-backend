//import data from "./products.json";
import { dbConnect } from "../lib/database";
import Product from "../models/Products";

export async function getProducts() {
  await dbConnect();
  const data = await Product.find();
  console.log(data + "logging data");
  return data.map(({ id, name, description, tags, price, category }) => ({
    id,
    name,
    description,
    tags,
    price,
    category,
  }));
}

// export default function getProducts() {
//   return data;
// }

// export const getProducts = async () => {
//   await dbConnect();
//   const data = await Product.find("id");
//   return data.map(({ name, description, tags, price, category }) => ({
//     name,
//     description,
//     tags,
//     price,
//     category,
//   }));
// };
