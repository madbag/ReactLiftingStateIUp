import React from "react";
//whenever using JSX - need to import the file

function Summary(props){
    //props in short mean properties 
    //used to pass data from parent to child
    return (
        <div>
            <h1>TASKS COMPLETED:</h1>
        <p className="tasks-completed"> {props.tasksCompleted}</p>
        </div>
    );
}

export default Summary;