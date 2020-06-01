import React, { useCallback, useContext } from 'react';
import { Redirect, withRouter } from "react-router";
import app from "../../Firebase/base";
import { AuthContext } from "../../Security/AuthProvader/AuthProvader";

function Login({history}) {
    //Hook useCallback for memoized data. Like as useMemo().
    // The Async keyword means what we will be use synchronization as in Java language. Bellow we use await keyword with this async.
    const handleLogin = useCallback( async event =>{
        //This method preventDefault doesn't let to reload a page after submitting
        event.preventDefault();

        //Initialize our input fields
        const {email, password} = event.target.elements;

        try{
            //Log in to system with a signInWithEmailAndPassword method from the firebase API.
            //The await keyword means what we will be waiting finish this process.
            // And another AUTH process can't be start same process in this time
            await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);

            //Make a redirect to the home page after successfully log in
            history.push("/");
        } catch (error){
            alert(error);
        }
    }, [history]);

    //Take an user from AuthContext and check it. If it available, then make a redirect to home page.
    const currentUser = useContext(AuthContext);
    if(currentUser){
        return <Redirect to="" />
    }

    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email"/>
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password"/>
                </label>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default withRouter(Login);