import getProducts from "../src/services/get-products";
import ProductGrid from "../src/components/Product-grid";

export function getStaticProps() {
  const products = getProducts();

  return {
    props: { products },
  };
}
export default function Products({ products }) {
  return (
    <div>
      <h2>Products</h2>
      <ProductGrid products={products} />
    </div>
  );
}
