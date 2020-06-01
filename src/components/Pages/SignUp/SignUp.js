import React, {useCallback} from 'react';
import { withRouter } from "react-router";
import app from "../../Firebase/base";

function SignUp({history}) {
    //Hook useCallback for memoized data. Like as useMemo().
    // The Async keyword means what we will be use synchronization as in Java language. Bellow we use await keyword with this async.
    const handleSignUp = useCallback(async event => {

        //This method preventDefault doesn't let to reload a page after submitting
        event.preventDefault();

        //Initialize our input fields
        const {email, password} = event.target.elements;

        try{

            //Create an user with a createUserWithEmailAndPassword method from the firebase API.
            //The await keyword means what we will be waiting finish this process.
            // And another AUTH process can't be start same process in this time
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);

            //Make a redirect to the home page after successfully sign up
            history.push("/");

        } catch(error){
            //show errors
            alert(error);
        }
    }, [history]);

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <label>
                    <input name="email" type="email" placeholder="Email" />
                </label><label>
                    <input name="password" type="password" placeholder="password"/>
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default withRouter(SignUp);