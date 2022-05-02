import { dbConnect } from "../../../src/lib/database";
import Product from "../../../src/models/Products";

export default async function handler(request, response) {
  if (request.method === "POST") {
    //const newCategory = JSON.parse(request.body);
    const data = JSON.parse(request.body);
    await dbConnect();

    const newProduct = await Product.create({
      name: data.name,
      description: data.description,
      price: data.price,
      category: data.category,
      tags: data.tags,
    });

    response
      .status(200)
      .json({ message: "product created", Product: newProduct });
  } else {
    response.status(400).json({ error: "wrong method" });
  }
}
