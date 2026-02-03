import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1920&auto=format&fit=crop",
        subtitle: "School Facilitation Support!",
        title: "Education for a Brighter Future",
        description: "School Facilitation Support removes barriers to education by assisting girls at risk of dropping out and those who have already left school.",
        cta: "Make A Donation",
        link: "/donate"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920&auto=format&fit=crop",
        subtitle: "Safe Spaces and Mentorship",
        title: "Mentorship",
        description: "Safe Spaces and Mentorship creates supportive environments where girls receive guidance, life skills, and psychosocial support through clubs formed in and out of school. These spaces build confidence, resilience, and protection.",
        cta: "Make A Donation",
        link: "/donate"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1920&auto=format&fit=crop",
        subtitle: "SRHR Pad Box Project",
        title: "Pad Box Project",
        description: "The SRHR Pad Box Project addresses school dropout, absenteeism, and vulnerability to exploitation among adolescent girls by combining menstrual health support with Sexual and Reproductive Health and Rights (SRHR) information.",
        cta: "Make A Donation",
        link: "/donate"
    }
];

export function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000); // 6 seconds per slide
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-[650px] overflow-hidden bg-black">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* Background Image with Zoom Effect */}
                    <motion.div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[current].image})` }}
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.15 }} // Slow zoom in
                        transition={{ duration: 8, ease: "linear" }}
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50 bg-gradient-to-r from-black/70 to-transparent" />

                    {/* Content */}
                    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                        <div className="max-w-3xl">
                            {/* Subtitle Animation */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                                className="text-secondary font-bold text-lg md:text-xl mb-4 tracking-wide uppercase"
                            >
                                {slides[current].subtitle}
                            </motion.div>

                            {/* Title Animation */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                            >
                                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                                    {slides[current].title}
                                </h1>
                            </motion.div>

                            {/* Description Animation */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                            >
                                <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
                                    {slides[current].description}
                                </p>
                            </motion.div>

                            {/* Button Animation */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                            >
                                <Link to={slides[current].link}>
                                    <Button className="bg-secondary hover:bg-secondary/90 text-white font-extrabold text-lg px-8 py-6 rounded-md uppercase tracking-wide">
                                        {slides[current].cta}
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20 hidden md:block group">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-black/20 text-white hover:bg-secondary hover:text-accent transition-all border border-white/30 backdrop-blur-sm group-hover:scale-110"
                >
                    <ChevronLeft size={24} />
                </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20 hidden md:block group">
                <button
                    onClick={nextSlide}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-black/20 text-white hover:bg-secondary hover:text-accent transition-all border border-white/30 backdrop-blur-sm group-hover:scale-110"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? 'bg-secondary w-8' : 'bg-white/50 hover:bg-white'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
