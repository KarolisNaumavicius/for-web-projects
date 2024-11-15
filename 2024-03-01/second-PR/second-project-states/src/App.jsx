import React, { useState } from 'react';
import Quantity from './Quantity.jsx'; 
import handleQuantityChange from './handleQuantityChange.jsx'

const App = () => {

  return (
    <div>
      <Quantity />
      <validateQuantity />
      <handleQuantityChange />

    </div>
  );
};

export default App;