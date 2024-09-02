import { useDispatch, useSelector } from "react-redux";
import { addOffer } from "../rtk-store/offersSlice";

const Offers = () => {
  const offers = useSelector((store) => {
    return store.offers;
  });

  const dispatchOffers = useDispatch();

  const onAddOffer = () => {
    dispatchOffers(
      addOffer("New Offer added... Coupon code will be shown shortly")
    );
  };


  return (
    <>
      <div
        className="offers-container center-body-container"
        id="offers-container center-body-container"
      >
        {offers ? (
          <>
            <h2>{JSON.stringify(offers.currentOffers)}</h2>
            <h2>{JSON.stringify(offers.upcomingOffers)}</h2>
            <h2>{JSON.stringify(offers.latestOffers)}</h2>
            <button onClick={onAddOffer}>Add New</button>
          </>
        ) : (
          <h2>
            Currently we do not have any offers for today, Please try tomorrow.
          </h2>
        )}
      </div>
    </>
  );
};

export default Offers;
