import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';

function Breakfast() {
  const [breakfast, setBreakfast] = useState({
    type: 'Continental',
    milk: 'Hazelnut milk',
    cereal: 'Cinammon Crunch',
    coffee: 'Latte',
    eggs: 'scrambled eggs',
    toast: 'soughdough toast',
  });
  return (
    <>
      <h1>My favorite breakfast is {breakfast.type}!</h1>
      <p>
        For breakfast I have {breakfast.cereal} with {breakfast.milk}. Then I
        will have
      </p>
      <p>
        I also have {breakfast.milk} {breakfast.coffee} with {breakfast.eggs} on{' '}
        {breakfast.toast}.
      </p>
    </>
  );
}

export default Breakfast;
