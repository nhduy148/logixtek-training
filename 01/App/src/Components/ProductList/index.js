import React from 'react';
import Item from './Item';

export default function List({data, setDetailsID}) {
    
    return (
        <div className="list">
            {
                data.length
                    ? data.map( item => <Item onPageChange={setDetailsID} key={item.id} item={item} /> )
                    : <p>No item.</p>
            }
        </div>
    )
}
