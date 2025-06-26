export default function About() {
    const skills = [
        { name: 'HTML5', icon: '/assets/skills/html.svg' },
        { name: 'CSS3', icon: '/assets/skills/css.svg' },
        { name: 'Tailwind', icon: '/assets/skills/tailwind.svg' },
        { name: 'Bootstrap', icon: '/assets/skills/bootstrap.svg' },
        { name: 'JavaScript', icon: '/assets/skills/javascript.svg' },
        { name: 'jQuery', icon: '/assets/skills/jquery.svg' },
        { name: 'React', icon: '/assets/skills/react.svg' },
        { name: 'Redux', icon: '/assets/skills/Redux.svg' },
        { name: 'PHP', icon: '/assets/skills/php.svg' },
        { name: 'Laravel', icon: '/assets/skills/laravel.svg' },
        { name: 'Git', icon: '/assets/skills/git.svg' },
        { name: 'Github', icon: '/assets/skills/github.svg' },
    ];
    return (
        <section id="about" className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">About Me</h2>
                    <div className="mx-auto h-1 w-20 bg-primary"></div>
                </div>
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 z-0 h-24 w-24 rounded-full bg-indigo-100"></div>
                        <div className="absolute -right-4 -bottom-4 z-0 h-32 w-32 rounded-full bg-indigo-100"></div>
                        <img
                            src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20male%20developer%20in%20casual%20smart%20attire%2C%20sitting%20at%20desk%20with%20computer%2C%20creative%20workspace%2C%20modern%20office%20environment%2C%20natural%20lighting%2C%20professional%20photography%2C%20high%20quality%2C%20realistic&width=600&height=700&seq=10&orientation=portrait"
                            alt="About Me"
                            className="relative z-10 h-full w-full rounded-lg object-cover shadow-xl"
                        />
                    </div>
                    <div>
                        <h3 className="mb-4 text-2xl font-bold text-gray-900">Who am I?</h3>
                        <p className="mb-6 text-gray-700">
                            I'm a full-stack web developer with a passion for building modern, user-friendly websites and web applications. I
                            specialize in both frontend and backend development, creating seamless digital experiences from start to finish. Whether
                            it's designing responsive interfaces or building powerful server-side functionality, I focus on clean code, performance,
                            and scalability.
                        </p>
                        <p className="mb-6 text-gray-700">
                            With experience in technologies like PHP, Laravel, Javascript and React. I’ve helped bring ideas to life for businesses,
                            startups, and personal projects. I’m always eager to learn, solve problems, and turn complex requirements into functional,
                            beautiful web solutions.
                        </p>
                        <h3 className="mb-4 text-2xl font-bold text-gray-900">My Skills</h3>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            {skills.map((skill, index) => (
                                <div key={index} className={`glass-sm flex items-center gap-3 rounded-sm p-2 font-medium uppercase`}>
                                    <img src={skill.icon} alt="" className="w-8" />
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>

                        <button className="!rounded-button mt-8 flex cursor-pointer items-center rounded-md bg-primary px-6 py-3 font-medium whitespace-nowrap text-white transition-colors hover:bg-indigo-700">
                            <i className="fas fa-download mr-2"></i> Download Resume
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
