const Admin = () => {
  return (
    <>
      <div className="admin-container center-body-container" id="admin-container center-body-container">
        <h2>Please add the new Restro details here...</h2>
        <div className="add-details-container" id="add-details-container">
          <div className="fields" id="fields">
            <div className="field" id="field">
              Restro Name:
              <input type="text" name="restro-name" id="restro-name" />
            </div>

            <div className="field" id="field">
              Approx Cost for 1 Person:
              <input
                type="text"
                name="restro-approxcost"
                id="restro-approxcost"
              />
            </div>

            <div className="field" id="field">
              Restro Rating:
              <input type="text" name="restro-rating" id="restro-rating" />
            </div>

            <div className="field" id="field">
              Restro location:
              <input type="text" name="restro-location" id="restro-location" />
            </div>

            <div className="field" id="field">
              Restro total items:
              <input
                type="text"
                name="restro-totalitems"
                id="restro-totalitems"
              />
            </div>

            <div className="field" id="field">
              Restro Type:
              <input
                type="text"
                name="restro-hoteltype"
                id="restro-hoteltype"
              />
            </div>
            <div className="field" id="field">
              Restro Image URL:
              <input
                type="text"
                name="restro-hoteltype"
                id="restro-hoteltype"
              />
            </div>
          </div>
          <button
            className="restro-btn-add"
            //   onClick={() => addRestroItem(data)}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Admin;
