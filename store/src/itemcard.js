import React, { Component } from 'react';

class ItemCard extends Component {
    constructor(props) {
        super(props);
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.state = {
            url: props.url,
            key: props.id,
            price: props.price,
            hover: false
        };
    }

    mouseOver() {
        this.setState({hover: true});
    }

    mouseOut() {
        this.setState({hover: false});
    }

    render() {
        let content = null;
        let url = this.state.url;
        let key = this.state.key;
        if(this.state.hover) {
            content = <p>${this.state.price}</p>
        }
        return React.createElement(
            "a",
            {href: `${url}/${key}`}, React.createElement(
            "div",
            {className: "ItemCard", onMouseOver: this.mouseOver, onMouseOut: this.mouseOut},
            content            
        ));
    }
}
export default ItemCard 