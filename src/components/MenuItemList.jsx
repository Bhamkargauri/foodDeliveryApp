import { useState } from "react";

const MenuItemList = ({ listData }) => {
    console.log("data from MenuItemList = ", listData);
  const [toggle, setToggle] = useState(null);

  const handleToggle = (index) => {
    if (toggle === index) {
      return setToggle(null);
    }
    setToggle(index);
  };

  //
  return (
    <div>
      {
        
        listData?.card?.card?.itemCards &&
        
        listData?.card?.card?.itemCards.map((item) => {
          
          const {
            id,
            name,
            finalPrice,
            price,
            defaultPrice,
            description,
            imageId,
            ratings,
          } = item?.card?.info;
          // console.log("item card = ", item);
          return (
            <div className="flex justify-center" key={id}>
              <div
                key={id}
                className="bg-amber-300 m-3 p-4 rounded-2xl w-2xl flex"
              >
                <div className="w-5/6">
                  <h2 className="text-pink-500 font-bold mb-2">{name}</h2>
                  <span className="dark:text-gray-600 font-semibold">
                    ₹{finalPrice / 100 || price / 100 || defaultPrice / 100}
                  </span>
                  <p className="dark:text-gray-600 font-semibold">
                    {ratings?.aggregatedRating?.rating}
                  </p>
                  <p className="dark:text-gray-600 italic text-sm">
                    {description}
                  </p>
                </div>
                <div className="w-1/6 m-4">
                  <img
                    className="w-25 h-26 rounded-3xl"
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                      imageId
                    }
                    alt="food image"
                  />
                  <button className="bg-gray-400 p-1 rounded-xl ml-4 mt-1 text-sm cursor-pointer">
                    Add Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}

      {listData?.card?.card?.categories && 
        listData?.card?.card?.categories.map((cat, index) => {
          // console.log("category item = ", cat);
          return (
            <div key={index}>
              <div
                className="flex justify-center mt-2 items-center px-3 cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h1 className="bg-red-400 w-2xl text-xm px-4 py-2">
                  {cat.title} ({cat?.itemCards?.length})
                </h1>
                <span className="bg-red-400  text-xm font-bold text-gray-700 px-4 py-2 transition-transform duration-300 flex items-center justify-center">
                  {toggle === index ? "↑" : "↓"}
                </span>
              </div>

              {toggle === index && (
                <div className="mt-2">
                  {cat.itemCards.map((item) => {
                    // console.log("items = ", item);

                    const {
                      id,
                      name,
                      defaultPrice,
                      description,
                      finalPrice,
                      price,
                      ratings,
                      imageId,
                    } = item?.card?.info;

                    return (
                      <div className="flex justify-center" key={id}>
                        <div className="bg-green-300 m-3 p-4 rounded-2xl w-2xl flex">
                          <div className="w-5/6">
                            <h1 className="text-pink-500 font-bold">{name}</h1>
                            <span className="dark:text-gray-600 font-semibold">
                              ₹{" "}
                              {finalPrice / 100 ||
                                price / 100 ||
                                defaultPrice / 100}
                            </span>
                            <p className="dark:text-gray-600 font-semibold">
                              {ratings?.aggregatedRating?.rating}
                            </p>
                            <p className="dark:text-gray-600 italic text-sm">
                              {description}
                            </p>
                          </div>
                          <div className="w-1/6 m-4">
                            <img
                              className="w-25 h-26 rounded-3xl"
                              src={
                                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                                imageId
                              }
                              alt="food image"
                            />
                            <button className="bg-gray-400 p-1 rounded-xl ml-4 mt-1 text-sm cursor-pointer">
                              Add Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default MenuItemList;
