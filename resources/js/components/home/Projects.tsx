import { useState } from 'react';
import ButtonTab from './ButtonTab';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            category: 'React',
            image: 'https://readdy.ai/api/search-image?query=modern%20e-commerce%20website%20interface%20with%20clean%20design%2C%20product%20grid%20layout%2C%20shopping%20cart%2C%20user-friendly%20navigation%2C%20responsive%20design%2C%20minimalist%20aesthetic%2C%20professional%20product%20photography%2C%20white%20background%2C%20high-end%20look&width=600&height=400&seq=1&orientation=landscape',
            description: 'A full-featured e-commerce platform with product filtering, cart management, and payment integration.',
            technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
            liveLink: '#',
            githubLink: '#',
        },
        {
            id: 2,
            title: 'Portfolio Dashboard',
            category: 'Vue',
            image: 'https://readdy.ai/api/search-image?query=elegant%20dashboard%20interface%20with%20data%20visualization%2C%20analytics%20charts%2C%20user%20statistics%2C%20dark%20theme%2C%20modern%20UI%20elements%2C%20clean%20layout%2C%20professional%20design%2C%20business%20intelligence%20visualization%2C%20tech%20aesthetic&width=600&height=400&seq=2&orientation=landscape',
            description: 'Interactive dashboard for tracking portfolio performance with real-time data visualization.',
            technologies: ['Vue.js', 'Chart.js', 'Firebase'],
            liveLink: '#',
            githubLink: '#',
        },
        {
            id: 3,
            title: 'Social Media App',
            category: 'React',
            image: 'https://readdy.ai/api/search-image?query=social%20media%20application%20interface%20showing%20user%20profiles%2C%20post%20feed%2C%20messaging%20features%2C%20modern%20design%2C%20mobile%20responsive%20layout%2C%20engagement%20metrics%2C%20clean%20UI%2C%20professional%20look%2C%20tech%20aesthetic&width=600&height=400&seq=3&orientation=landscape',
            description: 'A responsive social media application with real-time messaging and post interactions.',
            technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
            liveLink: '#',
            githubLink: '#',
        },
        {
            id: 4,
            title: 'Task Management System',
            category: 'Angular',
            image: 'https://readdy.ai/api/search-image?query=task%20management%20application%20with%20kanban%20board%2C%20task%20cards%2C%20progress%20tracking%2C%20team%20collaboration%20features%2C%20modern%20UI%2C%20productivity%20tool%20interface%2C%20clean%20design%2C%20professional%20look%2C%20tech%20aesthetic&width=600&height=400&seq=4&orientation=landscape',
            description: 'Collaborative task management system with drag-and-drop interface and team features.',
            technologies: ['Angular', 'TypeScript', 'Firebase'],
            liveLink: '#',
            githubLink: '#',
        },
    ];

    const filteredProjects = activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter);
    return (
        <section id="projects" className={`py-20`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">My Projects</h2>
                    <div className="mx-auto h-1 w-20 bg-primary"></div>
                    <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
                        Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
                    </p>
                </div>
                <div className="mb-8 flex justify-center">
                    <div className="relative flex gap-4 overflow-hidden rounded-sm bg-white px-5 py-1.5 shadow-primary">
                        <ButtonTab activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className={`glass-sm overflow-hidden rounded-xl border border-white/20 shadow-lg transition-transform hover:scale-[1.02]`}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img src={project.image} alt={project.title} className="h-full w-full object-cover object-top" />
                                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent">
                                    <div className="p-6 text-white">
                                        <h3 className="text-2xl font-bold">{project.title}</h3>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {project.technologies.map((tech, index) => (
                                                <span key={index} className="rounded bg-primary/70 px-2 py-1 text-xs font-medium tracking-wide">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="mb-4 text-gray-700">{project.description}</p>
                                <div className="flex justify-between">
                                    <a
                                        href={project.liveLink}
                                        className="flex cursor-pointer items-center font-medium text-primary hover:text-indigo-800"
                                    >
                                        <i className="fas fa-external-link-alt mr-2"></i> Live Demo
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        className="flex cursor-pointer items-center font-medium text-primary hover:text-indigo-800"
                                    >
                                        <i className="fab fa-github mr-2"></i> Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <button className="!rounded-button cursor-pointer rounded-md bg-primary px-6 py-3 font-medium whitespace-nowrap text-white transition-colors hover:bg-indigo-700">
                        View All Projects <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};
export default Projects;
