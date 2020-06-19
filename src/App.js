import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.less";
import AdminPage from "./pages/Admin";

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/admin' component={AdminPage} />
            </Switch>
        </Router>
    );
}

export default App;
