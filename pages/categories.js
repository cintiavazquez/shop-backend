import getCategories from "../src/services/get-categories";
import CategoryGrid from "../src/components/Category-grid";

export function getStaticProps() {
  const categories = getCategories();

  return {
    props: { categories },
  };
}

export default function Categories({ categories }) {
  return (
    <div>
      <h3>Categories</h3>
      <CategoryGrid categories={categories} />
    </div>
  );
}
