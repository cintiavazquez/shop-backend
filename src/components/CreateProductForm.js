import { useState } from "react";

export default function CreateProductForm() {
  const [nameValue, setNameValue] = useState();
  const [descriptionValue, setDescriptionValue] = useState();
  const [priceValue, setPriceValue] = useState();
  const [categoryValue, setCategoryValue] = useState();
  const [tagValue, setTagValue] = useState();

  const submit = async (event) => {
    event.preventDefault();

    console.log(
      nameValue,
      descriptionValue,
      priceValue,
      categoryValue,
      tagValue
    );

    const response = await fetch("api/product/createProduct", {
      method: "POST",
      body: JSON.stringify({
        name: nameValue,
        description: descriptionValue,
        price: priceValue,
        category: categoryValue,
        tags: tagValue,
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
            placeholder="Crab"
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
            placeholder="Red long-legged river crab"
            value={descriptionValue}
            onChange={(event) => {
              setDescriptionValue(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="price">Preis</label>
          <input
            name="price"
            label="price"
            placeholder="3€"
            value={priceValue}
            onChange={(event) => {
              setPriceValue(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="category">Kategorie</label>
          <input
            name="category"
            label="category"
            placeholder="Wirbellose"
            value={categoryValue}
            onChange={(event) => {
              setCategoryValue(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="tags">Tags</label>
          <input
            name="tags"
            label="tags"
            placeholder="Megenrabatt, Einzelgänger"
            value={tagValue}
            onChange={(event) => {
              setTagValue(event.target.value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
