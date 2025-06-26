import { motion } from 'framer-motion';
import { Button } from '../ui/button';
// images
export const Hero = () => {
    return (
        <section id="home" className="relative flex min-h-[80vh] items-center pt-16">
            <div className="z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                    <div className="">
                        <h1 className="text-md mb-10 font-bold">
                            Hello, I'm <span className="text-primary">Abdul Gaffar</span>
                        </h1>
                        <div className="mb-6 text-4xl font-medium md:text-5xl">
                            <span className="text-primary">Full-Stack Developer</span> <br />
                            Turning Ideas into Reality
                        </div>
                        <p className="md:text-md mb-8 max-w-lg text-lg text-slate-500">
                            From clean, easy-to-use designs to strong and reliable backends — I build complete websites that work smoothly and deliver
                            real results.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg">My Projects</Button>
                            <Button variant={'outline'} size="lg">
                                Download Resume
                            </Button>
                        </div>
                    </div>
                    <div className="grid place-items-center">
                        <div className="grid w-2/3 grid-cols-2 gap-2">
                            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 2, repeat: Infinity }} className="glass-sm">
                                <img src={'/assets/javascript.png'} alt="Hero" className="w-full" />
                            </motion.div>
                            <motion.div animate={{ x: [0, 20, 0] }} transition={{ duration: 2, repeat: Infinity }} className="glass-sm">
                                <img src={'assets/react.png'} alt="Hero" className="w-full" />
                            </motion.div>
                            <motion.div animate={{ x: [0, -20, 0] }} transition={{ duration: 2, repeat: Infinity }} className="glass-sm p-1">
                                <img src={'assets/php.png'} alt="Hero" className="w-full" />
                            </motion.div>
                            <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 2, repeat: Infinity }} className="glass-sm p-4">
                                <img src={'assets/laravel.png'} alt="Hero" className="w-full" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
