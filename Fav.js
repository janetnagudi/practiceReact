import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';

function Fav() {
  const [color, setColor] = useState('pink');
  const [flower, setFlower] = useState('peony');
  return (
    <>
      <h1>
        My favorite flower is {color} {flower}!
      </h1>
      <button type="button" onClick={() => setColor('purpleeeww')}>
        Color
      </button>
      <button type="button" onClick={() => setFlower('hydrangea')}>
        Flower
      </button>
    </>
  );
}

export default Fav;
