import React, { useState } from 'react';
import './App.css';
import Home from './Container/Home';
import Details from './Container/Details';

export default function App() {
  const [ detailsID, setDetailsID ] = useState(null);

  return detailsID ? <Details setDetailsID={setDetailsID} detailsID={detailsID} /> : <Home setDetailsID={setDetailsID} />
}
