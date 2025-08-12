import useLike from "../hooks/useLike";

function LikeButton({initialLike, initialLikesCount}) {
const {isLike, isLikeCount, handleLikeToggle } = useLike(initialLike, initialLikesCount)


return (
<>
    <button onClick={handleLikeToggle} 
    className="px-3 py-3 flex cursor-pointer bg-transparent rounded-4xl text-white hover:bg-[#07111d]">
      <i
        className={`fa ${isLike ? "fa-heart" : "fa-heart-o"} text-white`}
        aria-hidden="true"
      ></i>
    </button>
    <span className="ml-2 font-semibold"> {isLikeCount} likes</span>
</>
    )
};
export default LikeButton;