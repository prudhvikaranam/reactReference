const imgStyle = {
    width: '100%',
    height: '50%'
}

const ResCard = (props) => {
    const imgPrefix = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';
    const { name, avgRating, areaName, locality, cloudinaryImageId, costForTwo } = props.resList.info;

    return (
        <>

            <div id="resCardContainer" className="resCardContainer">

                    <img src={imgPrefix + cloudinaryImageId} style={imgStyle} />
                    <h4>Hotel Name : {name}</h4>
                    <h5>Cost : {costForTwo} </h5>
                    <h6>Rating : {avgRating} </h6>
                </div>

        </>
    )
}

export default ResCard;