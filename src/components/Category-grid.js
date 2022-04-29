import Category from "./Category";
import { CardGrid } from "./Grid.styled";
import { CardItem } from "./CardItem.styled";

export default function CategoryGrid({ categories }) {
  return (
    <CardGrid>
      {categories.map((category) => {
        return (
          <CardItem key={category.id}>
            <Category name={category.name} description={category.description} />
          </CardItem>
        );
      })}
    </CardGrid>
  );
}
