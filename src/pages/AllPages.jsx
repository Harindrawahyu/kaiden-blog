import { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Monitor, Code, Smartphone, Camera, X } from 'lucide-react';

// Main application component
const App = () => {
    // State to manage the active navigation item
    const [activeNav, setActiveNav] = useState('About');
    // State to manage the visibility of the contact modal
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    // A simple, placeholder function to handle navigation clicks
    const handleNavClick = (navItem) => {
        if (navItem === 'Contact') {
            setIsContactModalOpen(true);
        } else {
            setActiveNav(navItem);
        }
    };

    // A function to render the correct section based on the activeNav state
    const renderSection = () => {
        switch (activeNav) {
            case 'About':
                return (
                    <>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">About Me</h2>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            I'm Richard, a Creative Director and UX/UI Designer from Sydney, Australia, working in web development. I enjoy turning complex problems into simple, beautiful, and intuitive designs. My job is to build your website so that it is functional and user-friendly, but at the same time attractive. Moreover, I add a personal touch to your product and make sure that it is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web designs for many famous brand companies.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">What I'm Doing</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Web Design Card */}
                            <div className="bg-zinc-700 p-6 rounded-2xl flex items-start space-x-4">
                                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-zinc-900">
                                    <Monitor className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-100 mb-1">Web Design</h3>
                                    <p className="text-sm text-gray-400">The most modern and high-quality design made on a professional level.</p>
                                </div>
                            </div>

                            {/* Web Development Card */}
                            <div className="bg-zinc-700 p-6 rounded-2xl flex items-start space-x-4">
                                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-zinc-900">
                                    <Code className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-100 mb-1">Web Development</h3>
                                    <p className="text-sm text-gray-400">High-quality development of sites at the professional level.</p>
                                </div>
                            </div>

                            {/* Mobile Apps Card */}
                            <div className="bg-zinc-700 p-6 rounded-2xl flex items-start space-x-4">
                                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-zinc-900">
                                    <Smartphone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-100 mb-1">Mobile Apps</h3>
                                    <p className="text-sm text-gray-400">Professional development of applications for iOS and Android.</p>
                                </div>
                            </div>

                            {/* Photography Card */}
                            <div className="bg-zinc-700 p-6 rounded-2xl flex items-start space-x-4">
                                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-zinc-900">
                                    <Camera className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-100 mb-1">Photography</h3>
                                    <p className="text-sm text-gray-400">I can create stunning visual content for your personal or business brand.</p>
                                </div>
                            </div>
                        </div>
                    </>
                );
            case 'Resume':
                return (
                    <>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">Resume</h2>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            I'm a seasoned Web Developer with 10+ years of experience in crafting beautiful and functional websites.
                        </p>

                        <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-4">Experience</h3>
                        <div className="space-y-6">
                            <div className="bg-zinc-700 p-6 rounded-2xl">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="text-lg font-semibold text-gray-100">Senior Web Developer</h4>
                                    <span className="text-sm text-yellow-400 bg-zinc-600 px-3 py-1 rounded-full">2018 - Present</span>
                                </div>
                                <p className="text-gray-400 mb-2">Google - London, UK</p>
                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                    <li>Developed and maintained client-side and server-side logic for web applications.</li>
                                    <li>Collaborated with a team of designers to create user-friendly and responsive interfaces.</li>
                                    <li>Improved website performance and SEO ranking by 30%.</li>
                                </ul>
                            </div>
                            <div className="bg-zinc-700 p-6 rounded-2xl">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="text-lg font-semibold text-gray-100">Junior Web Developer</h4>
                                    <span className="text-sm text-yellow-400 bg-zinc-600 px-3 py-1 rounded-full">2015 - 2018</span>
                                </div>
                                <p className="text-gray-400 mb-2">Apple - Sydney, Australia</p>
                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                    <li>Assisted in the development and maintenance of corporate websites.</li>
                                    <li>Wrote clean, well-documented, and efficient code.</li>
                                    <li>Participated in code reviews and team meetings.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-gray-100 mt-8 mb-4">Education</h3>
                        <div className="space-y-6">
                            <div className="bg-zinc-700 p-6 rounded-2xl">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="text-lg font-semibold text-gray-100">Bachelor of Science in Computer Science</h4>
                                    <span className="text-sm text-yellow-400 bg-zinc-600 px-3 py-1 rounded-full">2011 - 2015</span>
                                </div>
                                <p className="text-gray-400">University of Sydney</p>
                            </div>
                        </div>
                    </>
                );
            case 'Portfolio':
                return (
                    <>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">Portfolio</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Project 1 */}
                            <div className="bg-zinc-700 p-4 rounded-2xl text-center">
                                <img src="https://placehold.co/400x300/FACC15/000?text=Project+1" alt="Project 1" className="rounded-xl mb-4 w-full h-auto" />
                                <h3 className="text-lg font-semibold text-gray-100 mb-1">E-commerce Website</h3>
                                <p className="text-sm text-gray-400">A modern and responsive e-commerce platform.</p>
                            </div>
                            {/* Project 2 */}
                            <div className="bg-zinc-700 p-4 rounded-2xl text-center">
                                <img src="https://placehold.co/400x300/FACC15/000?text=Project+2" alt="Project 2" className="rounded-xl mb-4 w-full h-auto" />
                                <h3 className="text-lg font-semibold text-gray-100 mb-1">Social Media App</h3>
                                <p className="text-sm text-gray-400">A mobile-first social networking application.</p>
                            </div>
                            {/* Project 3 */}
                            <div className="bg-zinc-700 p-4 rounded-2xl text-center">
                                <img src="https://placehold.co/400x300/FACC15/000?text=Project+3" alt="Project 3" className="rounded-xl mb-4 w-full h-auto" />
                                <h3 className="text-lg font-semibold text-gray-100 mb-1">SaaS Dashboard</h3>
                                <p className="text-sm text-gray-400">A clean and intuitive dashboard for a SaaS product.</p>
                            </div>
                            {/* Project 4 */}
                            <div className="bg-zinc-700 p-4 rounded-2xl text-center">
                                <img src="https://placehold.co/400x300/FACC15/000?text=Project+4" alt="Project 4" className="rounded-xl mb-4 w-full h-auto" />
                                <h3 className="text-lg font-semibold text-gray-100 mb-1">Landing Page</h3>
                                <p className="text-sm text-gray-400">A high-conversion landing page with modern design.</p>
                            </div>
                            {/* Project 5 */}
                            <div className="bg-zinc-700 p-4 rounded-2xl text-center">
                                <img src="https://placehold.co/400x300/FACC15/000?text=Project+5" alt="Project 5" className="rounded-xl mb-4 w-full h-auto" />
                                <h3 className="text-lg font-semibold text-gray-100 mb-1">Blog Platform</h3>
                                <p className="text-sm text-gray-400">A content management system for bloggers.</p>
                            </div>
                            {/* Project 6 */}
                            <div className="bg-zinc-700 p-4 rounded-2xl text-center">
                                <img src="https://placehold.co/400x300/FACC15/000?text=Project+6" alt="Project 6" className="rounded-xl mb-4 w-full h-auto" />
                                <h3 className="text-lg font-semibold text-gray-100 mb-1">Game Website</h3>
                                <p className="text-sm text-gray-400">A promotional website for a new indie game.</p>
                            </div>
                        </div>
                    </>
                );
            case 'Blog':
                return (
                    <>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">Blog</h2>
                        <div className="space-y-6">
                            {/* Blog Post 1 */}
                            <div className="bg-zinc-700 p-6 rounded-2xl">
                                <h3 className="text-lg font-semibold text-gray-100 mb-1">The Future of Web Development</h3>
                                <p className="text-sm text-gray-400 mb-2">June 20, 2024</p>
                                <p className="text-gray-300">
                                    In this post, we explore the latest trends and technologies shaping the future of web development. From AI-powered tools to advanced frameworks, the landscape is constantly evolving...
                                </p>
                            </div>
                            {/* Blog Post 2 */}
                            <div className="bg-zinc-700 p-6 rounded-2xl">
                                <h3 className="text-lg font-semibold text-gray-100 mb-1">Building a Portfolio with React</h3>
                                <p className="text-sm text-gray-400 mb-2">June 10, 2024</p>
                                <p className="text-gray-300">
                                    A step-by-step guide to creating a stunning portfolio website using React and Tailwind CSS. Learn how to structure your components and showcase your projects effectively...
                                </p>
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        // Main Container
        <div className="container mx-auto p-4 md:p-8 lg:p-12 min-h-screen flex items-center justify-center bg-zinc-900 text-gray-300 font-sans">
            {/* Card-like main wrapper */}
            <div className="bg-zinc-800 p-6 md:p-10 rounded-3xl shadow-lg w-full max-w-7xl flex flex-col lg:flex-row gap-8">

                {/* Left Sidebar Section */}
                <div className="bg-zinc-700 p-6 rounded-2xl w-full lg:w-1/3 flex flex-col items-center text-center">
                    {/* Profile Avatar */}
                    <div className="w-28 h-28 rounded-full bg-zinc-600 flex items-center justify-center mb-4">
                        {/* Placeholder for image, could be an emoji or an actual picture */}
                        <span className="text-6xl" role="img" aria-label="user avatar">🧑‍💻</span>
                    </div>
                    {/* User Info */}
                    <h1 className="text-xl md:text-2xl font-semibold text-gray-100 mb-1">Richard Hamrick</h1>
                    <p className="text-sm text-gray-400 mb-6">Web Developer</p>

                    {/* Contact Info Section */}
                    <div className="bg-zinc-600 p-6 rounded-xl w-full text-left space-y-4">
                        {/* Email */}
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-zinc-900">
                                <Mail className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">EMAIL</p>
                                <p className="text-sm md:text-base font-medium text-gray-100">richard@example.com</p>
                            </div>
                        </div>
                        {/* Phone */}
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-zinc-900">
                                <Phone className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">PHONE</p>
                                <p className="text-sm md:text-base font-medium text-gray-100">+1 (212) 555-1234</p>
                            </div>
                        </div>
                        {/* Location */}
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-zinc-900">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">LOCATION</p>
                                <p className="text-sm md:text-base font-medium text-gray-100">London, UK</p>
                            </div>
                        </div>
                        {/* Birthday */}
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-zinc-900">
                                <Calendar className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">BIRTHDAY</p>
                                <p className="text-sm md:text-base font-medium text-gray-100">June 23, 1982</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="flex-1 space-y-8">
                    {/* Navigation */}
                    <nav className="flex justify-end items-center mb-6">
                        <ul className="flex space-x-4 md:space-x-8 text-sm md:text-base font-medium text-gray-400">
                            <li>
                                <a href="#"
                                    onClick={() => handleNavClick('About')}
                                    className={`px-4 py-2 rounded-full transition-colors ${activeNav === 'About' ? 'bg-zinc-700 text-yellow-400' : 'hover:bg-zinc-700 hover:text-gray-100'}`}>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    onClick={() => handleNavClick('Resume')}
                                    className={`px-4 py-2 rounded-full transition-colors ${activeNav === 'Resume' ? 'bg-zinc-700 text-yellow-400' : 'hover:bg-zinc-700 hover:text-gray-100'}`}>
                                    Resume
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    onClick={() => handleNavClick('Portfolio')}
                                    className={`px-4 py-2 rounded-full transition-colors ${activeNav === 'Portfolio' ? 'bg-zinc-700 text-yellow-400' : 'hover:bg-zinc-700 hover:text-gray-100'}`}>
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    onClick={() => handleNavClick('Blog')}
                                    className={`px-4 py-2 rounded-full transition-colors ${activeNav === 'Blog' ? 'bg-zinc-700 text-yellow-400' : 'hover:bg-zinc-700 hover:text-gray-100'}`}>
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    onClick={() => handleNavClick('Contact')}
                                    className="px-4 py-2 rounded-full transition-colors hover:bg-zinc-700 hover:text-gray-100">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Render the selected section */}
                    {renderSection()}
                </div>

            </div>

            {/* Contact Modal */}
            {isContactModalOpen && (
                <div className="fixed inset-0 bg-zinc-950 bg-opacity-70 flex items-center justify-center p-4 z-50">
                    <div className="bg-zinc-800 p-6 md:p-8 rounded-3xl shadow-2xl w-full max-w-md relative">
                        <button
                            onClick={() => setIsContactModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-100 transition-colors"
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">Contact</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                <input type="text" id="name" name="name" className="w-full p-3 rounded-lg bg-zinc-600 text-gray-100 border border-zinc-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-colors" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                <input type="email" id="email" name="email" className="w-full p-3 rounded-lg bg-zinc-600 text-gray-100 border border-zinc-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-colors" placeholder="Your Email" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                <textarea id="message" name="message" rows="4" className="w-full p-3 rounded-lg bg-zinc-600 text-gray-100 border border-zinc-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-colors" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="w-full py-3 px-6 bg-yellow-400 text-zinc-900 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">Send Message</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
