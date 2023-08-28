import React, { useState } from "react";
import "./cart.css";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      name: "iPhone 14",
      price: 40000,
    },
    {
      name: "samsung 4",
      price: 50000,
    },
    {
      name: "vivo 10",
      price: 20000,
    },
    {
      name: "redmi 2",
      price: 15000,
    },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleAdd = (index) => {
    const selectedItem = cart[index];
    const selectedItemIndex = selectedItems.findIndex(
      (item) => item.name === selectedItem.name
    );

    if (selectedItemIndex !== -1) {
      const updatedSelectedItems = [...selectedItems];
      updatedSelectedItems[selectedItemIndex].quantity++;
      setSelectedItems(updatedSelectedItems);
    } else {
      setSelectedItems([...selectedItems, { ...selectedItem, quantity: 1 }]);
    }
  };

  const handleRemove = (index) => {
    const selectedItem = cart[index];
    const selectedItemIndex = selectedItems.findIndex(
      (item) => item.name === selectedItem.name
    );

    if (selectedItemIndex !== -1) {
      const updatedSelectedItems = [...selectedItems];
      if (updatedSelectedItems[selectedItemIndex].quantity > 1) {
        updatedSelectedItems[selectedItemIndex].quantity--;
        setSelectedItems(updatedSelectedItems);
      } else {
        const newSelectedItems = selectedItems.filter(
          (item) => item.name !== selectedItem.name
        );
        setSelectedItems(newSelectedItems);
      }
    }
  };

  const totalPrice = selectedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div>
      <div className="container">
        <h1>Cart</h1>
        {cart.map((item, index) => (
          <div className="container" key={index}>
            <span>{item.name}</span>
            <br />
            <span>{item.price}</span>
            <br />
            <button onClick={() => handleAdd(index)}>+</button>
            <button onClick={() => handleRemove(index)}>-</button>
          </div>
        ))}

        <div className="container">
          <h3>Selected items</h3>
          {selectedItems.map((item, index) => (
            <div key={index}>
              <span>{item.name}</span>
              <br />
              <span>Quantity: {item.quantity}</span>
              <br />
              <span>{item.price * item.quantity}</span>
              <br /><hr/>
            </div>
          ))}

          <h3>Total Price: {totalPrice}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
