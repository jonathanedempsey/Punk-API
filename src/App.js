import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import SearchParams from "./SearchParams";
import BeerSingle from "./BeerSingle";

const App = () => {
    return (
        <div>
            <Router>
                <Header title="Punk API" />
                <Switch>
                    <Route path="/beer/:id">
                        <BeerSingle />
                    </Route>
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