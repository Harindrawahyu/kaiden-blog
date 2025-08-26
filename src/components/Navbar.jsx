import { Link, useLocation } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Navbar Is Active
    const isActive = (path) => location.pathname == path;

    return (
        // Start navbar
        <div className="flex h-20 items-center justify-between gap-8 px-6 sm:px-6 bg-[#1C1B1C]">

            <div className="flex cursor-pointer text-2xl align-items-center pl-8 text-[#a0a0a0] font-semibold">
                {/* Title */}
                <Link to="/">
                    <span className="font-bold text-white">Kaiden.
                        <span className="text-[#a0a0a0]">dev</span>
                    </span>
                </Link>
            </div>

            {/* Desktop Items */}
            <div className="hidden font-semibold md:flex gap-8 pr-8 items-center ">
                <Link to="/">
                    <a
                        className={`transition duration-500 px-3 py-2 rounded-full hover:bg-[#3a3a3a] ${isActive("/") ? "text-white" : "text-[#a0a0a0]"}`}
                        href="/"
                    >
                        Home
                    </a>
                </Link>

                <Link to="/About">
                    <a
                        className={`transition duration-500 px-3 py-2 rounded-full hover:bg-[#3a3a3a] ${isActive("/About") ? "text-white" : "text-[#a0a0a0]"}`}
                        href="/About"
                    >
                        About
                    </a>
                </Link>

                <Link to="/Project">
                    <a
                        className={`transition duration-500 px-3 py-2 rounded-full hover:bg-[#3a3a3a] ${isActive("/Project") ? "text-white" : "text-[#a0a0a0]"}`}
                        href="/Project"
                    >
                        Project
                    </a>
                </Link>

                <Link to="/Contact">
                    <a
                        className={`transition duration-500 px-3 py-2 rounded-full hover:bg-[#3a3a3a] ${isActive("/Contact") ? "text-white" : "text-[#a0a0a0]"}`}
                        href="/Contact"
                    >
                        Contact
                    </a>
                </Link>
            </div>

            {/* Button */}
            <button
                className="cursor-pointer md:hidden py-3 px-3 text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu">

                {/* True : False */}
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            {/* Mobile Items */}
            {

                menuOpen && (
                    <div className="fixed font-light top-18 left-0 w-full h-full bg-[#0D0D0D] flex flex-col text-2xl text-left gap-6 py-6 px-6 md:hidden">
                        <Link to="/" onClick={() => setMenuOpen(false)}>
                            <a
                                className={`transition duration-300 hover:text-white ${isActive("/") ? "text-white" : "text-[#a0a0a0]"}`}
                                href="/"
                            >
                                Home
                            </a>
                        </Link>

                        <Link to="/About" onClick={() => setMenuOpen(false)}>
                            <a
                                className={`transition duration-300 hover:text-white ${isActive("/About") ? "text-white" : "text-[#a0a0a0]"}`}
                                href="/About"
                            >
                                About
                            </a>
                        </Link>

                        <Link to="/Project" onClick={() => setMenuOpen(false)}>
                            <a
                                className={`transition duration-300 hover:text-white ${isActive("/Project") ? "text-white" : "text-[#a0a0a0]"}`}
                                href="/Project"
                            >
                                Project
                            </a>
                        </Link>

                        <Link to="/Contact" onClick={() => setMenuOpen(false)}>
                            <a
                                className={`transition duration-300 hover:text-white ${isActive("/Contact") ? "text-white" : "text-[#a0a0a0]"}`}
                                href="/Contact"
                            >
                                Contact
                            </a>
                        </Link>
                    </div>
                )
            }
            {/* End navbar */}
        </div>
    );
}
