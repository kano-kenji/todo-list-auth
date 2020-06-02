import React, {useState} from 'react';
import CreateTodoForm from "../CreateToDoForm/CreateTodoForm";
import TasksList from "../TasksList/TasksList";

function ToDoList(props) {

    const [toDos, setToDos] = useState([]);

    const onCreateToDo = (toDo) => {
        setToDos([...toDos, toDo]);
    }

    const onUpdateToDo = (toDo) => {
        const updateToDos = toDos.map(el => {
            if( el.id === toDo.id){
                return {...el, toDo}
            } else {
                return el;
            }
        });
        setToDos(updateToDos);
    }

    const onDeleteToDo = (toDo) => {
        const newToDos = toDos.filter(el => el.id !== toDo.id);
        setToDos(newToDos);
    }

    return (
        <>
            <CreateTodoForm onCreateToDo={onCreateToDo} user={props.currentUser}/>
            <TasksList toDos={toDos}
                       onUpdateToDo={onUpdateToDo}
                       onDeleteToDo={onDeleteToDo}
            />
        </>
    );
};

export default ToDoList;