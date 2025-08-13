import LikeButton from "./LikeButton";

function Post({ title, content, likes }) {
  
  return (
    <div className="p-4 rounded-xl shadow w-80 cursor-pointer bg-[#161617] hover:bg-[#4b4b4b]">
      <h2 className="font-bold text-lg mb-2 text-[#ffffff]">{title}</h2>
      <p className="mb-4 text-[#ffffff]">{content}</p>
      
      {/* Pass props to LikeButton */}
      <LikeButton initialLikesCount={likes} />
    </div>
  );
}

export default Post;