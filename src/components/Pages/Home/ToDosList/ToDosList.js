import React from 'react';
import ToDosListItem from "./ToDosListItem";

function ToDosList(props) {
    return (
        <div className="container">
            <ul>
                {props.toDos.map(el =>
                    <ToDosListItem key={el.id}
                                   toDo={el}
                                   onUpdateToDo={props.onUpdateToDo}
                                   onDeleteToDo={props.onDeleteToDo}
                    />
                )}
            </ul>
        </div>
    );
};

export default ToDosList;