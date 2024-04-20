import React, { useState } from "react";

const DynamicForm = () => {
  const [fields, setFields] = useState([{ value: "" }]);

  const handleAddField = () => {
    setFields([...fields, { value: "" }]);
  };

  const handleChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value;
    setFields(newFields);
  };

  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleSubmit = () => {
    console.log("form value", fields);
  };

  return (
    <div className="container">
      <h1>DynamicForm</h1>
      <form>
        {fields.map((field, index) => (
          <div className="inputField" key={index}>
            <input
              type="text"
              value={field.value}
              onChange={(e) => handleChange(index, e)}
              placeholder="Enter Value ..."
            />
            <button type="button" onClick={() => handleRemoveField(index)}>
              Remove
            </button>
          </div>
        ))}
      </form>
      <button type="button" onClick={handleAddField}>
        Add Field
      </button>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default DynamicForm;
