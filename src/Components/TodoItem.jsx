function TodoItem({ id, status, title, handleToggle, handleDelete }) {
  return (
    <div className="todoitem" key={id}>
      <p className="p">
        <i class="fa-solid fa-circle-check"></i>
      </p>
      <p>{title}</p>
      <p>{status ? "Complete" : "Not Complete"}</p>

      <p>
        <button onClick={() => handleToggle(id)}>Toggle</button>
      </p>
      <p className="p">
        <i class="fa-solid fa-trash" onClick={() => handleDelete(id)}></i>
      </p>
    </div>
  );
}
export default TodoItem;
