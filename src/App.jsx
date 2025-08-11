import './App.css'
import Post from './components/Post';
import Welcome from './components/Welcome';
import useLike from './hooks/useLike';

function App() {
  // const { count, handleIncrement, handleDecrement, handleResetCounter } = useCounter();
const {isLiked, handleLikedCount, handleLikedToggle, handleUnlikedCount} = useLike();

  const posts = [
    { id: 1, 
      title: "Learning React", 
      content: "React is awesome!", 
      likes: 3 },

    { id: 2, 
      title: "Tailwind CSS", 
      content: "Utility-first styling rocks.", 
      likes: 0 },

    { id: 3, 
      title: "JavaScript", 
      content: "Master the basics first.", 
      likes: 5 },
  ];

  return (
    
    <div className="flex flex-col items-center gap-6 p-8 min-h-screen">
      <h1 className="mt-15 text-2xl font-bold">Social Media Feed</h1>
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
