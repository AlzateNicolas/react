import React from "react";
const products = [
  { tittle: "Cabbage", isFruit: false, id: 1 },
  { tittle: "Garlic", isFruit: true, id: 2 },
  { tittle: "Apple", isFruit: false, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "green",
      }}
    >
      {product.tittle}
    </li>
  ));

  return <ul>{listItems}</ul>;
}
