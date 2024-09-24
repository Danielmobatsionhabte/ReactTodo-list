import React from "react";

const ShowTask = ({tasklist,setTasklist, setTask, task}) => {
const handleEdit = (id) => {
const selectedTask = tasklist.find(todo=>todo.id ===id);
console.log(selectedTask);
setTask(selectedTask);
}

const handleDelete = (id) => {
    setTasklist(tasklist.filter((todo) => todo.id !==id));
}
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button onClick={()=>setTasklist("")} className="clearAll">Clear All</button>
      </div>
      <ul>
        {tasklist && tasklist.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.note}</span>
              <span className="time">{todo.Date}</span>
            </p>
            <i onClick={()=>handleEdit(todo.id)} className="bi bi-pencil-square"></i>
            <i onClick={()=>handleDelete(todo.id)} className="bi bi-trash"></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
