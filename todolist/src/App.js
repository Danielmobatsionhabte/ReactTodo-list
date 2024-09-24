import './App.css';

import {Header} from "./components/Header";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import ShowTask from "./components/ShowTask";
import { useEffect, useState } from 'react';


function App() {
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist"))||[]);
  const [task, setTask] = useState({});
  const [error, setError] = useState("");
  useEffect(()=>{
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  },[tasklist]);

  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "medium");

  
  useEffect(()=>{
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
    
  },[theme]);
  return (
    <div className={"App "+theme}>
      <Header theme={theme} setTheme={setTheme}/>
   <AddTask error={error} setError={setError} setTask={setTask} task={task} tasklist={tasklist} setTasklist={setTasklist}/>
      <ShowTask setTask={setTask} task={task} tasklist={tasklist} setTasklist={setTasklist}/>
      <Footer/>
    </div>
  );
}

export default App;
