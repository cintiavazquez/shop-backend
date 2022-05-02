import { useState } from "react";
import styled from "styled-components";
import { useSWRConfig } from "swr";

export default function Product(props) {
  const [isDeleteMode, setDeleteMode] = useState(false);

  function enableDeleteMode() {
    setDeleteMode(true);
  }

  function disableDeleteMode() {
    setDeleteMode(false);
  }

  return (
    <>
      {isDeleteMode ? (
        <ProductModeEdit {...props} onDisableDeleteMode={disableDeleteMode} />
      ) : (
        <ProductModeShow {...props} onEnableDeleteMode={enableDeleteMode} />
      )}
    </>
  );
}

function ProductModeShow({
  id,
  name,
  description,
  tags,
  price,
  category,
  onEnableDeleteMode,
}) {
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <p>{price} €</p>
      </div>
      <div>
        <p>{description}</p>
        <p>{category}</p>
      </div>
      {/* <ul>
        <li>{tags}</li>
      </ul> */}
      <ButtonsWrap>
        <button onClick={onEnableDeleteMode}>Delete</button>

        <button>Edit</button>
      </ButtonsWrap>
    </div>
  );
}
function ProductModeEdit({
  id,
  name,
  description,
  tags,
  price,
  category,
  onDisableDeleteMode,
}) {
  return (
    <div>
      <div>
        <p>
          Willst du das Produkt &quot;{name}&quot; für {price}€ wirklich
          löschen?
        </p>
      </div>

      <ButtonsWrap>
        <button onClick={onDisableDeleteMode}>Abbrechen</button>
        <button
          onClick={async () => {
            const response = await fetch("api/product/" + id, {
              method: "DELETE",
            });
          }}
        >
          Wirklich löschen
        </button>
      </ButtonsWrap>
    </div>
  );
}

export const ButtonsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
  padding: 10px;
`;
