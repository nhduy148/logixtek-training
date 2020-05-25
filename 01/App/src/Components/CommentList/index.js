import React from 'react';
import Item from './Item';

export default function index({comments}) {
  return comments.length
    ? <div className="comment-list">
        {
          comments.map(comment => <Item key={comment.id} comment={comment} />)
        }
      </div>
    : <p>No comments yet</p>
}
