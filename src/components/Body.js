import RestaurantCard from "./RestaurantCard";
// import { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmerr";
import { Link } from "react-router-dom";
import { DATA_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    //  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);



    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(DATA_API);
        const json = await data.json();


        //optional chaining
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    //conditional rendering
    // if (!listOfRestaurants || listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
            <h1>
                Looks like you'r offline
            </h1>
        );

    const { loggedInUser, setUserName } = useContext(UserContext);

    // Ternary operator
    return !listOfRestaurants || listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" placeholder="Search" className="border border-solid border-black"
                        value={searchText} onChange={(e) => {
                            setSearchText(e.target.value);
                        }} />
                    <button className="px-4 py-2 bg-green-100 m-4 hover:shadow-lg  rounded-lg"
                        onClick={() => {
                            // Filter the restaurant cards and update the UI
                            // searchText
                            const filteredRestaurant = listOfRestaurants.filter((res) => res?.info?.name.toLowerCase()
                                .includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filteredRestaurant);
                        }}>Search</button>
                </div>

                <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg "
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter((res) => res?.info?.avgRating > 4
                            );
                            setListOfRestaurant(filteredList);
                            console.log(filteredList)
                            console.log(setListOfRestaurant)
                        }}>
                        Rated 4+
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName : </label>
                    <input className="border border-black p-2"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)} />
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link
                        key={restaurant?.info?.id}
                        to={"/restaurants/" + restaurant?.info?.id}
                    >
                        {/* {restaurant.data.promoted ? (<RestaurantCardPromoted resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)} */}
                        <RestaurantCard resData={restaurant} />

                    </Link>
                ))
                }
            </div>
        </div >
    )
};

export default Body;