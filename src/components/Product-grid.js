import Product from "./Product";
import { CardGrid } from "./Grid.styled";
import { CardItem } from "./CardItem.styled";

export default function ProductGrid({ products }) {
  return (
    <CardGrid>
      {products.map((product) => {
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
