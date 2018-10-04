import React from 'react';

const ItemDetail = ({ item }) => (
  <div>
    <h3>{item.name}</h3>
    <ul>
      <li>Happiness: {item.happiness}</li>
      <li>Price: {item.price}</li>
    </ul>
  </div>
);

export default ItemDetail;
