import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            position: 'CEO at TechStart',
            quote: "One of the most talented developers I've worked with. Delivered our project on time with exceptional quality and attention to detail.",
            avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20woman%20portrait%2C%20CEO%2C%20confident%2C%20smiling%2C%20modern%20office%20background%2C%20business%20attire%2C%20professional%20headshot%20style%2C%20neutral%20background%2C%20high%20quality%2C%20realistic&width=100&height=100&seq=5&orientation=squarish',
        },
        {
            id: 2,
            name: 'Michael Chen',
            position: 'Product Manager at InnovateCorp',
            quote: 'Outstanding technical skills combined with a great eye for design. Transformed our product vision into a beautiful, functional reality.',
            avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20man%20portrait%2C%20product%20manager%2C%20asian%2C%20confident%2C%20smiling%2C%20modern%20office%20background%2C%20business%20casual%20attire%2C%20professional%20headshot%20style%2C%20neutral%20background%2C%20high%20quality%2C%20realistic&width=100&height=100&seq=6&orientation=squarish',
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            position: 'CTO at FutureTech',
            quote: 'Exceptional problem-solving abilities and technical expertise. Consistently delivered high-quality code and innovative solutions to complex challenges.',
            avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20woman%20portrait%2C%20CTO%2C%20latina%2C%20tech%20leader%2C%20confident%2C%20modern%20office%20background%2C%20business%20casual%20attire%2C%20professional%20headshot%20style%2C%20neutral%20background%2C%20high%20quality%2C%20realistic&width=100&height=100&seq=7&orientation=squarish',
        },
        {
            id: 4,
            name: 'Emily Rodriguez',
            position: 'CTO at FutureTech',
            quote: 'Exceptional problem-solving abilities and technical expertise. Consistently delivered high-quality code and innovative solutions to complex challenges.',
            avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20woman%20portrait%2C%20CTO%2C%20latina%2C%20tech%20leader%2C%20confident%2C%20modern%20office%20background%2C%20business%20casual%20attire%2C%20professional%20headshot%20style%2C%20neutral%20background%2C%20high%20quality%2C%20realistic&width=100&height=100&seq=7&orientation=squarish',
        },
    ];
    return (
        <section id="testimonials" className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Client Testimonials</h2>
                    <div className="mx-auto h-1 w-20 bg-indigo-600"></div>
                    <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">What people say about working with me and my development services.</p>
                </div>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    className="testimonial-swiper"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div
                                className={`flex h-full flex-col rounded-xl border border-white/20 bg-white/50 p-8 backdrop-blur-md dark:bg-gray-800/50`}
                            >
                                <div className="mb-6">
                                    <i className="fas fa-quote-left text-4xl text-indigo-200"></i>
                                </div>
                                <p className="mb-6 flex-grow text-gray-700">{testimonial.quote}</p>
                                <div className="flex items-center">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="mr-4 h-12 w-12 rounded-full object-cover" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-indigo-600">{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
