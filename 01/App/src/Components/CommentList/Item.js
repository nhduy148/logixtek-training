import React from 'react'

export default function Item({comment}) {  
  return <p className="comment-item">{`${comment.user} : ${comment.content}`}</p>
}
