import React, { useEffect, useState } from "react";
import app from "../../Firebase/base";

const AuthContext = React.createContext();

function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return(
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext};