import { useState } from 'react';

// Main App component
const App = () => {
    // State to manage the active page content
    const [activePage, setActivePage] = useState('projects');

    // A function to handle navigation clicks and update the active page
    const handleNavClick = (page) => {
        setActivePage(page);
    };

    // A function to render the main content section based on the activePage state
    const renderMainContent = () => {
        switch (activePage) {
            case 'projects':
                return (
                    <>
                        <h2 className="text-xl font-bold text-gray-100 mb-4">Projects</h2>
                        {/* Project Filter/Category Menu */}
                        <div className="flex flex-wrap gap-2 mb-6 text-sm">
                            <button className="bg-yellow-400 text-zinc-900 rounded-full px-4 py-1 font-semibold">All</button>
                            <button className="bg-zinc-700 text-gray-300 rounded-full px-4 py-1 hover:bg-zinc-600 transition-colors">Web Development</button>
                            <button className="bg-zinc-700 text-gray-300 rounded-full px-4 py-1 hover:bg-zinc-600 transition-colors">Mobile Apps</button>
                            <button className="bg-zinc-700 text-gray-300 rounded-full px-4 py-1 hover:bg-zinc-600 transition-colors">UX/UI</button>
                            <button className="bg-zinc-700 text-gray-300 rounded-full px-4 py-1 hover:bg-zinc-600 transition-colors">Writing</button>
                        </div>

                        {/* Project List */}
                        <div className="space-y-6">
                            {/* Project Card 1 */}
                            <div className="bg-zinc-800 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                <div className="w-full sm:w-1/3 h-48 bg-zinc-700 rounded-xl flex-shrink-0"></div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-2">Project Title 1</h3>
                                    <p className="text-sm text-gray-400 mb-4">Brief description of the project goes here. Tentutatct context tbbtition getbrance.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="bg-zinc-700 text-gray-400 text-xs rounded-full px-3 py-1">Laravel</span>
                                        <span className="bg-zinc-700 text-gray-400 text-xs rounded-full px-3 py-1">React</span>
                                        <span className="bg-zinc-700 text-gray-400 text-xs rounded-full px-3 py-1">Flutter</span>
                                    </div>
                                    <a href="#" className="inline-block bg-yellow-400 text-zinc-900 font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors">View Project</a>
                                </div>
                            </div>
                            {/* Project Card 2 */}
                            <div className="bg-zinc-800 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                <div className="w-full sm:w-1/3 h-48 bg-zinc-700 rounded-xl flex-shrink-0"></div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-2">Project Title 2</h3>
                                    <p className="text-sm text-gray-400 mb-4">Brief description of the project goes here. Laravel, React performance.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="bg-zinc-700 text-gray-400 text-xs rounded-full px-3 py-1">Laravel</span>
                                        <span className="bg-zinc-700 text-gray-400 text-xs rounded-full px-3 py-1">React</span>
                                    </div>
                                    <a href="#" className="inline-block bg-yellow-400 text-zinc-900 font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors">View Project</a>
                                </div>
                            </div>
                        </div>
                    </>
                );
            case 'blog':
                return (
                    <>
                        <h2 className="text-xl font-bold text-gray-100 mb-4">Blog</h2>
                        <div className="space-y-6">
                            {/* Blog Post 1 */}
                            <div className="bg-zinc-800 p-6 rounded-2xl">
                                <h3 className="text-lg font-semibold text-gray-100 mb-2">My Journey into Web Development</h3>
                                <p className="text-sm text-gray-400 mb-4">A look at my personal journey and the lessons I've learned along the way.</p>
                            </div>
                            {/* Blog Post 2 */}
                            <div className="bg-zinc-800 p-6 rounded-2xl">
                                <h3 className="text-lg font-semibold text-gray-100 mb-2">The Importance of Clean Code</h3>
                                <p className="text-sm text-gray-400 mb-4">Why writing maintainable and clean code is crucial for long-term projects.</p>
                            </div>
                        </div>
                    </>
                );
            case 'about':
                return (
                    <>
                        <h2 className="text-xl font-bold text-gray-100 mb-4">About Me</h2>
                        <div className="bg-zinc-800 p-6 rounded-2xl">
                            <p className="text-gray-300 leading-relaxed">
                                I'm Kaiden, a passionate full-stack developer and tech enthusiast. I love building intuitive and user-friendly web applications, and I'm always looking for new challenges. With experience in various technologies, I am ready to help bring your ideas to life.
                            </p>
                        </div>
                    </>
                );
            case 'contact':
                return (
                    <>
                        <h2 className="text-xl font-bold text-gray-100 mb-4">Contact</h2>
                        <div className="bg-zinc-800 p-6 rounded-2xl">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                    <input type="text" id="name" name="name" className="w-full p-3 rounded-lg bg-zinc-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                    <input type="email" id="email" name="email" className="w-full p-3 rounded-lg bg-zinc-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                    <textarea id="message" name="message" rows="4" className="w-full p-3 rounded-lg bg-zinc-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
                                </div>
                                <button type="submit" className="w-full py-3 px-6 bg-yellow-400 text-zinc-900 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">Send Message</button>
                            </form>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-zinc-900 text-gray-300 min-h-screen font-sans">
            {/* Header Section */}
            <header className="bg-zinc-800 py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center sticky top-0 z-10">
                <h1 className="text-2xl font-bold text-gray-100 mb-4 md:mb-0">Kaiden.dev</h1>
                <nav className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-sm md:text-base">
                    <a href="#" onClick={() => handleNavClick('projects')} className={`text-gray-300 hover:text-yellow-400 transition-colors ${activePage === 'projects' ? 'font-bold' : ''}`}>Projects</a>
                    <a href="#" onClick={() => handleNavClick('blog')} className={`text-gray-300 hover:text-yellow-400 transition-colors ${activePage === 'blog' ? 'font-bold' : ''}`}>Blog</a>
                    <a href="#" onClick={() => handleNavClick('about')} className={`text-gray-300 hover:text-yellow-400 transition-colors ${activePage === 'about' ? 'font-bold' : ''}`}>About</a>
                    <a href="#" onClick={() => handleNavClick('contact')} className={`text-gray-300 hover:text-yellow-400 transition-colors ${activePage === 'contact' ? 'font-bold' : ''}`}>Contact</a>
                    <div className="flex items-center space-x-2">
                        <input type="text" placeholder="Search" className="bg-zinc-700 text-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                        <button className="bg-yellow-400 text-zinc-900 font-semibold rounded-full px-4 py-2 text-sm hover:bg-yellow-500 transition-colors">Hire Me</button>
                    </div>
                </nav>
            </header>

            {/* Main Content Grid Container */}
            <main className="container mx-auto p-4 md:p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Profile Section */}
                        <section className="bg-zinc-800 p-6 rounded-2xl flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-zinc-700 rounded-full mb-4"></div>
                            <h2 className="text-xl font-bold text-gray-100">Kaiden</h2>
                            <p className="text-sm text-gray-400">Fullstack_Developer | Tech Enthusiast</p>
                            <nav className="mt-6 flex flex-col items-start w-full text-left space-y-2">
                                <button onClick={() => handleNavClick('projects')} className={`text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2 ${activePage === 'projects' ? 'font-bold' : ''}`}>Projects</button>
                                <button onClick={() => handleNavClick('blog')} className={`text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2 ${activePage === 'blog' ? 'font-bold' : ''}`}>Blog</button>
                                <button className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2">Skills</button>
                                <button className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2">Resume</button>
                            </nav>
                            <div className="mt-6 w-full">
                                <h3 className="text-sm font-semibold text-gray-400 mb-2">Follow Me</h3>
                                <div className="flex justify-center space-x-4">
                                    {/* Social Media Icons (placeholders) */}
                                    <a href="#" className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center text-gray-300 hover:text-yellow-400 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                    </a>
                                    <a href="#" className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center text-gray-300 hover:text-yellow-400 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c-.6.2-2.8-.7-4-.7-1.3 0-2 1-3.2 1.5C8 12 5 13 4 14.5c-.8 1.1-1.3 2.5-1.5 4l.8-.2c1-1 2.5-1.3 4-.7s2 1.3 3 2.5a6 6 0 0 0 4 2c2 0 4-1 5.5-2.5 1.5-1.5 2.5-3.5 2.5-5.5 0-3-2-5-4-5zm-7 2s-1-.3-2 0c-1.3.3-2.3 1-3.5 1.8-1.5.8-2.5 2-3.5 3.2-1.2 1.5-1.7 2.8-2.2 4.2.3-.5 1-1.2 2-2.2 1.2-1.3 2.8-2 4.5-2.2 1.7-.2 3.5-.2 5.5.2 2 .5 3.5 1.5 4.5 3 .5.8.8 1.8.8 3 0 1-.3 2.2-.8 3.2-.6 1.3-1.4 2.5-2.5 3.5-1 1-2.2 1.8-3.5 2.2-1.3.4-2.8.5-4.5.3-2-.3-3.8-1-5.5-2.2-1.8-1.5-3-3.5-3.5-5.5-1-2.5-.2-5 1.5-7.5l.2-.2c1-1 2.5-2 4-2.5C13 5.5 14 5.5 15 5.5z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Main Content Section */}
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            {renderMainContent()}
                        </section>
                    </div>

                </div>
            </main>

            {/* Footer */}
            <footer className="bg-zinc-800 text-center py-6 mt-12">
                <p className="text-sm text-gray-400">&copy; 2024 Kaiden.dev. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
