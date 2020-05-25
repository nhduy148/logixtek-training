import React from 'react';
import Item from './Item';

export default function List({data}) {
    
    return (
        <div className="list">
            {
                data.length
                    ? data.map( item => <Item key={item.id} item={item} /> )
                    : <p>No item.</p>
            }
        </div>
    )
}
