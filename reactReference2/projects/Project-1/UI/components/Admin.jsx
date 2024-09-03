import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Admin = () => {
  const [addDataState, setAddDataState] = useState({
    hotelname: "",
    approxcost: "",
    rating: "",
    location: "",
    totalitems: "",
    image: "",
    hoteltype: []
  });

  const addData = (e) => {
    const name = e.target.name;
    setAddDataState({
      ...addDataState,
      [name]: e.target.value
    });
  };

  const submitRestro = () => {
    const postData = axios.post(
      "http://127.0.0.2:8080/postRestro",
      addDataState
    );
    console.log("postData", postData);
  };

  return (
    <>
      <div
        className="admin-container center-body-container"
        id="admin-container center-body-container"
      >
        <h2>Please add the new Restro details here...</h2>
        <div className="add-details-container" id="add-details-container">
          <div className="fields" id="fields">
            <div className="field" id="field">
              Restro Name:
              <input
                type="text"
                name="hotelname"
                id="restro-name"
                value={addDataState.hotelname}
                onChange={addData}
              />
            </div>

            <div className="field" id="field">
              Approx Cost for 1 Person:
              <input
                type="text"
                name="approxcost"
                id="restro-approxcost"
                value={addDataState.approxcost}
                onChange={addData}
              />
            </div>

            <div className="field" id="field">
              Restro Rating:
              <input
                type="text"
                name="rating"
                id="restro-rating"
                value={addDataState.rating}
                onChange={addData}
              />
            </div>

            <div className="field" id="field">
              Restro location:
              <input
                type="text"
                name="location"
                id="restro-location"
                value={addDataState.location}
                onChange={addData}
              />
            </div>

            <div className="field" id="field">
              Restro total items:
              <input
                type="text"
                name="totalitems"
                id="restro-totalitems"
                value={addDataState.totalitems}
                onChange={addData}
              />
            </div>

            <div className="field" id="field">
              Restro Type:
              <input
                type="text"
                name="hoteltype"
                id="restro-hoteltype"
                value={addDataState.hoteltype}
                onChange={addData}
              />
            </div>
            <div className="field" id="field">
              Restro Image URL:
              <input
                type="text"
                name="image"
                id="restro-image"
                value={addDataState.image}
                onChange={addData}
              />
            </div>
          </div>
          <button className="restro-btn-add" onClick={submitRestro}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Admin;
