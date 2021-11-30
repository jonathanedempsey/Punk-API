import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Header from "./Header";
import SearchParams from "./SearchParams";

const App = () => {
    return (
        <div>
            <Router>
                <Header title="Punk API" />
                <Switch>
                    <Route path="/">
                        <SearchParams />
                    </Route>
                </Switch>
            </Router>

        </div>
    );
};

// render App in ID of root.
// StrictMode ensures we only use safe, up to date functionality from the React API.
ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
);