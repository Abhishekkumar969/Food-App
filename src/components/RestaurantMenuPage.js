import React, { useState } from "react";
import Shimmer from "./Shimmerr";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";


const RestaurantMenu = () => {

    const { resId } = useParams();

    const dummy = "Dummy Data";

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    // Use optional chaining to access nested properties safely
    const cardInfo = resInfo?.cards[2]?.card?.card?.info;
    // Destructure only if cardInfo is defined
    const { name, cuisines, costForTwoMessage } = cardInfo || {};

    const itemCardInfo = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const { itemCards } = itemCardInfo || {};

    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return resInfo === null ? (
        <Shimmer />
    ) : (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage} </p>
            {/*  categories accordions */}
            {categories.map((category, index) => (
                // controlled component
                <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                    dummy={dummy}
                />
            ))
            }
        </div>
    );
};
export default RestaurantMenu;