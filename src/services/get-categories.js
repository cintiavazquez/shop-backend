//import data from "./categories.json";
import { dbConnect } from "../lib/database";
import Category from "../models/Categories";

export async function getCategories() {
  await dbConnect();
  const data = await Category.find();

  return data.map(({ id, name, description }) => ({
    id,
    name,
    description,
  }));
}
