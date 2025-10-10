import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import search from "../src/assets/images/search.png";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "./components/useOnlineStatus";

const RestaurantContainer = () => {
  const [listResData, setListResData] = useState([]);
  const [filterCopyRest, setFilterCopyRest] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  const location = useLocation();
  // console.log("Location hook = ", location);

  useEffect(() => {
    // console.log("UseEffect render");
    fetchData();
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      setFilterCopyRest(listResData);
    }
  }, [location.key]);

  // fetch api
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1397082&lng=79.0631071&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      // console.log(response);
      setListResData(
        response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterCopyRest(
        response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // console.log(response);
    } catch (err) {
      console.error("data not found");
    }
  };

  // filter data on basis of ratings
  const handleFilterData = () => {
    let filteredData = listResData.filter((res) => {
      return res.info.avgRating > 4.4;
    });
    setFilterCopyRest(filteredData);
  };

  // filter veg data
  const handleVegData = () => {
    let vegData = listResData.filter((res) => {
      return res.info.veg === true;
    });
    console.log(vegData);
    setFilterCopyRest(vegData);
  };

  // filter non-veg data
  const handleNonVegData = () => {
    let nonVegData = listResData.filter((res) => !res.info.veg);
    // console.log(nonVegData);
    setFilterCopyRest(nonVegData);
  };

  // search restaurant and cuisines
  const handleSearch = () => {
    const searchFilterData = listResData.filter((res) => {
      return (
        res.info.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        res.info.cuisines
          .join(" ")
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      );
    });
    setFilterCopyRest(searchFilterData);
  };

  const isOnline = useOnlineStatus();
  if (!isOnline) {
    return <h1>Opps! you are offline</h1>;
  }

  if (listResData.length === 0) {
    return <Shimmer />;
  }
  return (
    <>
      <div
        className="font-poppins"
        // style={{
        //   backgroundImage: `url(${hotelBackground})`,
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   backgroundAttachment: "fixed",
        //   backgroundPosition: "center center",
        // }}
      >
        <div className="flex">
          <div className="w-3/4">
            <button
              onClick={handleFilterData}
              className="bg-pink-500 p-2 m-2 text-xs text-yellow-300 rounded-full shadow-lg hover:bg-yellow-300 hover:text-pink-500 cursor-pointer"
            >
              Top Rated Restaurants
            </button>

            <button
              onClick={handleVegData}
              className="bg-pink-500 p-2 m-2 text-xs text-yellow-300 rounded-full shadow-lg hover:bg-yellow-300 hover:text-pink-500 cursor-pointer"
            >
              Veg Restaurant
            </button>
            <button
              onClick={handleNonVegData}
              className="bg-pink-500 p-2 m-2 text-xs text-yellow-300 rounded-full shadow-lg hover:bg-yellow-300 hover:text-pink-500 cursor-pointer"
            >
              Non-Veg Restaurant
            </button>
          </div>

          {/* search input section */}
          <div className="flex items-center max-w-md mx-auto px-2 sm:px-4 pt-[10px]">
            {/* Search Box */}
            <div className="flex items-center flex-1 bg-white rounded-full shadow-lg border border-pink-400 focus-within:border-pink-500">
              <img src={search} className="w-4 h-4 ml-3" />
              <input
                className="w-70 sm:w-52 md:w-64 lg:w-72 bg-transparent rounded p-2 text-[12px] text-pink-400 focus:outline-none"
                placeholder="Search Restaurants or cuisines"
                value={searchInput}
                onChange={(e) => {
                  let val = e.target.value;
                  setSearchInput(val);
                  if (val === "") {
                    setFilterCopyRest(listResData);
                  }
                }}
              />
            </div>
            {/* Search Button */}
            <button
              className="ml-2 bg-pink-500 px-2 py-1 text-sm text-yellow-300 rounded-full shadow-lg hover:bg-yellow-300 hover:text-pink-500 cursor-pointer"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        {/* <div className="flex font-poppins mx-10 flex-wrap p-4 justify-center"> */}
        <div className="font-poppins grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-30 pt-5 gap-x-4 gap-y-10">
          {filterCopyRest.map((rest) => {
            // console.log(rest);
            return (
              <Link key={rest.info.id} to={"/restaurant/" + rest.info.id}>
                <RestaurantCard restList={rest} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RestaurantContainer;
