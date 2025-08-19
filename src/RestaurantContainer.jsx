import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const RestaurantContainer = () => {
  const [listResData, setListResData] = useState([]);
  const [filterCopyRest, setFilterCopyRest] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    console.log("UseEffect render");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1397082&lng=79.0631071&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      setListResData(
        response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setFilterCopyRest(
        response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      console.log(response);
    } catch (err) {
      console.error("data not found");
    }
  };

  const handleFilterData = () => {
    let filteredData = listResData.filter((res) => {
      // console.log(res);
      return res.info.avgRating > 4.4;
    });
    // console.log(filteredData);
    // setListResData(filteredData);
    setFilterCopyRest(filteredData);
  };

  const handleVegData = () => {
    let vegData = listResData.filter((res) => {
      // console.log(res);
      return res.info.veg === true;
    });
    console.log(vegData);
    // setListResData(vegData);
    setFilterCopyRest(vegData);
  };

  const handleNonVegData = () => {
    let nonVegData = listResData.filter((res) => !res.info.veg);
    console.log(nonVegData);
    setFilterCopyRest(nonVegData);
  };

  const handleSearch = () => {
    if (searchInput.trim() === "") {
      setFilterCopyRest(listResData);
    } else {
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
    }
  };

  if (listResData.length === 0) {
    return <Shimmer />;
  }
  return (
    <>
      <div className="font-poppins">
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
          <div className="relative flex justify-end w-1/4 mr-4">
            <img
              src="src/assets/images/search.png"
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-4 h-4"
            />
            <input
              className="rounded-full m-2 pl-10 pr-0 p-2 shadow-lg text-sm text-pink-400 border border-pink-400 focus:border-pink-500 focus:outline-none"
              placeholder="Search Restaurants"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            ></input>
            <button
              className="bg-pink-500 p-2 m-2 ml-0 text-xs text-yellow-300 rounded-full shadow-lg hover:bg-yellow-300 hover:text-pink-500 cursor-pointer"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        <div className="flex font-poppins mx-10 flex-wrap p-4 justify-center">
          {filterCopyRest.map((rest) => {
            return <RestaurantCard key={rest.info.id} restList={rest} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RestaurantContainer;
