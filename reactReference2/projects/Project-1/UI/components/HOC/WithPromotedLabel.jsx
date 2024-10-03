import React from "react";

const WithPromotedRestro = (OriginalComponent) => {
  return ({ data }) => {

    return (
      <>
        <div className="promotedContainer" id="promotedContainer">
          <span className="restro-header restro-header-promoted">
            <div className = {`restro-promoted-label ${data.promoted && 'isPromoted'}`}>{data.promoted && "Promoted"}</div>
          </span>

          <OriginalComponent data={data} />
        </div>
      </>
    );
  };
};

export default WithPromotedRestro;
