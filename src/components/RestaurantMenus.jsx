import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import "flowbite";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "../Shimmer";

const RestaurantMenus = () => {
  const [restMenu, setRestMenu] = useState([]);

  const { resId } = useParams();
  console.log("resId = ", resId);

  useEffect(() => {
    console.log("useEffect from menu");
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const res = await axios.get(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1397082&lng=79.0631071&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      console.log("Menus from RestaurantMenu = ", res);
      setRestMenu(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (restMenu.length === 0) {
    return <Shimmer />;
  }

  const text = restMenu?.data?.cards[0]?.card?.card?.text;
  const {
    avgRatingString,
    areaName,
    costForTwoMessage,
    cuisines,
    sla: { slaString },
    totalRatingsString,
  } = restMenu?.data?.cards[2]?.card?.card?.info || {};

  const title =
    restMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.title;

  const itemCards =
    restMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards || [];

  return (
    <div className="font-poppins">
      {/* restaurant card */}
      <div className="flex justify-center">
        <div className="p-16">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-pink-500">
            {text}
          </h5>
          <div className="w-[700px] p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-200 dark:hover:bg-gray-300">
            <p className="text-[15px] font-semibold dark:text-gray-600 p-2">
              <FontAwesomeIcon icon={faStar} className="text-pink-500 mr-3" />
              {avgRatingString}
              <span> ({totalRatingsString})</span>
              <span className="ml-3">• {costForTwoMessage}</span>
            </p>
            <p className="text-[15px] font-semibold underline dark:text-pink-500">
              {cuisines.join(", ")}
            </p>
            <p className="text-[15px] dark:text-gray-500">
              <span className="text-gray-600 font-semibold mr-3">● Outlet</span>
              {areaName}
            </p>
            <p className="text-[15px] font-semibold dark:text-gray-600">
              ● {slaString}
            </p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1 className="text-3xl">{title}</h1>

          {itemCards.map((item) => {
            return (
              <>
                <h1 className="text-2xl">{item.card.info.name}</h1>;
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenus;
