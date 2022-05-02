import { dbConnect } from "../../../src/lib/database";
import Category from "../../../src/models/Categories";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const data = JSON.parse(request.body);
    await dbConnect();

    const newCategory = await Category.create({
      name: data.name,
      description: data.description,
    });

    response
      .status(200)
      .json({ message: "category created", Category: newCategory });
  } else {
    response.status(400).json({ error: "wrong method" });
  }
}
