import { CDN_URL } from "../utils/constants";
const ItemList = ({ items, dummy }) => {

    return (
        <div>
            {items.map(item => (
                <div key={item.card.info.id}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12" >
                        <div className="py-2">
                            <span > {item.card.info.name}</span>
                            {/* <span> - ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span> ******OR******* */}
                            <span> - ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p>{item.card.info.ratings.aggregatedRating.rating === "undefined" || item.card.info.ratings.aggregatedRating.rating === undefined ? "" : `⭐${item.card.info.ratings.aggregatedRating.rating}`}  </p>
                    </div>
                    {/* <div className="p-4 w-3/12 "> */}
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-1 mx-8 h-8 rounded-lg bg-black text-white shadow-lg ">Add +</button>
                        </div>
                        <img className="w-full h-20 object-cover" src={CDN_URL + item.card.info.imageId}
                            alt="img" />
                    </div>
                </div>
            ))}
        </div>
    );
};
export default ItemList;