import styled from "styled-components";

export default function Category({ id, name, description, category }) {
  return (
    <div>
      <div>
        <h3>{name}</h3>
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

export const ButtonsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
  padding: 10px;
`;
