import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import UserBar from "./UserBar";
import PriceInput from "./PriceInput";

function Counter() {
  // usestates
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  // const [productName, setProductName] = useState("");
  const [credentials, setCredentails] = useState({
    username: "",
    password: "",
  });

  // default price and item
  const name = "Banana";
  const price = 2.99;

  // template for add or minus count and discount
  const updateCount = (action) => {
    setCount((prevCount) => {
      const newCount = prevCount + action;
      const newDiscount = newCount >= 5 ? 20 : 0;
      setDiscount(newDiscount);
      return newCount;
    });
  };

  // Add count and discount
  const handlePlus = () => {
    updateCount(+1);
  };

  // Minus count and discount
  const handleMinus = () => {
    updateCount(-1);
  };

  //Reset
  const handleReset = () => {
    setCount(0);
    setDiscount(0);
  };

  // const NameChange = (event) => {
  //   setProductName(event.target.value);
  // };

  const userDetails = {
    credentials: credentials,
    setCredentails: setCredentails,
  };

  return (
    <>
      <UserBar details={userDetails} />
      <h2>{name}</h2>
      <br></br>
      <Button label="-" onClick={handleMinus} count={count} />
      <span>{count}</span>
      <Button label="+" onClick={handlePlus} />
      <br></br>
      <Button label="reset" onClick={handleReset} />
      <br></br>
      <PriceInput price={price} discount={discount} />
      <h3>{`Discount: ${discount}%`}</h3>
      {/* <Input label="Product" onChange={NameChange} value={productName} /> */}
    </>
  );
}

export default Counter;
