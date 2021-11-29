import { useEffect, useState } from "react";
import Beer from "./Beer";

const SearchParams = () => {
    const [beers, setBeers] = useState([]);

    // adding ", []" at the end ensures only 1 request to the API is made.
    // otherwise, it will keep making the requests to the API over and over again.
    useEffect(() => {
        requestBeers();
    }, []);

    async function requestBeers() {
        const response = await fetch(
            `https://api.punkapi.com/v2/beers?page=1&per_page=10`
        );
        const json = await response.json();

        console.log(json);

        setBeers(json);
    }

    return (
        <div className="results">
            {beers.map((beer) => (
                <Beer
                    key={beer.id}
                    id={beer.id}
                    name={beer.name}
                    image_url={beer.image_url}
                />
            ))}
        </div>
    );
};

export default SearchParams;