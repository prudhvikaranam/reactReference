import { useEffect, useState } from "react";
import ResCard from './resCards';
const Body = () => {
    const [resList, setResList] = useState('');
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setResList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    return (
        <>
            <h3>Below are available in your area...  </h3>
            {resList ?
                <div id="cardsContainer" className="cardsContainer">
                    {resList.map((data, i) => {
                        return <ResCard resList={data} key={i} />

                    })} </div>
                : <h1>Data still loading</h1>
            }
        </>
    )

}

export default Body;

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/


// { name, avgRating, areaName, locality, cloudinaryImageId }