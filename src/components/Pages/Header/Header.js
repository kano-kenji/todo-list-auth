import React, { useCallback, useContext } from 'react';
import { withRouter } from "react-router";
import Logo from "../../../logo.svg";
import {AuthContext} from "../../Security/AuthProvader/AuthProvader";
import {Link} from "react-router-dom";
import app from "../../Firebase/base";

function Header({history}) {

    const currentUser = useContext(AuthContext);

    const handleLogout = useCallback(async event => {
        await app
            .auth()
            .signOut();
        history.push("/login");
    }, [history]);

    return (
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="ReactJS/Redux" />
                <h1>ToDo List</h1>
                <p>What do you need to do today?</p>
            </div>
            <div className="topnav">
                {
                    currentUser ?
                        <Link className='menu-item' onClick={handleLogout} to="/">Sign Out</Link>
                        :
                        (
                            history.location.pathname === "/login" ?
                                <Link className='menu-item' to="/signup">Sign Up</Link>
                                :
                                <Link className='menu-item' to="/login">Log In</Link>
                        )

                }
            </div>
        </div>
    );
};

export default withRouter(Header);