import styled from "styled-components";

export default function Category({
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

      <ButtonsWrap>
        <button
          onClick={() => {
            console.log("edit");
          }}
        >
          Edit
        </button>

        <button
          onClick={() => {
            console.log("delete");
          }}
        >
          Delete
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
