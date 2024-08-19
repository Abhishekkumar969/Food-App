import { CDN_URL } from "../utils/constants";
/*const styleCard = {
    backgroundColor: "#f0f0f0",
}*/
/** in style we can also pass the element like {styleCard} but in style we can also call the object of the element like {{backgroundColor: "#f0f0f0"}} */

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;


    return (
        <div className="m-4 p-4 w-[230px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img className="rounded-lg object-cover h-[150px] w-[100%]"
                src={CDN_URL + cloudinaryImageId}
                alt="res-logo" />

            <h3 className="font-bold py-4 text-lg"> {name} </h3>
            <h4> {cuisines.join(", ")} </h4>
            <h4> {avgRating}Stars </h4>
            <h4> {costForTwo} </h4>
            <h4> {sla?.slaString} </h4>
        </div>
    );
};

// Higher order component (takes a component and returns back with some modifications)

// Input as RestaurantCard and output will be RestaurantCardPromoted


// ************** Not using promoted label bcz in our API we don't have promoted data
// export const withPromotedLabel = (RestaurantCard) => {
//return a new component 
//     return (props) => {
//         return (
//             <div>
//                 <label>Promoted</label>
//                 <RestaurantCard {...props} />
//             </div>
//         )

//     }
// }

export default RestaurantCard;