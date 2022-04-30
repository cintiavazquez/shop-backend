import { getProducts } from "../src/services/get-products";
import ProductGrid from "../src/components/Product-grid";

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: { products },
  };
}
export default function Products({ products }) {
  console.log(products);
  return (
    <div>
      <h2>Products</h2>
      <ProductGrid products={products} />
    </div>
  );
}
