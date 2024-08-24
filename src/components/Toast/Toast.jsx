import React, { useState } from "react";
import "./Toast.css";

const Toast = () => {
  const [toastArray, setToastArray] = useState([]);
  const [count, setCount] = useState(0);

  const handleToast = () => {
    const newCount = count + 1;
    setCount(newCount);
    const newToast = { id: Date.now(), content: `hello ${newCount}` };
    setToastArray((prev) => [...prev, newToast]);

    setTimeout(() => {
      removeToast(newToast.id);
    }, 5000);
  };

  const removeToast = (id) => {
    setToastArray((prev) => prev.filter((toast) => toast.id !== id));
  };
  return (
    <div className="container">
      <h1>Toast</h1>
      <button onClick={handleToast}>Toast</button>
      <div className="toast-wrapper">
        {toastArray.map((toast) => (
          <div key={toast.id} className="toast-container">
            {toast.content}
            <button
              className="close-button"
              onClick={() => removeToast(toast.id)}
            >
              X
            </button>
            <div
              className="progress-bar"
              style={{ animation: `progressBar 5s linear forwards` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toast;
