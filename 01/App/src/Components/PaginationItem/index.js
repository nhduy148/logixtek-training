import React from 'react';

export default function PaginationItem({current, children, onPageChange, page}) {  
  current = current ? ` active` : '';
  return <li className={`pagination-item${current}`}><span className="pagination-link" onClick={() => onPageChange(page)}>{children}</span></li>
}