import React, { useState } from 'react';

const Quantity = () => {
  const [qty, setQty] = useState(0);

  const handleDecrease = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  const handleIncrease = () => {
    setQty(qty + 1);
  };

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <span>{qty}</span>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default Quantity;