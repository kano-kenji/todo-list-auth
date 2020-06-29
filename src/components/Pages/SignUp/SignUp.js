import React, {useCallback} from 'react';
import { withRouter } from "react-router";
import app from "../../Firebase/base";

function SignUp({history}) {
    //Hook useCallback for memoized data. Like as useMemo().
    const handleSignUp = useCallback(async event => {

        //This method preventDefault doesn't let to reload a page after submitting
        event.preventDefault();

        //Initialize our input fields
        const {email, password} = event.target.elements;

        try{

            //Create an user with a createUserWithEmailAndPassword method from the firebase API.
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
        <div className="container">
            <form onSubmit={handleSignUp}>
                <fieldset>
                    <legend>Sign Up</legend>
                    <p>Please fill in this form to create an account.</p>
                    <div>
                        <label>Email</label>
                        <input name="email" type="email" placeholder="Email"/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input name="password" type="password" placeholder="Password"/>
                    </div>
                    <div className="clearfix">
                        <button type="submit">Sign Up</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default withRouter(SignUp);
