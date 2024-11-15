import React from 'react';

const validateQuantity = (newQty) => {
  // Add your custom validation logic here
  if (newQty < 0) {
    return 'Quantity cannot be negative';
  }
  if (newQty > 100) {
    return 'Quantity cannot exceed 100';
  }
  return true;
};

export default validateQuantity;
