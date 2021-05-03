import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Food Shopping 2",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping 3",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  // delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
};

export default App;
