import { useState } from "react";

function AddTodo(props) {
  const { handleAddTodo } = props;
  // to control input text
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleCLick = () => {
    handleAddTodo(text);
    setText("");
  };

  return (
    <div>
      <h3 className="Heading">Todo App</h3>
      <div className="inputbox">
        <input
          className="input"
          type="text"
          placeholder="Add Todo Here"
          value={text}
          onChange={handleChange}
        />{" "}
        <button className="addbtn" onClick={handleCLick}>
          ADD
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
