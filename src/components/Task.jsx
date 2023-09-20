// import { useEffect } from "react";

function Task (props) {
    // props = object containing data passed from a parent - over here a task properties
    // const [taskCompleted, setTaskCompleted] = useState(false);

    // const toggleTask = () => setTaskCompleted(!taskCompleted);

    return (
        //with return the rendering process will happen
        <div className="task-card">
            <div className="task-card-half">
                <h1>{props.task.name}</h1>
             {/* taken from property */}
                {/* {false */}
                {props.task.isDone
                // because it is false - it will always show Pending.
                // same goes for button as well.
                ? <span>DONE</span>
                : <span>PENDING ⌛</span>
                }

                <h2>Task Description</h2>
                <p>{props.task.description}</p>

                <button className="add" onClick={() =>props.toggleTask(props.task._id)}>
                    {/* false */}
                    {props.task.isDone
                    ?<span>UNDO</span>
                    :<span>✔️</span>
                    }
                </button>
            </div>
        </div>
    )
}

export default Task;