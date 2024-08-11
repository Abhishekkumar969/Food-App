import React from "react";
import Shimmer from "./Shimmerr";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu.js";


const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    // Use optional chaining to access nested properties safely
    const cardInfo = resInfo?.cards[2]?.card?.card?.info;
    // Destructure only if cardInfo is defined
    const { name, costForTwoMessage } = cardInfo || {};

    const itemCardInfo = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const { itemCards } = itemCardInfo || {};

    console.log(itemCards);

    return resInfo === null ? (
        <Shimmer />
    ) : (
        <div className="menu">
            <h1>{name}</h1>
            <p> {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {" Rs."}
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default RestaurantMenu;