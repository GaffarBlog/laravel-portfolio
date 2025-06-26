interface NavbarProps {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;
}
const Navbar = ({ darkMode, setDarkMode, isMenuOpen, setIsMenuOpen }: NavbarProps) => {
    return (
        <nav className={`glass-md fixed z-50 w-full py-2 transition-colors duration-300`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    <div className="flex items-center">
                        <span className="text-3xl font-bold text-primary">Abdul Gaffar</span>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden items-center space-x-8 md:flex">
                        <a
                            href="#home"
                            className={`cursor-pointer font-medium text-gray-700 transition-colors hover:text-indigo-600 dark:text-gray-300`}
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className={`cursor-pointer font-medium text-gray-700 transition-colors hover:text-indigo-600 dark:text-gray-300`}
                        >
                            About
                        </a>
                        <a
                            href="#skills"
                            className={`cursor-pointer font-medium text-gray-700 transition-colors hover:text-indigo-600 dark:text-gray-300`}
                        >
                            Skills
                        </a>
                        <a
                            href="#projects"
                            className={`cursor-pointer font-medium text-gray-700 transition-colors hover:text-indigo-600 dark:text-gray-300`}
                        >
                            Projects
                        </a>
                        <a
                            href="#experience"
                            className={`cursor-pointer font-medium text-gray-700 transition-colors hover:text-indigo-600 dark:text-gray-300`}
                        >
                            Experience
                        </a>
                        <a
                            href="#testimonials"
                            className={`cursor-pointer font-medium text-gray-700 transition-colors hover:text-indigo-600 dark:text-gray-300`}
                        >
                            Testimonials
                        </a>
                        <a
                            href="#contact"
                            className={`cursor-pointer font-medium text-gray-700 transition-colors hover:text-indigo-600 dark:text-gray-300`}
                        >
                            Contact
                        </a>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`text-yellow-400' : 'bg-gray-200 text-gray-700' } !rounded-button cursor-pointer rounded-full p-2 transition-colors dark:bg-gray-700`}
                        >
                            toggle dark
                        </button>
                    </div>
                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="!rounded-button inline-flex cursor-pointer items-center justify-center rounded-md p-2 whitespace-nowrap text-gray-700 hover:bg-gray-100 hover:text-indigo-600 focus:outline-none"
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="bg-white shadow-lg md:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                        <a
                            href="#home"
                            className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                        >
                            About
                        </a>
                        <a
                            href="#skills"
                            className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                        >
                            Skills
                        </a>
                        <a
                            href="#projects"
                            className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                        >
                            Projects
                        </a>
                        <a
                            href="#experience"
                            className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                        >
                            Experience
                        </a>
                        <a
                            href="#testimonials"
                            className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                        >
                            Testimonials
                        </a>
                        <a
                            href="#contact"
                            className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                        >
                            Contact
                        </a>
                        <button className="!rounded-button mt-3 w-full cursor-pointer rounded-md bg-indigo-600 px-4 py-2 text-center font-medium whitespace-nowrap text-white transition-colors hover:bg-indigo-700">
                            Hire Me
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
