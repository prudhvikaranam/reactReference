import { useSelector } from "react-redux";

const Locations = () => {
  const locations = useSelector((store) => store.locations);

  return (
    <>
      <>
        {locations ? (
          <div>
            <h2>Currently we are available at below locations</h2>
            {locations.map((data, i) => {
              return <h3>{data}</h3>;
            })}
          </div>
        ) : (
          <div
            className="offers-container center-body-container"
            id="offers-container center-body-container"
          >
            <h2>Please Hold On, Locations will be updated soon......</h2>
          </div>
        )}
      </>
    </>
  );
};

export default Locations;
