import { useState } from "react";
import Task from "./Task"
import Summary from "./Summary"
//importing all the components to the ToDoList

//Making an array of objects for the to do list
const initialTasks = [
    {
        _id: "1a",
        name: "Task1",
        description: "Do something important",
        isDone: false, 
    },
      {
        _id: "2b",
        name: "Task2",
        description: "Do something important",
        isDone: false, 
      },
      {
        _id: "3c",
        name: "Task3",
        description: "Do something important",
        isDone: false, 
      }
];

//making a function for todoList
function ToDoList() {
    const [tasks, setTasks] = useState(initialTasks);
    //manage state within our component.
    //initializing the state variable = tasks, Value = initialTasks
    //when the component starts, it will have the initial tasks from the initialTasks array.
    const [tasksCompleted, setTasksCompleted] = useState(0);
    //to be able to keep a track of tasks that are done
    const toggleTaskDone = (id) => {
        //id = parameter and toggling done through specific id
    const tasksCopy = [...tasks];
    //to avoid direct modification of the array 

    tasksCopy.forEach((task) => {
        //goes through each task of the tasksCopy array
        if (task._id === id) {

            // This code is used to toggle the completion status of a task. It ensures that, regardless of its current state (done or not done), it switches to the opposite state when this line of code is executed.
            task.isDone = task.isDone ? false : true ;
            
            //tasksCompleted incremented or decremented
            if (task.isDone) setTasksCompleted(tasksCompleted + 1);
            else if (!task.isDone)setTasksCompleted(tasksCompleted - 1);
        }

        setTasks(tasksCopy);
    })
}

    return (
        <div>
            <Summary tasksCompleted ={tasksCompleted}/> 
            {/* render = Summary Component 
            Passing prop from ToDoList = TasksCompleted */}
        
        <div className="todo-container">
            {/* iterating over the tasks array */}
            {tasks.map((task) => 
            //for each task in the tasks, key is used to keep a track of id,  task data i.e name, description, completionStatus
            <Task key={task._id} task={task} toggleTask = {toggleTaskDone}/>)}
        </div>
        </div>
    );

    
}

export default ToDoList;