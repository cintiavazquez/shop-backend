import { getProducts } from "../../src/services/get-products";

export default async function handler(req, res) {
  const products = await getProducts();

  //   products.push({
  //     id: 1,
  //     content: "Testy test",
  //     name: "Testname",
  //   });

  res.status(200).json(products);
}
