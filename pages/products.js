import { getProducts } from "../src/services/get-products";
import ProductGrid from "../src/components/Product-grid";
import { swrFetcher } from "../src/lib/swr-fetcher";
import { SWRConfig } from "swr";

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: {
      fallback: {
        "/api/products": products,
      },
    },
  };
}
export default function Products({ fallback }) {
  console.log(fallback + "fallback console log");
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <h2>Products</h2>
      <ProductGrid />
    </SWRConfig>
  );
}
