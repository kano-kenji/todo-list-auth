import React from 'react';
import app from "../../Firebase/base";

function Home() {
    return (
        <>
            <h1>ToDo list</h1>
            <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </>
    );
}

export default Home;
