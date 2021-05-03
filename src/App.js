import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        },
        {
            id: 2,
            text: 'Food Shopping 2',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping 3',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        },
    ])

    // delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle reminder
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        )
    }

    return (
        <div className="container">
            <Header />
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
            ) : (
                'No tasks to show!'
            )}
        </div>
    )
}

export default App
