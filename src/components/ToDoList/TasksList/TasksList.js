import React from 'react';
import TasksListItem from "./TasksListItem";

function TasksList(props) {
    return (
        <div className="container">
            <ul>
                {props.toDos.map(el =>
                    <TasksListItem key={el.id}
                                   toDo={el}
                                   onUpdateToDo={props.onUpdateToDo}
                                   onDeleteToDo={props.onDeleteToDo}
                    />
                )}
            </ul>
        </div>
    );
};

export default TasksList;