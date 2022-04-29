import { useState } from "react";
import styled from "styled-components";

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
        <h3>
          {name} {price}
        </h3>
      </div>
      <div>
        <p>{description}</p>
        <p>{category}</p>
      </div>
      <ul>
        <li>{tags}</li>
      </ul>
      <ButtonsWrap>
        <button
          onClick={() => {
            console.log("Delete card", id, content, name);
          }}
        >
          Delete
        </button>

        <button onClick={onEnableDeleteMode}>Edit</button>
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
        <h3>
          {name} {price}
        </h3>
      </div>
      <div>
        <p>{description}</p>
        <p>{category}</p>
      </div>
      <ul>
        <li>{tags}</li>
      </ul>
      <ButtonsWrap>
        <button
          onClick={() => {
            console.log("Delete card", id, content, name);
          }}
        >
          Abbrechen
        </button>

        <button onClick={onDisableDeleteMode}>Wirklich löschen</button>
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
