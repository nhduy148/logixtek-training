import React from 'react'
export default function ProductDetail({item, handleSubmit}) {
  return item
    ? <div className="product">
        <div className="image">
          <img src={item.thumb} alt=""/>
        </div>
        <div className="info">
          <p>Original price: {item.price}</p>
          <p>Num of Bid: {item.num_of_bid}</p>
          <p>Highest Price: {item.highest_price}</p>
          <p>Bid date: {item.date}</p>
          <form onSubmit={(e) => handleSubmit(e)} ><p>Bid: <input type="number" name="highest_price" /> <button type="submit">Submit</button></p></form>
        </div>
      </div>
    : <p>No product yet.</p>
}
