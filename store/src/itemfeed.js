const items = [
    {"index": 1, "name":"Blanket", "price":100, "description":"A fuzzy blanket"},
    {"index": 2, "name":"Shirt", "price":24, "description":"Perfect for wearing!"},
    {"index": 3, "name":"Pants", "price":66, "description":"For your legs"},
    /*{"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"},
    {"index": 1, "name":"Blanket", "price":24, "description":"A fuzzy blanket"}*/
]


import React from 'react';
import ItemCard from './itemcard';

export default function(props) {
    return (
        <div className="ItemFeed">
            {items.map((item) => {
                return <div className="ItemCardWraper" key={item.index}>
                    <ItemCard id={item.index} price={item.price} url={window.location.href} />
                    <p className="ItemCardName">{item.name}</p>
                    <p className="ItemCardDescription">{item.description}</p>
                </div>;
            })}
        </div>
    );
}