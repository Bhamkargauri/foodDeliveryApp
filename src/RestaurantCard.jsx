import {
  faClock,
  faLocationDot,
  faStar,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const RestaurantCard = (props) => {
  // console.log(props);

  const {
    name,
    sla: { slaString },
    locality,
    cuisines,
    avgRating,
    cloudinaryImageId,
  } = props.restList.info;

  return (
    <>
      {/* card 1  */}
      <div className=" border-gray-200 rounded-lg shadow-sm bg-gray-100 m-2 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-gray-400/50 hover:m-2 flex flex-col h-full ">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-50 object-cover"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
            alt="food image"
          />
        </a>
        <div className="p-2 flex-1 flex flex-col h-50">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink-500 text-shadow-lg">
              {name}
            </h5>
          </a>
          <p className=" text-sm text-gray-700 dark:text-gray-500 mt-0">
            <FontAwesomeIcon icon={faStar} className="text-pink-500 mr-3" />
            {avgRating}
          </p>
          <p className=" text-sm text-gray-700 dark:text-gray-500">
            <FontAwesomeIcon icon={faClock} className="text-pink-500 mr-3" />
            {slaString}
          </p>
          <p className=" text-sm text-gray-700 dark:text-gray-500">
            <FontAwesomeIcon icon={faUtensils} className="text-pink-500 mr-3" />
            <span>{cuisines.join(", ")}</span>
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-500">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-pink-500 mr-3"
            />
            {locality}
          </p>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
