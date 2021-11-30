import { Component } from "react";
import { withRouter } from "react-router";
import ErrorBoundary from "./ErrorBoundary";

class BeerSingle extends Component {
    render () {
        return (
            <div>
                <h1>Beer Single</h1>
            </div>
        )
    }
}

const BeerSingleWithRouter = withRouter(BeerSingle);

export default function DetailsWithErrorBoundary() {
    return (
        <ErrorBoundary>
            <BeerSingleWithRouter />
        </ErrorBoundary>
    )
};