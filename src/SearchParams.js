import { useEffect, useState } from "react";
import Beer from "./Beer";

let page = 1;

const SearchParams = () => {
    const [beers, setBeers] = useState([]);

    console.log('on load ' + page);

    // adding ", []" at the end ensures only 1 request to the API is made.
    // otherwise, it will keep making the requests to the API over and over again.
    useEffect(() => {
        requestBeers();
    }, []);

    // Go to next page of Beer results
    function nextPage(event) {
        event.preventDefault();
        page++;
        requestBeers();
    }

    // Go to previous page of Beer results
    function prevPage(event) {
        event.preventDefault();
        if(page != 1) {
            page--;
        }
        requestBeers();
    }

    async function requestBeers() {
        const response = await fetch(
            `https://api.punkapi.com/v2/beers?page=${page}&per_page=8`
        );
        const json = await response.json();

        console.log(json);
        setBeers(json);
    }

    return (
        <div className="results">
            <div className="wrapper">
                <div className="results__list">
                {beers.map((beer) => (
                    <Beer
                        key={beer.id}
                        id={beer.id}
                        name={beer.name}
                        tagline={beer.tagline}
                        abv={beer.abv}
                        ibu={beer.ibu}
                        image_url={beer.image_url}
                    />
                ))}
                </div>
            </div>

            <div className="pagination">
                <button id="prev-page" className="btn" onClick={ prevPage }>Prev</button>
                <span>{page}</span>
                <button id="next-page" className="btn" onClick={ nextPage }>Next</button>
            </div>
        </div>
    );
};

export default SearchParams;