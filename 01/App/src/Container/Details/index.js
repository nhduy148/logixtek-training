import React, { useState, useEffect } from 'react';
import CommentList from '../../Components/CommentList';
import ProductDetail from '../../Components/ProductDetails';
import Title from '../../Components/Title';
import BackToHome from '../../Components/BackToHome';

export default function Details({detailsID, setDetailsID}) {
  const [item, setItem] = useState(null);
  const ID = detailsID;

  useEffect(() => {
    getDetails(ID);
  }, [ID])
  
  const getDetails = (id) => {
    fetch(`http://localhost:5000/item/${id}`)
    .then( res => res.json() )
    .then( result => setItem(result) )
    .catch( err => console.log(err) )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
        
    const data = { highest_price: e.target.highest_price.value }    

    fetch(`http://localhost:5000/item/${ID}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then( res => res.json() )
    .then( result => {
      alert(result.statusText)
      result.status === true && getDetails(ID);
    } )
    .catch( err => console.log(err) )
  }
  
  const comments = item ? [
    { id: 1, user: "User 1", content: "Comment 1" },
    { id: 2, user: "User 2", content: "Comment 2" },
    { id: 3, user: "User 3", content: "Comment 3" }
  ]
  : []

  return (
    <main id="details">
      <BackToHome onGoHome={setDetailsID}/>
      <section className="details">
        <Title title={`Details: Product ID ${item && item.id ? item.id : "xxx"}`} />
        <ProductDetail item={item} handleSubmit={handleSubmit} />
      </section>
      
      <section className="comment">
        <Title title="Comments" />
        <CommentList comments={comments} />
      </section>
    </main>
  )
}
