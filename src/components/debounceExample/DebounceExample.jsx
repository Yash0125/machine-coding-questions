import React, { useState } from "react";

const DebounceExample = () => {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("debounce");

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleInputChange = debounce((value) => {
    setOutput(`Performing search with: ${value}`);
  }, 3000); 

  const onInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    handleInputChange(value);
  };
  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Type to search"
      />
      <br />
      {output}
    </div>
  );
};

export default DebounceExample;
