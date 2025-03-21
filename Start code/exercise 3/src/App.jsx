import React from "react";
import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  { product: "Banana", price: 54.6, quantity: 3 },
  { product: "Computer", price: 100.5, quantity: 4 },
  { product: "Table", price: 1070, quantity: 3 },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  // Function to handle quantity change
  const handleQuantityChange = (index, change) => {
    const updatedOrders = [...orders];
    updatedOrders[index].quantity += change;
    setOrders(updatedOrders);
  };

  // Calculate the total price
  const total = orders.reduce((sum, order) => sum + order.price * order.quantity, 0);

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order, index) => (
          <OrderCard
            key={index}
            product={order.product}
            price={order.price}
            quantity={order.quantity}
            onQuantityChange={(change) => handleQuantityChange(index, change)}
          />
        ))}
      </div>

      <CheckoutButton total={total.toFixed(2)} />
    </>
  );
}
