import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Item extends Component {
  render() {
    const { item, onShowItem } = this.props;
    return (
      <div className="item">
        <Link to={`/item/${item.id}`}>
          <img
            src={"./img/" + item.img}
            alt={item.title}
            onClick={() => onShowItem(item)}
          />
        </Link>
        <h2>{item.title}</h2>
        <b>{item.desc}</b>
        <p>{item.price} Р</p>
        <div className="add-to-cart" onClick={() => this.props.onAdd(item)}>+</div>
      </div>
    );
  }
}

export default Item;
