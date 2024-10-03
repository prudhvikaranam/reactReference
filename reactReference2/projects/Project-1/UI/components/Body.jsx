import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useGetRestrosQuery } from "../rtk-store/apiQuery";
import RestroBodyContainer from "./RestrosBodyContainer";
import WithPromotedRestro from "./HOC/WithPromotedLabel";
const Body = () => {
  const [restros, setRestros] = useState();

  const { data, isFetching, isError, isLoading, refetch } =
    useGetRestrosQuery();

  const WithFilteredPromotedComponent = WithPromotedRestro(RestroBodyContainer);
  const refreshData = () => {
    refetch();
  };
  return (
    <>
      {/* <button onClick={refreshData}>Refresh</button> */}

      <div className="restro-items-container" id="restro-items-container">
        {!data ? (
          <h1>Loading</h1>
        ) : (
          data.map((data, i) => {
            return <WithFilteredPromotedComponent data={data}/>;
          })
        )}
      </div>
    </>
  );
};

export default Body;
