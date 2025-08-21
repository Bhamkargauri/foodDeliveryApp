const MenuItemList = ({ listData }) => {
  //   console.log("data from MenuItemList = ", listData);

  return (
    <div>
      {listData?.card?.card?.itemCards &&
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
            <div key={id} className="bg-amber-300 m-3 p-4 rounded-2xl">
              <h2 className="bg-green-400 mb-2">{name}</h2>
              <span className="dark:text-gray-600 font-semibold">
                ₹{finalPrice / 100 || price / 100 || defaultPrice / 100}
              </span>
              <p className="dark:text-gray-600 font-semibold">
                {ratings?.aggregatedRating?.rating}
              </p>
              <p className="dark:text-gray-600">{description}</p>
              <img
                className="w-25 h-25 rounded-3xl"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  imageId
                }
                alt="food image"
              />
            </div>
          );
        })}

      {listData?.card?.card?.categories &&
        listData?.card?.card?.categories.map((cat) => {
          // console.log("category item = ", cat);
          return (
            <div>
              <h1 className="bg-red-400">
                {cat.title} ({cat?.itemCards?.length})
              </h1>
              {cat.itemCards.map((item) => {
                console.log("items = ", item);

                const {
                  name,
                  defaultPrice,
                  description,
                  finalPrice,
                  price,
                  ratings,
                  imageId
                } = item?.card?.info;

                return (
                  <div className="bg-green-300 m-3 p-4 rounded-2xl">
                    <h1 className="bg-fuchsia-600">{name}</h1>
                    <span className="dark:text-gray-600 font-semibold">
                      ₹ {finalPrice / 100 || price / 100 || defaultPrice / 100}
                    </span>
                    <p className="dark:text-gray-600 font-semibold">
                      {ratings?.aggregatedRating?.rating}
                    </p>
                    <p className="dark:text-gray-600">{description}</p>
                    <img
                      className="w-25 h-25 rounded-3xl"
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                        imageId
                      }
                      alt="food image"
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default MenuItemList;
