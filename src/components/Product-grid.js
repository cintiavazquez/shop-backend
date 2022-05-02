import Product from "./Product";
import { CardGrid } from "./Grid.styled";
import { CardItem } from "./CardItem.styled";
import useSWR from "swr";

export default function ProductGrid() {
  const { data, error } = useSWR("/api/products");

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <CardGrid>
      {data.map((product) => {
        return (
          <CardItem key={product.id}>
            <Product
              id={product.id}
              name={product.name}
              description={product.description}
              tags={product.tags}
              price={product.price}
              category={product.category}
            />
          </CardItem>
        );
      })}
    </CardGrid>
  );
}
