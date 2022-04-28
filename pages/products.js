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
      <h1>Products</h1>
      <ProductGrid products={products} />
    </div>
  );
}
