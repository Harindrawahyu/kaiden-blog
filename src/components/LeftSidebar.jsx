import { FaHome, FaBookOpen, FaUser, FaRegChartBar } from "react-icons/fa";

export default function LeftSidebar() {
    return (
        <aside className="fixed top-20 left-0 w-64 bg-[#060606] min-h-screen flex flex-col px-4 py-6">
            {/* Main navigation */}
            <nav>
                <ul>
                    <li>
                        <span>Resume</span>
                    </li>
                </ul>
            </nav>

        </aside>
    );
}