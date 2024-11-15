import React, { useState } from 'react';
import validateQuantity from './validateQuantity.jsx';

const handleQuantityChange = (operation) => {
  const newQty = operation === '-' ? qty - 1 : qty + 1;
  const validationResult = validateQuantity(newQty);

  if (validationResult === true) {
    setQty(newQty);
  } else {
    alert(validationResult);
  }
};

export default handleQuantityChange;