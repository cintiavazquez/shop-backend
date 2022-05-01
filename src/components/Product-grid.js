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
        console.log({ product } + "logging out product in map function");
        console.log(data + "logging out DATA in map function");
        return (
          <CardItem key={product.id}>
            <Product
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
