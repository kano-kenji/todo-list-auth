import React, {useState} from 'react';
import CreateTodoForm from "./CreateToDoForm/CreateTodoForm";
import ToDosList from "./ToDosList/ToDosList";

function Home() {

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
        <div className="row">
            <div className="column side">
                <h2>Date:</h2>
                <p>Date list</p>
            </div>
            <div className="column middle">
                <h2>Today is {new Date().toLocaleDateString()}</h2>
                <CreateTodoForm onCreateToDo={onCreateToDo} />
                <ToDosList toDos={toDos}
                           onUpdateToDo={onUpdateToDo}
                           onDeleteToDo={onDeleteToDo}
                />
            </div>
            <div className="column side">
                <p>Here can be your advertisement</p>
            </div>
        </div>
    );
}

export default Home;
