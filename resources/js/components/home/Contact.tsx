import SocialButton from './SocialButton';
const Contact = () => {
    return (
        <section id="contact" className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Get In Touch</h2>
                    <div className="mx-auto h-1 w-20 bg-primary"></div>
                    <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
                        Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className={`glass-md rounded-xl p-8 shadow-primary`}>
                        <h3 className="mb-6 text-2xl font-bold text-gray-900">Send Me a Message</h3>
                        <form>
                            <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="mb-2 block font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full rounded-md border border-gray-300 px-4 py-3 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="mb-2 block font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full rounded-md border border-gray-300 px-4 py-3 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="subject" className="mb-2 block font-medium text-gray-700">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full rounded-md border border-gray-300 px-4 py-3 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    placeholder="Subject of your message"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="mb-2 block font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full rounded-md border border-gray-300 px-4 py-3 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    placeholder="Your message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="!rounded-button w-full cursor-pointer rounded-md bg-primary px-6 py-3 font-medium whitespace-nowrap text-white transition-colors hover:bg-primary/90"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div>
                        <div className="glass-md mb-8 p-8 shadow-primary">
                            <h3 className="mb-6 text-2xl font-bold text-gray-900">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100">
                                        <i className="fas fa-envelope text-indigo-600"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                                        <a
                                            href="mailto:hello@johndoe.com"
                                            className="cursor-pointer text-indigo-600 transition-colors hover:text-indigo-800"
                                        >
                                            hello@johndoe.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100">
                                        <i className="fas fa-phone-alt text-indigo-600"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                                        <a href="tel:+11234567890" className="cursor-pointer text-indigo-600 transition-colors hover:text-indigo-800">
                                            +1 (123) 456-7890
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100">
                                        <i className="fas fa-map-marker-alt text-indigo-600"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900">Location</h4>
                                        <p className="text-gray-700">San Francisco, California</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`glass-md rounded-sm border border-white/20 p-8 shadow-primary backdrop-blur-md`}>
                            <h3 className="text-text mb-6 text-2xl font-bold">Follow Me</h3>
                            <div className="flex gap-5">
                                <SocialButton src="/assets/social/github.svg" title="Github" />
                                <SocialButton src="/assets/social/twitter2.svg" title="Linkedin" />
                                <SocialButton src="/assets/social/twitter2.svg" title="Twitter" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
