import { useState } from "react";
import Input from "./Input";

const products = [
  {
    id: 1,
    name: "Banana",
    price: 2,
    pic: "🍌",
  },
  {
    id: 2,
    name: "Apple",
    price: 1,
    pic: "🍎",
  },
  {
    id: 3,
    name: "Orange",
    price: 3,
    pic: "🍊",
  },
  {
    id: 4,
    name: "Pineapple",
    price: 5,
    pic: "🍍",
  },
  {
    id: 5,
    name: "Mango",
    price: 4,
    pic: "🥭",
  },
  {
    id: 6,
    name: "Coconut",
    price: 6,
    pic: "🥥",
  },
];

/*
 */

function ProductList() {
  //Filter the products of a certain max price, say $4.  You hard code the max price first.

  const [filterCost, setFilterCost] = useState("");
  const Filter = (event) => {
    setFilterCost(event.target.value);
  };

  const filterPrice = products.filter((product) => product.price > filterCost);

  const filteredDisplay =
    filterPrice.length > 0 ? (
      filterPrice.map((product) => (
        <p>
          {product.pic} {product.name} : ${product.price}
        </p>
      ))
    ) : (
      <p>No products found above this price.</p>
    );

  //Task 3: Use reduce method to sum up the total cost of all the product prices
  // reduce((accumulator, currentItem)=>{}, initial value)
  const TotalCost = products.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  return (
    <div>
      <h2>Product List</h2>
      <Input
        label="Filter Based on Price"
        onChange={Filter}
        value={filterCost}
      />
      {filteredDisplay}
      <h2>Total price of all products</h2>
      <p>${TotalCost}</p>
    </div>
  );
}

export default ProductList;

// return (
//   <div className={styles.userBarContainer}>
//     <form onSubmit={handleLogin}>
//       <label>username</label>
//       <input
//         name="userName"
//         onChange={handleCredentials}
//         value={details.userName}
//       />
