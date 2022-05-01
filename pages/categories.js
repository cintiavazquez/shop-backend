import getCategories from "../src/services/get-categories";
import CategoryGrid from "../src/components/Category-grid";

export async function getStaticProps() {
  const categories = await getCategories();

  return {
    props: { categories },
  };
}

export default function Categories({ categories }) {
  return (
    <div>
      <h2>Categories</h2>
      <CategoryGrid categories={categories} />
    </div>
  );
}
