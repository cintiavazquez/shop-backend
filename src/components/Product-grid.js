import Product from "./Product";
import { CardGrid } from "./Grid.styled";

export default function ProductGrid({ products }) {
  return (
    <CardGrid>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Product
              name={product.name}
              description={product.description}
              tags={product.tags}
              price={product.price}
              category={product.category}
            />
          </li>
        );
      })}
    </CardGrid>
  );
}

//const export CardItem = styled.li`
//box-shadow: 2px 2px 2px black`
