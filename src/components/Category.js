import styled from "styled-components";
import { useState } from "react";
import CreateCategoryForm from "./CreateCategoryForm";

export default function Category(props) {
  const [isEditMode, setIsEditMode] = useState(false);

  function enableEditMode() {
    setIsEditMode(true);
  }

  function disableEditMode() {
    setIsEditMode(false);
  }

  return (
    <>
      {isEditMode ? (
        <CatModeEdit {...props} onDisableEditMode={disableEditMode} />
      ) : (
        <CatModeShow {...props} onEnableEditMode={enableEditMode} />
      )}
    </>
  );
}

function CatModeShow({
  id,
  name,
  /* description, */ category,
  onEnableEditMode,
}) {
  return (
    <div>
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        {/* <p>{description}</p> */}
        <p>{category}</p>
      </div>

      <ButtonsWrap>
        <button onClick={onEnableEditMode}>Edit</button>

        <button
          onClick={async () => {
            const response = await fetch("api/category/" + id, {
              method: "DELETE",
            });
            console.log(await response.json());
          }}
        >
          Delete
        </button>
      </ButtonsWrap>
    </div>
  );
}

function CatModeEdit({ id, /* description,  */ name, onDisableEditMode }) {
  return (
    <CreateCategoryForm
      catNameValue={name}
      /* å */
      onDisableEditMode={onDisableEditMode}
      id={id}
    />
  );
}

export const ButtonsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
  padding: 10px;
`;
