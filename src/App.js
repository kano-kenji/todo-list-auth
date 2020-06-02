import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/SignUp/SignUp";
import { AuthProvider } from "./components/Security/AuthProvader/AuthProvader";
import PrivateRoute from "./components/Security/PrivateRoute/PrivateRoute";
import Footer from "./components/Pages/Footer/Footer";
import Header from "./components/Pages/Header/Header";

function App() {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <Header />
                    {/*<PrivateRoute exact path="/" component={Home} />*/}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
