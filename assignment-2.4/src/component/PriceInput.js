const PriceInput = ({ price, discount }) => {
  if (discount > 1) {
    const distPrice = (price - price * (discount / 100)).toFixed(2);
    return <h2>{`$ ${distPrice}`} each</h2>;
  }
  return <h2>{`$ ${price}`} each</h2>;
};

export default PriceInput;
