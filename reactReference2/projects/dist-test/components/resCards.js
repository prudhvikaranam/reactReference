import react, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "./rtk-redux-utils/cartSlice";

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
    const dispatchItem = useDispatch()


    const addItems = () => {
        dispatchItem(addItem("Pizza"));

        //Here Pizza is added as {payload : Pizza}
    }


    const removeItems = () => {
        dispatchItem(deleteItem("Pizza"));
    }


    return (
        <>

            <div id="resCardContainer" className="resCardContainer">


                {/* Below code is for testing the HOC functionalities starts here*/}
                {/* <h6>Counter : {counter} </h6>
                <button onClick={increaseCounter}>Increase counter</button> */}
                {/* Below code is for testing the HOC functionalities ends here*/}

                <img src={imgPrefix + cloudinaryImageId} style={imgStyle} />
                <h4>Hotel Name : {name}</h4>
                <h5>Cost : {costForTwo} </h5>
                <h6>Rating : {avgRating} </h6>
                <button onClick={addItems}>Add Item</button>
                <button onClick={removeItems}>Remove Item</button>

            </div>

        </>
    )
}

export default ResCard;