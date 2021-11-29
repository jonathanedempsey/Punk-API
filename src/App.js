import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

const App = () => {
    return (
        <div>
            <Header title="Punk API" />
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