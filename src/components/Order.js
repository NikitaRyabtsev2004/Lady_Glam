import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Order extends Component {
  render() {
    const { item, onDelete } = this.props;
    return (
      <div className="item">
        <Link to={`/item/${item.id}`}>
          <img src={"./img/" + item.img} alt={item.title} />
        </Link>
        <h2>{item.title}</h2>
        <p>{item.price} Р</p>
        <div className="delete-icon" onClick={() => onDelete(item.id)}></div>
      </div>
    );
  }
}

export default Order;
