import { getCategories } from "../src/services/get-categories";
import CategoryGrid from "../src/components/Category-grid";
import { swrFetcher } from "../src/lib/swr-fetcher";
import { SWRConfig } from "swr";

export async function getStaticProps() {
  const categories = await getCategories();

  return {
    props: {
      fallback: {
        "/api/categories": categories,
      },
    },
  };
}

export default function Categories({ fallback }) {
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <h2>Categories</h2>
      <CategoryGrid />
    </SWRConfig>
  );
}
