import Post from "../components/Post"
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";


function HomePage() {
  const posts = [
    {
      id: 1,
      title: "Learning React",
      content: "React is awesome!",
      likes: 0
    },

    {
      id: 2,
      title: "Tailwind CSS",
      content: "Utility-first styling rocks.",
      likes: 0
    },

    {
      id: 3,
      title: "JavaScript",
      content: "Master the basics first.",
      likes: 0
    },
  ];

  return (
    <>

      {/* Navbar */}
      <Navbar />
      {/* <div className="flex-1">
          <LeftSidebar />
        </div> */}


      {/* Main Content */}
      <div className="flex flex-col items-center gap-6 p-8 bg-[#1C1B1C]">
        <h1 className="mt-20 text-2xl font-bold">Hello World!</h1>
        {posts.map(post => (
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            likes={post.likes}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
