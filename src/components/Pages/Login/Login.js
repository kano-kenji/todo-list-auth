import React, { useCallback, useContext } from 'react';
import { Redirect, withRouter } from "react-router";
import app from "../../Firebase/base";
import { AuthContext } from "../../Security/AuthProvader/AuthProvader";

function Login({history}) {
    //Hook useCallback for memoized data. Like as useMemo().
    const handleLogin = useCallback( async event =>{
        //This method preventDefault doesn't let to reload a page after submitting
        event.preventDefault();

        //Initialize our input fields
        const {email, password} = event.target.elements;

        try{
            //Log in to system with a signInWithEmailAndPassword method from the firebase API.
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
    if(currentUser) {
        return <Redirect to="" />;
    }

    return (
        <div className="row">
            <div className="container">
                <form onSubmit={handleLogin}>
                    <fieldset>
                        <legend>Log in</legend>
                        <div>
                            <label>Email</label>
                            <input name="email" type="email" placeholder="Email" />
                        </div>
                        <div>
                            <label>Password</label>
                            <input name="password" type="password" placeholder="Password" />
                        </div>
                        <div className="clearfix">
                            <button type="submit">Log In</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default withRouter(Login);
