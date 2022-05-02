import { useState } from "react";

export default function CreateCategoryForm() {
  const [nameValue, setNameValue] = useState();
  const [descriptionValue, setDescriptionValue] = useState();

  const submit = async (event) => {
    event.preventDefault();

    console.log(nameValue, descriptionValue);

    const response = await fetch("api/category/createCat", {
      method: "POST",
      body: JSON.stringify({
        name: nameValue,
        description: descriptionValue,
      }),
    });
  };

  return (
    <form onSubmit={submit}>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            label="name"
            placeholder="Extinct fish species"
            value={nameValue}
            onChange={(event) => {
              setNameValue(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="description">Beschreibung</label>
          <input
            name="description"
            label="description"
            placeholder="Megalodon"
            value={descriptionValue}
            onChange={(event) => {
              setDescriptionValue(event.target.value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
