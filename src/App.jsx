import './App.css'
import Post from './components/Post';
import Welcome from './components/Welcome';

function App() {
  const posts = [
    { id: 1, 
      title: "Learning React", 
      content: "React is awesome!", 
      likes: 0 },

    { id: 2, 
      title: "Tailwind CSS", 
      content: "Utility-first styling rocks.", 
      likes: 0 },

    { id: 3, 
      title: "JavaScript", 
      content: "Master the basics first.", 
      likes: 0 },
  ];

  return (
    <div className="flex flex-col items-center gap-6 p-8 min-h-screen bg-[#1C1B1C]">
      <h1 className="mt-15 text-2xl font-bold">Blog Posts</h1>
      <Welcome />
      
      {/* Map over posts */}
      {posts.map(post => (
        <Post
          key={post.id}
          title={post.title}
          content={post.content}
          likes={post.likes}
        />
      ))}
    </div>
  );
}

export default App;
