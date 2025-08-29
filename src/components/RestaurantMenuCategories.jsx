import MenuItemList from "./MenuItemList";

const RestaurantMenuCategories = ({ data }) => {
  // console.log("data Restaurant Menu Category = ", data);
  return (
    <>
      <div className=" flex justify-center">
        <h1 className="font-semibold text-xl w-2xl bg-gray-300 mt-5">
          {data.card.card.title} (
          {data?.card?.card?.itemCards?.length ||
            data?.card?.card?.categories?.length}
          )
        </h1>
      </div>
      <MenuItemList listData={data} />
    </>
  );
};

export default RestaurantMenuCategories;
