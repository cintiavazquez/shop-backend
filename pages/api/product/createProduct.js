import { dbConnect } from "../../../src/lib/database";
import Category from "../../../src/models/Categories";
import Product from "../../../src/models/Products";

export default async function handler(request, response) {
  if (request.method === "POST") {
    //const newCategory = JSON.parse(request.body);
    const data = JSON.parse(request.body);
    await dbConnect();

    let category = await Category.findOne({ name: data.category });
    if (!category) {
      console.log("no matching category found!!!");
      category = await Category.create({ name: data.category });
    }

    const newProduct = await Product.create({
      name: data.name,
      description: data.description,
      price: data.price,
      category: /* data.category */ category.id,
      tags: data.tags,
    });

    response
      .status(200)
      .json({ message: "product created", Product: newProduct });
  } else {
    response.status(400).json({ error: "wrong method" });
  }
}
