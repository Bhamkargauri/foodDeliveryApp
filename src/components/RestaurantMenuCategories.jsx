import MenuItemList from "./MenuItemList";

const RestaurantMenuCategories = ({ data, accordion, handleAccordion }) => {
  const isItemCategory =
    data.card.card["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

  return (
    <>
      {isItemCategory ? (
        // item category list
        <div className="mt-5 flex justify-center">
          <div className="w-2xl">
            <div
              className="
      bg-gray-200 rounded-xl px-6 py-4 flex items-center justify-between cursor-pointer shadow-md"
              onClick={handleAccordion}
            >
              <h1
                className="
        font-semibold text-xl
        text-gray-800
      "
              >
                {data.card.card.title}
                {data?.card?.card?.itemCards?.length
                  ? ` (${data.card.card.itemCards.length})`
                  : ""}
              </h1>

              <span
                className="
         text-xl font-bold text-gray-700
        transition-transform duration-300"
              >
                {accordion ? "↑" : "↓"}
              </span>
            </div>

            {accordion && (
              <div className="mt-3">
                <MenuItemList listData={data} />
              </div>
            )}
          </div>
        </div>
      ) : (
        // nested menu item category list
        <div className="flex justify-center mt-5">
          <div className="w-2xl bg-gray-200 rounded-xl px-6 py-4 shadow-md">
            <h1 className="font-semibold text-xl text-gray-800">
              {data.card.card.title}
            </h1>

            <div className="mt-3">
              <MenuItemList listData={data} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantMenuCategories;
