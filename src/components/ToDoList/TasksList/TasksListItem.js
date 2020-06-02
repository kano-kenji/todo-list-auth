import React, {useState} from 'react';

function TasksListItem(props) {

    const [toDo, setToDo] = useState(props.toDo);
    const [editToDo, setEditToDo] = useState({});

    const editMode = () => {
        setEditToDo(toDo);
    }

    const onUpdateToDo = () => {
        props.onUpdateToDo(toDo);
        setEditToDo({});
    }

    const onDeleteToDo = () => {
        props.onDeleteToDo(toDo);
    }

    return (
        <li>
            <div className="list-item">
                <input type="checkbox" className="chk-li"
                       value={toDo.isDone}
                       onChange={(e) => setToDo({...toDo, isDone: e.target.checked})}
                />
                {
                    editToDo.id ?
                        <>
                            <input className="edt-input" type="text"
                                   value={toDo.name}
                                   onChange={(e) => setToDo({...toDo, name: e.target.value})}
                            />
                            <button className="edt-btn" onClick={onUpdateToDo}>Update</button>
                        </>
                        :
                        <span className={toDo.isDone ? "spn-li completed" : "spn-li"} onClick={editMode}>
                            {toDo.name}
                        </span>
                }
                <i className="dlt-li" onClick={onDeleteToDo}>X</i>
            </div>

        </li>
    );
};

export default TasksListItem;