import react, { useState } from "react";

const imgStyle = {
    width: '100%',
    height: '40%'
}

const ResCard = (props) => {
    const imgPrefix = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';
    const { name, avgRating, areaName, locality, cloudinaryImageId, costForTwo } = props.resList.info;

    const [counter, setCounter] = useState(0);
    const increaseCounter = () => {
        setCounter(counter + 1);
    }
    return (
        <>

            <div id="resCardContainer" className="resCardContainer">
                <h6>Counter : {counter} </h6>
                <button onClick={increaseCounter}>Increase counter</button>
                <img src={imgPrefix + cloudinaryImageId} style={imgStyle} />
                <h4>Hotel Name : {name}</h4>
                <h5>Cost : {costForTwo} </h5>
                <h6>Rating : {avgRating} </h6>
            </div>

        </>
    )
}

export default ResCard;