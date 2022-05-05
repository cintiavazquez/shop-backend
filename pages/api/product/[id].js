import Product from "../../../src/models/Products";

//ONGOING, ONLY DONE FOR DELETE, not done, changedProduct must be updated with the right data!!!!!!!!!!!!!

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "DELETE") {
    const deletedProduct = await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Product deleted", Product: deletedProduct });
  } else if (req.method === "PUT") {
    const data = JSON.parse(req.body);
    const product = await Product.findById(id);
    const changedProduct = await Product.findByIdAndUpdate(
      id,
      { name: data.name },
      { description: data.description },
      { new: true }
    );

    res.status(200).json({
      message: "Product updated",
      category: changedProduct /*changedCategory*/,
    });
  } else {
    const singleProduct = await Product.findById(id);
    res.status(200).json(Product);
  }
}
