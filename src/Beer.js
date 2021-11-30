import { Link } from 'react-router-dom';

const Beer = (props) => {
    return (
        <Link to={`/beer/${props.id}`} className="card">
            <div className="card__image">
                <img src={props.image_url} alt="" />
            </div>
            <h3 className="card__title">{props.name} - {props.id}</h3>
            <p className="card__tagline">{props.tagline}</p>
            <ul className="card__stats">
                <li>{props.abv}</li>
                <li>{props.ibu}</li>
            </ul>
            <span className="card__link">More Info</span>
        </Link>
    );
};

export default Beer;