import { StrictMode } from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <div>
            <h1>Hello</h1>
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