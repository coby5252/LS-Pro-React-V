import React from 'react';
import ItemFeed from './itemfeed';

export default function() {
  return (
    <div className="Items">
       <h2>Items for sale</h2>
       <p>Check out all that we have on offer.  We guarantee you'll get the lowest price and the best service, or your money back!</p>
       <ItemFeed />
    </div>
    );
}