export const getLocalOrders = () => {
    const orders = localStorage.getItem("orders");
    return orders ? JSON.parse(orders) : [];
  };
  
  export const setLocalOrders = (orders) => {
    localStorage.setItem("orders", JSON.stringify(orders));
  };
  