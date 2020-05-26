import React, { useState, useEffect } from 'react';
// import socketIOClient from 'socket.io-client';
import List from '../../Components/ProductList';
import Pagination from '../../Components/Pagination';
import Title from '../../Components/Title';
import PerPage from '../../Components/PerPage';

export default function Home({setDetailsID}) {

  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const sampleData = {totalPage: 0, data: []}
  const [data, setData] = useState(sampleData);  

  useEffect(() => {
    fetch(`http://localhost:5000?page=${page}&limit=${limit}`)
    .then( res => res.json() )
    .then( result => {
      setData(result);
      if( result.totalPage < page ) {
        setPage(1)
      }
    } )
    .catch( err => console.log(err) )
  }, [page, limit]);

  return (
    <main id="home">
      <Title title="List Products" />
      <PerPage size={limit} onChangePerPage={setLimit} />
      <List data={data.data} setDetailsID={setDetailsID} />
      <Pagination
        size={data.totalPage}
        current={page}
        onPageChange={setPage}
      />
    </main>
  )
}
