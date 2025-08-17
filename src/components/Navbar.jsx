import { href, Link } from "react-router";
import { FaBars } from "react-icons/fa";

function Navbar() {
    return (
        <nav>
            <div className="flex fixed top-0 left-0 w-full h-20 items-center bg-[#060606]">
                <span className="ml-20 cursor-pointer text-2xl font-bold">Kaiden <span>{" "}</span>
                    <span className="text-[#a0a0a0]">Portfolio</span>
                </span>
            </div>
        </nav>
    );
}

export default Navbar;