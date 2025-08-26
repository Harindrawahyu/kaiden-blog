import Navbar from "../components/Navbar";


export default function HomePage() {
  return (
    <>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="mt-auto">
        <div class="relative h-full w-full bg-white"></div>
      </main>
      <section className="flex flex-col items-center gap-6 p-8 bg-[#1C1B1C]">
        <div className="container ">
          <h1 className="py-10 text-center text-3xl sm:text-5xl text-white font-bold">I'm Kaiden</h1>
        </div>
      </section>


      {/* Right Sidebar */}


    </>
  );
}

