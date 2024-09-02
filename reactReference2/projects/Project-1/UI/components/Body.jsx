import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Body = () => {
  const [restros, setRestros] = useState();

  const fetchRestros = async () => {
    const res = await axios.get("http://127.0.0.2:8080/getProducts");
    console.log(res);
    setRestros(res.data);
  };

  useEffect(() => {
    fetchRestros();
  }, []);

  return (
    <>
      <div className="restro-items-container" id="restro-items-container">
        {!restros ? (
          <h1>Loading</h1>
        ) : (
          restros.map((data, i) => {
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
