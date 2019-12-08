import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <Router>
            <div className="main-container">
                <Navbar />
                <Main />
            </div>
        </Router>
    </Provider>
);

export default App;
