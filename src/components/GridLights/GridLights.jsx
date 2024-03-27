import React, { useState } from "react";
import "./GridLights.css";

function Cell({ filled, onClick, isdisabled }) {
  return (
    <button
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
      disabled={isdisabled}
    />
  );
}

const GridLights = () => {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deacivateCells = () => {
    setIsDeactivating(true);

    const timer = setInterval(() => {
      setOrder((orignalOrder) => {
        const newOrder = orignalOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }
        return newOrder;
      });
    }, 1000);
    return () => clearInterval(timer);
  };

  const activatedCell = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);

    // if all grid full, deactivate.
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deacivateCells();
    }
  };
  return (
    <div className="container">
      <h1>GridLights</h1>
      <div className="wrapper">
        <div
          className="grid"
          style={{ gridTemplateColumns: `repeat(${config[0].length},1fr)` }}
        >
          {config.flat(1).map((value, index) => {
            return value ? (
              <Cell
                key={index}
                filled={order.includes(index)}
                onClick={() => activatedCell(index)}
                isdisabled={order.includes(index) || isDeactivating} // to avaid duplicate 
              />
            ) : (
              <span></span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GridLights;

//  filled={order.includes(index)} => it will check that if it's clicked
// and in order , it will filled.
