import { ShimmerPostList } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <div className="p-22">
      <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={30} />
    </div>
  );
};

export default Shimmer;
