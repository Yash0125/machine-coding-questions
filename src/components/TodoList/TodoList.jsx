import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState(["React", "Javascript"]);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const addTodo = () => {
    const newTodo = [...todo, text];
    setTodo(newTodo);
    setText("");
  };

  const deleteTodo = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  const editTodo = (index) => {
    setEditIndex(index);
    setText(todo[index]);
  };

  const saveTodo = () => {
    const newTodo = [...todo];
    newTodo[editIndex] = text;
    setTodo(newTodo);
    setEditIndex(-1);
    setText("");
  };

  return (
    <div className="container">
    <h1>Todo List</h1>
      <input
        type="text"
        value={text}
        placeholder="add todo"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add TODO</button>

      <ul>
        {todo.map((item, index) => (
          <>
            <li key={index}>
              {editIndex === index ? (
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              ) : (
                item
              )}
              
              {editIndex === index ? (
                <button onClick={() => saveTodo()}>save</button>
              ) : (
                <>
                  <button onClick={() => editTodo(index)}>edit</button>
                  <button onClick={() => deleteTodo(index)}>delete</button>
                </>
              )}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
