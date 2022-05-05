import Category from "./Category";
import { CardGrid } from "./Grid.styled";
import { CardItem } from "./CardItem.styled";
import useSWR from "swr";

export default function CategoryGrid({}) {
  const { data, error } = useSWR("/api/categories");

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) return <div>loading...</div>;

  return (
    <CardGrid>
      {data.map((category) => {
        return (
          <CardItem key={category.id}>
            <Category
              id={category.id}
              name={category.name}
              /* description={category.description} */
            />
          </CardItem>
        );
      })}
    </CardGrid>
  );
}
