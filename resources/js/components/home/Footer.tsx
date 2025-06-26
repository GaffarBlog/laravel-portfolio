const Footer = () => {
    return (
        <footer className="bg-gray-900/90 py-12 text-white backdrop-blur-md dark:bg-gray-900/70">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="mb-4 text-2xl font-bold">John Doe</h3>
                        <p className="mb-4 max-w-md text-gray-400">
                            Creating beautiful digital experiences with clean code and creative solutions. Let's build something amazing together!
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="cursor-pointer text-gray-400 transition-colors hover:text-white">
                                <i className="fab fa-github text-xl"></i>
                            </a>
                            <a href="#" className="cursor-pointer text-gray-400 transition-colors hover:text-white">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="#" className="cursor-pointer text-gray-400 transition-colors hover:text-white">
                                <i className="fab fa-twitter text-xl"></i>
                            </a>
                            <a href="#" className="cursor-pointer text-gray-400 transition-colors hover:text-white">
                                <i className="fab fa-dribbble text-xl"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="cursor-pointer text-gray-400 transition-colors hover:text-white">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="cursor-pointer text-gray-400 transition-colors hover:text-white">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="cursor-pointer text-gray-400 transition-colors hover:text-white">
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="cursor-pointer text-gray-400 transition-colors hover:text-white">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="cursor-pointer text-gray-400 transition-colors hover:text-white">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Contact</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <i className="fas fa-envelope mr-2 text-indigo-400"></i>
                                <a href="mailto:hello@johndoe.com" className="cursor-pointer text-gray-400 transition-colors hover:text-white">
                                    hello@johndoe.com
                                </a>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-phone-alt mr-2 text-indigo-400"></i>
                                <a href="tel:+11234567890" className="cursor-pointer text-gray-400 transition-colors hover:text-white">
                                    +1 (123) 456-7890
                                </a>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-map-marker-alt mr-2 text-indigo-400"></i>
                                <span className="text-gray-400">San Francisco, California</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
                    <p className="text-gray-400">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
                    <div className="mt-4 md:mt-0">
                        <a href="#" className="mr-4 cursor-pointer text-gray-400 transition-colors hover:text-white">
                            Privacy Policy
                        </a>
                        <a href="#" className="cursor-pointer text-gray-400 transition-colors hover:text-white">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
