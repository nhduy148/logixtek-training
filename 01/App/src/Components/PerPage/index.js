import React from 'react'

export default function PerPage({ size, onChangePerPage }) {
  const maxPerPage = 50;
  let option = [];
  for( let i = 1; i <= maxPerPage; i++ ) {
    option.push( <option key={i} value={i}>{i}</option>)
  }
  const callback = e => {
    const value = e.target.value;
    onChangePerPage(value);
  }
  return (
    <div className="per-page">
      <select onChange={(e) => callback(e)} value={size}>
        {option}
      </select>
    </div>
  )
}
