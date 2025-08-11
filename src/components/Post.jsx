import LikeButton from "./LikeButton";

function Post({ title, content, likes }) {
  return (
    <div className="p-4 rounded shadow w-80 bg-[#020617]">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p className="mb-4">{content}</p>
      
      {/* Pass props to LikeButton */}
      <LikeButton initialCount={likes} />
    </div>
  );
}

export default Post;