import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  Navigate,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import Cart from "./components/cart";
import { getLocalOrders, setLocalOrders } from "./utils/localStorage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      orders: getLocalOrders(),
      currentItems: [],
      fullItem: null,
    };

    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
    this.state.currentItems = this.state.items;
  }

  componentDidMount() {
    this.fetchItems();
  }

  fetchItems() {
    fetch("http://localhost:5000/api/items")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ items: data, currentItems: data });
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }

  componentDidUpdate() {
    setLocalOrders(this.state.orders);
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
  }

  addToOrder(item) {
    if (!this.state.orders.find((el) => el.id === item.id)) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
    } else {
      this.setState({
        currentItems: this.state.items.filter((item) =>
          item.category
            .toLowerCase()
            .split(/\s*,\s*/)
            .includes(category.toLowerCase())
        ),
      });
    }
  }

  getItemById(id) {
    return this.state.items.find((item) => item.id === Number(id));
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />

            <Route
              path="/home"
              element={
                <>
                  <div className="presentation p1" />
                  <Categories chooseCategory={this.chooseCategory} />
                  <Items
                    onShowItem={this.onShowItem}
                    items={this.state.currentItems.slice(0, 8)}
                    onAdd={this.addToOrder}
                  />
                  {this.state.currentItems.length > 8 && (
                    <>
                      <div className="presentation p2" />
                      <Items
                        onShowItem={this.onShowItem}
                        items={this.state.currentItems.slice(8, 16)}
                        onAdd={this.addToOrder}
                      />
                    </>
                  )}
                  {this.state.currentItems.length > 16 && (
                    <>
                      <div className="presentation p1" />
                      <Items
                        onShowItem={this.onShowItem}
                        items={this.state.currentItems.slice(16)}
                        onAdd={this.addToOrder}
                      />
                    </>
                  )}
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <Cart orders={this.state.orders} onDelete={this.deleteOrder} />
              }
            />
            <Route
              path="/item/:id"
              element={
                <FullItemRoute
                  getItemById={this.getItemById.bind(this)}
                  onAdd={this.addToOrder}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

const FullItemRoute = ({ getItemById, onAdd }) => {
  const { id } = useParams();
  const item = getItemById(id);

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return <ShowFullItem item={item} onAdd={onAdd} />;
};

export default App;
