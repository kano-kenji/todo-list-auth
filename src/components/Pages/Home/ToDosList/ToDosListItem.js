import React, {useState} from 'react';

function ToDosListItem(props) {
    const [toDo, setToDo] = useState(props.toDo);

    const onUpdateToDo = () => {
        props.onUpdateToDo(toDo);
    }

    const onDeleteToDo = () => {
        props.onDeleteToDo(toDo);
    }

    return (
        <li>
            <input type="checkbox" className="chk-li"
                   value={toDo.isDone}
                   onChange={(e) => setToDo({...toDo, isDone: e.target.checked})}
            />
            <span className="spn-li">{toDo.name}</span>
            <i className="dlt-li" onClick={onDeleteToDo}>X</i>
        </li>
    );
};

export default ToDosListItem;