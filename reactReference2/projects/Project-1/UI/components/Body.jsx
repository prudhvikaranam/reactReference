import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useGetRestrosQuery } from "../rtk-store/apiQuery";
const Body = () => {
  const [restros, setRestros] = useState();

  const { data, isFetching, isError, isLoading, refetch } =
    useGetRestrosQuery();

  console.log("Body component loaded");

  const refreshData = () => {
    refetch();
  };
  return (
    <>
      <button onClick={refreshData}>Refresh</button>
      <div className="restro-items-container" id="restro-items-container">
        {!data ? (
          <h1>Loading</h1>
        ) : (
          data.map((data, i) => {
            return (
              <div className="restro-item" id="restro-item" key={i}>
                <img src={data.image} />
                <h3 className="restro-header">{data.hotelname}</h3>
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
                  <span className="restro-detail">
                    Items : {data.totalitems}
                  </span>
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
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
