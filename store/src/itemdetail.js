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

export default function(props) {
  const itemId = props.match.params.itemId - 1;
  const name = items[itemId].name;
  const price = items[itemId].price;
  const description = items[itemId].description;
  return (
        <div className="ItemDetail">
           <h2>{name}</h2>
           <p>{description}</p>
           <h4>${price}</h4>
        </div>
    );
}