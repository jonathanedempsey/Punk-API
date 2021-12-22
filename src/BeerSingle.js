import { Component } from "react";
import { withRouter } from "react-router";
import ErrorBoundary from "./ErrorBoundary";

class BeerSingle extends Component {
    state = { loading: true };

    async componentDidMount() {
        // console.log(`id = ${this.props.match.params.id}`);
        const beerId = this.props.match.params.id;
        const res = await fetch(
            `https://api.punkapi.com/v2/beers/${beerId}`
        );
        const json = await res.json();
        this.setState(Object.assign({ loading: false }, json[0]));
    }

    render () {
        // console.log(this.state);
        const { abv, brewers_tips, description, first_brewed, food_pairing, ibu, image_url, name, tagline } = this.state;
        const food_pairing_split = [food_pairing].join().replace(/,(?=[^\s])/g, ", ");

        return (
            <div className="beer__single">
                <div className="wrapper">
                    <div className="beer__single__content">
                        <div className="beer__single__image">
                            <img src={ image_url } alt="" />
                        </div>
                        <div className="beer__single__details">
                            <h1 className="beer__single__title">{ name }</h1>
                            <p className="beer__single__tagline">{ tagline }</p>
                            <ul className="beer__single__meta">
                                <li><strong>First brewed</strong>: { first_brewed }</li>
                                <li><strong>ABV</strong>: { abv }</li>
                                <li><strong>IBU</strong>: { ibu }</li>
                            </ul>
                            <p className="beer__single__description">{ description }</p>
                            <h3 className="beer__single__subtitle">Brewer Tips</h3>
                            <p className="beer__single__tips">{ brewers_tips }</p>
                            <p className="beer__single__food-pairing">Goes great with { food_pairing_split }</p>
                        </div>
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