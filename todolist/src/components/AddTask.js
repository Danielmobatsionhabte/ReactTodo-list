import React from "react";

const AddTask = ({ tasklist, setTasklist, task, setTask, error, setError }) => {
    
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
     const date = new Date(); 
        const updatedTaskList = tasklist.map((todo)=>(
            /*--There are two ways to update implementation */
          // --way 1--  todo.id === task.id? {id:task.id, name:e.target.task.value, note:e.target.task.value, Date: `${date.toLocaleTimeString()}${date.toLocaleDateString()}` }:{id: todo.id, name:todo.name, note:todo.note, Date: todo.Date}
        // see way 2 below 
        todo.id === task.id? {id:task.id, name:e.target.task.value, note:e.target.reminder.value, Date: `${date.toLocaleTimeString()}${date.toLocaleDateString()}` }:todo 
      ));
    
      
        setTasklist(updatedTaskList);
        setTask({});
        e.target.task.value = "";
      e.target.reminder.value = "";
     } else {
       if(e.target.task.value ===""){
        setError("Please fill the task name");
       }else {
        setError("");
        const date = new Date();
        const newTask = {
          id: date.getTime(),
          name: e.target.task.value,
          note: e.target.reminder.value,
          Date: `${date.toLocaleTimeString()}${date.toLocaleDateString()}`,
        };
        // console.log(newTask);
        setTasklist([...tasklist, newTask]);
        e.target.task.value = "";
        e.target.reminder.value = "";
        setTask({});
       }
     
    }
  };
  return (
    <section className="addTask">
        {
            error? <div className="alert alert-warning" role="alert">
                {error}
              </div> : ""
        }
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="Add Task"
          maxLength="60"
          value={task.name || ""}
          onChange = {e=>setTask({...task || "", name:e.target.value})}
        />
        <input
          type="text"
          name="reminder"
          autoComplete="off"
          placeholder="Add reminder note"
          maxLength="60"
          value={task.note ||""}
          onChange = {e => setTask({...task, note: e.target.value})}
        />
        <button type="submit">{task.id ? "Update Task" : "Add Task"}</button>
      </form>
    </section>
  );
};

export default AddTask;
