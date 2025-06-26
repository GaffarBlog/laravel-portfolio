const Experience = () => {
    const experiences = [
        {
            id: 1,
            company: 'Tech Innovations Inc.',
            position: 'Senior Frontend Developer',
            period: 'Jan 2022 - Present',
            description: 'Leading the frontend development team, implementing modern UI/UX designs, and optimizing application performance.',
            technologies: ['React', 'TypeScript', 'Redux', 'Tailwind CSS'],
            logo: 'building',
        },
        {
            id: 2,
            company: 'Digital Solutions Ltd.',
            position: 'UI/UX Developer',
            period: 'Mar 2020 - Dec 2021',
            description:
                'Designed and developed responsive web applications, collaborated with UX researchers to implement user-friendly interfaces.',
            technologies: ['Vue.js', 'SCSS', 'Figma', 'JavaScript'],
            logo: 'laptop-code',
        },
        {
            id: 3,
            company: 'WebCraft Studio',
            position: 'Frontend Developer',
            period: 'Jun 2018 - Feb 2020',
            description: 'Developed responsive websites and web applications for various clients across different industries.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
            logo: 'code',
        },
    ];
    return (
        <section id="experience" className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Work Experience</h2>
                    <div className="mx-auto h-1 w-20 bg-primary"></div>
                    <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
                        My professional journey through various roles and companies in the tech industry.
                    </p>
                </div>
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 transform bg-primary/10 md:block"></div>
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="md:w-1/2"></div>
                                <div className="hidden items-center justify-center md:flex">
                                    <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary/70">
                                        <i className={`fas fa-${exp.logo} text-white`}></i>
                                    </div>
                                </div>
                                <div className="glass-md mt-4 rounded-sm p-6 shadow-md transition-shadow hover:shadow-lg md:mt-0 md:w-1/2">
                                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary md:hidden">
                                        <i className={`fas fa-${exp.logo} text-white`}></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                                    <div className="mt-1 mb-3 flex items-center justify-between">
                                        <span className="font-medium text-indigo-600">{exp.company}</span>
                                        <span className="text-sm text-gray-500">{exp.period}</span>
                                    </div>
                                    <p className="mb-4 text-gray-700">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="rounded-sm bg-primary/10 px-3 py-1 text-xs font-medium tracking-wide text-primary"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
