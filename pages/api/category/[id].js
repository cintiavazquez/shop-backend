import Category from "../../../src/models/Categories";

//ONGOING, not done!!!!!!!!!!!!

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "DELETE") {
    const deletedCat = await Category.findByIdAndDelete(id);
    res.status(200).json({ message: "category deleted", Category: deletedCat });
  } else if (req.method === "PUT") {
    const data = JSON.parse(req.body);
    const category = await Category.findById(id);
    const changedCategory = await Category.findByIdAndUpdate(
      id,
      { name: data.name },
      { description: data.description },
      { new: true }
    );

    res.status(200).json({
      message: "category updated",
      category: changedCategory /*changedUser*/,
    });
  } else {
    const singleCard = await Card.findById(id);
    res.status(200).json(singleCard);
  }
}
