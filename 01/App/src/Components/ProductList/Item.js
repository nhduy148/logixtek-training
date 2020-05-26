import React from 'react';

export default function Item({item, onPageChange}) {
  return (
    <div className="item" onClick={() => onPageChange(item.id)}>
      <div className="thumb">
          <img src={item.thumb} alt=""/>
      </div>
      <p>ID: {item.id}</p>
      <p>Price: {item.price}</p>
      <p>Num of Bid: {item.num_of_bid}</p>
      <p>Highest Price: {item.highest_price}</p>
    </div>
  )
}
