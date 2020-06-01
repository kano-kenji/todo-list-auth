import React, {useState} from 'react';

function CreateTodoForm(props) {
    const [name, setName] = useState('');

    const onCreateToDo = (event) => {
        event.preventDefault();
        const toDo = {id: Math.random(), name: name, isDone: false};
        props.onCreateToDo(toDo);
        setName('');
    }

    return (
        <div className="container">
            <form className="todo-form" onSubmit={onCreateToDo}>
                <div>
                    <input value={name}
                           onChange={(e) => setName(e.target.value)}
                           type="text" placeholder="What do you need to do?" />
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    );
};

export default CreateTodoForm;