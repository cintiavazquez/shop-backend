import { useState } from "react";

export default function CreateCategoryForm({
  catNameValue,
  catDescriptionValue,
  onDisableEditMode,
  id,
}) {
  const [nameValue, setNameValue] = useState(catNameValue);
  const [descriptionValue, setDescriptionValue] = useState(catDescriptionValue);

  const submitEdit = async (event) => {
    event.preventDefault();

    console.log(nameValue, descriptionValue);

    const response = await fetch("api/category/" + id, {
      method: "PUT",
      body: JSON.stringify({
        name: nameValue,
        description: descriptionValue,
      }),
    });
  };

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
    <form onSubmit={id ? submitEdit : submit}>
      {/* <form onSubmit={submit}> */}
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
        <button type="submit">{id ? "Save" : "Submit"}</button>
        {id ? <button onClick={onDisableEditMode}>Abbrechen</button> : ""}
      </div>
    </form>
  );
}
