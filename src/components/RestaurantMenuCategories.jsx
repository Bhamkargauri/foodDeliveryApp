import { useState } from "react";
import MenuItemList from "./MenuItemList";

const RestaurantMenuCategories = ({ data }) => {
  // console.log("data Restaurant Menu Category = ", data);
  const [accordion, setAccordion] = useState(false);

  const handleAccordion = () => {
    setAccordion(!accordion);
  };

  return (
    <>
      <div
        className="
      flex justify-center items-center cursor-pointer 
       mt-5
    "
        onClick={handleAccordion}
      >
        <h1
          className="
        font-semibold text-xl w-2xl 
        bg-gray-300 px-4 py-2
      "
        >
          {/* {data.card.card.title}(
          {data?.card?.card?.itemCards?.length ||
            data?.card?.card?.categories?.length}
          ) */}

          {data.card.card.title}
          {data?.card?.card?.itemCards?.length
            ? ` (${data.card.card.itemCards.length})`
            : ""}
        </h1>

        <span
          className="
         text-xl font-bold text-gray-700
        bg-gray-300 px-4 py-2
        transition-transform duration-300
        flex items-center justify-center
      "
        >
          {accordion ? "↑" : "↓"}
        </span>
      </div>

      {accordion && <MenuItemList listData={data} />}
    </>
  );
};

export default RestaurantMenuCategories;
