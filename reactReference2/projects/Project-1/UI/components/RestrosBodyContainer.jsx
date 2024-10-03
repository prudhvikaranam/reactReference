import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../rtk-store/cartSlice";

const RestroBodyContainer = ({ data }) => {
  const cartDispatcher = useDispatch();

  const addRestroItem = () => {
    console.log("cartDispatcher", cartDispatcher);
    cartDispatcher(addToCart(1));
  };

  const deleteRestroItem = () => {
    console.log("cartDispatcher", cartDispatcher);
    cartDispatcher(removeFromCart(1));
  };

  return (
    <>
      <div className="restro-item" id="restro-item">
        <img src={data.image} />
        <h3 className="restro-header">{data.hotelname} </h3>

        <div className="restro-details">
          <span className="restro-detail">
            Approx Cost : {data.approxcost} RS/Person
          </span>
          <span className="restro-detail">Rating : {data.rating}</span>
        </div>
        <div className="restro-details">
          <span className="restro-detail">
            Cuisines : {data.hoteltype.toString()}
          </span>
          <span className="restro-detail">Items : {data.totalitems}</span>
        </div>
        <div className="restro-details">
          <button
            className="restro-btn-add"
            onClick={() => addRestroItem(data)}
          >
            Add +
          </button>
          <button
            className="restro-btn-remove"
            onClick={() => deleteRestroItem(data)}
          >
            Remove -
          </button>
        </div>
      </div>
    </>
  );
};

export default RestroBodyContainer;
