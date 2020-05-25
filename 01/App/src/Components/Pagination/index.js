import React from 'react';
import PaginationItem from '../PaginationItem';

function Pagination({size, current, onPageChange}) {  
  let item = [];
  for( let i = 1; i <= size; i++) {
    item.push(<PaginationItem key={i} className="custom" current={current === i && true} onPageChange={onPageChange} page={i}>{i}</PaginationItem>);
  }
  
  return size > 1 &&
    <ul className="pagination">
      {item}
    </ul>
}

Pagination.Item = PaginationItem;

export default Pagination;
