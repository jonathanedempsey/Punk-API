const Beer = (props) => {
    return (
        <div>
            {/* <img src={props.image_url} alt={`${props.name} product image`} /> */}
            <h2>{props.name} - {props.id}</h2>
        </div>
    );
};

export default Beer;