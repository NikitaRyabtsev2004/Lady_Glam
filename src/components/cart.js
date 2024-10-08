import React from "react";
import Order from "./Order";

const Cart = ({ orders, onDelete }) => {
  let sum = 0;
  orders.forEach(el => (sum += Number.parseFloat(el.price)));

  return (
    <div className="cart">
      {orders.length > 0 ? (
        <div>
          {orders.map(el => (
            <Order key={el.id} item={el} onDelete={onDelete} />
          ))}
          <p className="sum">Total: {new Intl.NumberFormat().format(sum)}</p>
        </div>
      ) : (
        <div className="empty">
          <h2>Вы ничего не отслеживаете</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
