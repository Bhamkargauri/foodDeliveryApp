import MenuItemList from "./MenuItemList";

const RestaurantMenuCategories = ({ data }) => {
  // console.log("data Restaurant Menu Category = ", data);
  return (
    <div>
      <h1 className="font-semibold text-xl bg-gray-300 mt-5">
        {data.card.card.title} (
        {data?.card?.card?.itemCards?.length ||
          data?.card?.card?.categories?.length}
        )
      </h1>
      <MenuItemList listData={data} />
    </div>
  );
};

export default RestaurantMenuCategories;
