import React, {useContext} from 'react';
import ToDoList from "../../ToDoList/ToDoList/ToDoList";
import {AuthContext} from "../../Security/AuthProvader/AuthProvader";
import {Link} from "react-router-dom";

function Home() {

    const currentUser = useContext(AuthContext);

    return (
        <div className="row">
            <div className="column side">
                <h2>Date:</h2>
                <p>Under construction...</p>
            </div>
            <div className="column middle">
                <h2>Today is {new Date().toLocaleDateString()}</h2>
                {
                    currentUser ?
                        <ToDoList currentUser={currentUser}/>
                        :
                        <p>
                            For working with to do list
                            please <Link to="/login">login</Link> or <Link to="/signup">register</Link>.
                        </p>
                }
            </div>
            <div className="column side">
                <p>Here can be your advertisement</p>
            </div>
        </div>
    );
}

export default Home;
