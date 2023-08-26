import React, { useState } from "react";
import "./accordion.css";

const items = [
  {
    title: "Item 1",
    content: "Content for Item 1",
  },
  {
    title: "Item 2",
    content: "Content for Item 2",
  },
  {
    title: "Item 3",
    content: "Content for Item 3",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null); // Close the open item if clicked again
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container">
      <h1>Accordion</h1>
      <div className="accordion">
        {items.map((item, index) => (
          <div key={index} className="accordion-item">
            <div
              className={`accordion-title ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span
                className={`icon ${activeIndex === index ? "open" : "closed"}`}
              >
                ↓
              </span>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
