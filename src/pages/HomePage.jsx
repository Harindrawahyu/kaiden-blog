import Post from "../components/Post"
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";


export default function HomePage() {
  return (
    <>

      {/* Navbar */}
      <Navbar />

      {/* Left Sidebar */}
      {/* <LeftSidebar /> */}


      {/* Main Content */}
      <div className="flex flex-col items-center gap-6 p-8 bg-[#1C1B1C]">
        <h1 className="mt-20 text-2xl text-white font-bold">Hi I'm Kaiden</h1>
      </div>x

      {/* Right Sidebar */}


    </>
  );
}

