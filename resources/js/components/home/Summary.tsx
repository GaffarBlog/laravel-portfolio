// import Clients from '/assets/icons/clients.svg';
// import Clock from '/assets/icons/clock.svg';
// import Projects from '/assets/icons/projects.svg';

const Summary = () => {
    return (
        <section className="glass-md mx-auto flex min-h-[15vh] max-w-7xl items-center justify-between rounded-md">
            <div className="flex h-[15vh] w-full items-center justify-center border-r border-r-white">
                <div className="glass-sm mr-3 rounded-sm p-2">
                    <img src="/assets/icons/clients.svg" className="w-10" alt="" />
                </div>
                <h2 className="text-text text-2xl font-medium">3+ Years Experience</h2>
            </div>
            <div className="flex h-[15vh] w-full items-center justify-center border-r border-r-white">
                <div className="glass-sm mr-3 rounded-sm p-2">
                    <img src="/assets/icons/clock.svg" className="w-10" alt="" />
                </div>
                <h2 className="text-text text-2xl font-medium">10+ Project</h2>
            </div>
            <div className="flex h-[15vh] w-full items-center justify-center border-r border-r-white">
                <div className="glass-sm mr-3 rounded-sm p-2">
                    <img src="/assets/icons/projects.svg" className="w-10" alt="" />
                </div>
                <h2 className="text-text text-2xl font-medium">15+ Happy Client</h2>
            </div>
            <div className="flex h-[15vh] w-full items-center justify-center">
                <div className="glass-sm mr-3 rounded-sm p-2">
                    <img src="/assets/icons/clock.svg" className="w-10" alt="" />
                </div>
                <h2 className="text-text text-2xl font-medium">8000+ Hours Code</h2>
            </div>
        </section>
    );
};

export default Summary;
