import LikeButton from "./LikeButton";

function Post({ title, content, likes }) {
  return (
    <div className="p-4 rounded shadow w-80 bg-[#ffffff] ">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p className="mb-4">{content}</p>
      
      {/* Pass props to LikeButton */}
      <LikeButton initialLikesCount={likes} />
    </div>
  );
}

export default Post;