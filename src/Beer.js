import { Link } from 'react-router-dom';

const Beer = (props) => {
    return (
        <Link to={`/beer/${props.id}`} className="card">
            <div className="card__image">
                <img src={props.image_url} alt="" />
            </div>
            <h3 className="card__title">{props.name}</h3>
            <p className="card__tagline">{props.tagline}</p>
            <div className="card__details">
                <ul className="card__list">
                    <li>
                        <span>ABV</span>
                        {props.abv}
                    </li>
                    <li>
                        <span>IBU</span>
                        {props.ibu}
                    </li>
                </ul>
                <span className="card__link">More Info</span>
            </div>
        </Link>
    );
};

export default Beer;