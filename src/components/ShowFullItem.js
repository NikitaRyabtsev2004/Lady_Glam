import React from "react";

const ShowFullItem = ({ item, onAdd }) => {
  return (
    <div className="full-item">
      <img src={"../../img/" + item.img} alt={item.title} />
      <div className="item-details">
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <p>{item.price} Р</p>
        <button onClick={() => onAdd(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ShowFullItem;
