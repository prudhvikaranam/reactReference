const Body = () => {
  const data = [
    {
      hotelname: "Dominos",
      approxcost: "150",
      rating: "4.5",
      location: "HMT Nagar",
      totalitems: "10",
      image:
        "https://img.etimg.com/thumb/width-1600,height-900,imgsize-53568,resizemode-75,msid-104144006/industry/cons-products/food/dominos-pizza-hut-and-other-pizza-chains-cut-rates-as-small-rivals-slice-up-market.jpg",
      hoteltype: ["Veg", "Non-Veg"]
    },
    {
      hotelname: "Santosh Family Dhaba",
      approxcost: "220",
      rating: "4.8",
      location: "Nacharam",
      totalitems: "25",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAM_JB8LjGV8cXB9HjO5CZ2HglpzezyvpRpQ&s",
      hoteltype: ["Veg"]
    }
  ];

  const addRestroItem = (item) => {
    console.log(item);
  };

  const deleteRestroItem = (item) => {
    console.log(item);
  };

  return (
    <>
      <div className="restro-items-container" id="restro-items-container">
        {data.map((data,i) => {
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
          );
        })}
      </div>
    </>
  );
};

export default Body;
