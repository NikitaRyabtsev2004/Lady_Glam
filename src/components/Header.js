import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Order from "./Order";

const showOrders = (props) => {
  let sum = 0;
  props.orders.forEach((el) => (sum += Number.parseFloat(el.price)));
  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="sum">{new Intl.NumberFormat().format(sum)}</p>
    </div>
  );
};

const showNothing = () => (
  <div className="empty">
    <h2>Cart is empty</h2>
  </div>
);

function Header(props) {
  const navigate = useNavigate();
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <span className="logo" onClick={() => navigate("/home")}>
        <img
          style={{ width: "270px", marginTop: "10px", borderRadius: "20px" }}
          src="http://localhost:3000/img/logo6.jpg"
          alt=""
        ></img>
      </span>
      <div className="navigate">
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <div className="shop-cart-button">
            ❤︎ {props.orders.length > 0 ? `${props.orders.length}` : ""}
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
