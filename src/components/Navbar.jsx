import { Link } from "react-router";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="flex fixed top-0 left-0 w-full h-20 items-center bg-[#060606]">
            {/* Button */}
            <button className="cursor-pointer px-5">
                <FaBars />
            </button>

            <div className="flex items-center text-[#a0a0a0] font-semibold ">
                {/* Title */}
                <Link to="/">
                    <span className="ml-20 cursor-pointer text-2xl font-bold text-white">Kaiden <span>{" "}</span>
                        <span className="text-[#a0a0a0]">Portfolio</span>
                    </span>
                </Link>

                {/* Items */}
                <div className="flex gap-6 text-[#a0a0a0] font-semibold ml-175">
                    <Link className="hover:text-white transition duration-300"
                        to="/">
                        Home
                    </Link >

                    <Link className="hover:text-white transition duration-300"
                        to="/About">
                        About
                    </Link >

                    <Link className="hover:text-white transition duration-300"
                        to="/Projects">
                        Projects
                    </Link >

                    <Link className="hover:text-white transition duration-300"
                        to="/Contact">
                        Contact
                    </Link >
                </div>
            </div>
        </nav>

    );
}
