import { useEffect, useState } from "react";
import ResCard from './resCards';
import {staticRestaurants} from './data'
import { withRestCard } from "./withResCard";
const Body = () => {
    const [resList, setResList] = useState('');
    useEffect(() => {
        fetchData();
    }, [])

    const ResCardWithPromoted = withRestCard(ResCard);

    const fetchData = async () => {
        const resData = await fetch('http://127.0.0.4:3000/getRestaurents'),
        data = await resData.json()
        // const json = await data.json();
        // setResList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setResList(data)
    }

    return (
        <>
            <h3>Below are available in your area...  </h3>
            {resList ?
                <div id="cardsContainer" className="cardsContainer">
                    {resList.map((data, i) => {
                        // return <ResCard resList={data} key={i} />
                        
                        // return data.promoted ? <ResCardWithPromoted resList={data} key={i} /> : <ResCard resList={data} key={i} /> 

                        return data.promoted ? <ResCardWithPromoted resList={data} key={i}  promoted = {"yes"}/> : <ResCardWithPromoted resList={data} key={i}  promoted = {"no"}/>


 
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