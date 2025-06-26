import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import Experience from '@/components/home/Experience';
import Footer from '@/components/home/Footer';
import { Hero } from '@/components/home/Hero';
import Navbar from '@/components/home/Navbar';
import Projects from '@/components/home/Projects';
import Summary from '@/components/home/Summary';
import Testimonials from '@/components/home/Testimonials';
import { useEffect, useState } from 'react';

const Home: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);
    return (
        <main className={`bg-body relative min-h-screen transition-colors duration-300`}>
            <div className="pointer-events-none absolute inset-0 opacity-[0.15]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('/assets/bg-pattern3.png')",
                    }}
                ></div>
            </div>

            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Hero />
            <Summary />
            <About />
            <Projects />
            <Experience />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    );
};

export default Home;
