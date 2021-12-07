import { Component } from "react";
import { withRouter } from "react-router";
import ErrorBoundary from "./ErrorBoundary";

class BeerSingle extends Component {
    state = { loading: true };

    async componentDidMount() {
        // console.log(`id = ${this.props.match.params.id}`);
        const beerId = this.props.match.params.id - 1;
        const res = await fetch(
            `https://api.punkapi.com/v2/beers?id=${beerId}`
        );
        const json = await res.json();
        this.setState(Object.assign({ loading: false }, json[beerId]));
    }

    render () {
        console.log(this.state);

        return (
            <div className="beer__single">
                <div className="wrapper">
                    <div className="beer__single__image">

                    </div>
                    <div className="beer__single__content">
                        <h1>lol</h1>
                    </div>

                </div>
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