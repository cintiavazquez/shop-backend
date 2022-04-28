import { useState } from "react";

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
      <ul>
        <li>{tags}</li>
      </ul>
      <div>
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
      </div>
    </div>
  );
}
