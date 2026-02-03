import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1563132337-f159f484226c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBlbnRyZXByZW5ldXJ8ZW58MXx8fHwxNzY5MDI3ODE4fDA&ixlib=rb-4.1.0&q=80&w=1920",
        subtitle: "Help The People In Need!",
        title: "Unlocking Potential, Empowering Lives",
        description: "Transforming lives of vulnerable young women and girls in Rwanda through education, entrepreneurship, and mental resilience.",
        cta: "Join Our Impact Circle",
        link: "/donate"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920&auto=format&fit=crop",
        subtitle: "Education for a Brighter Future",
        title: "Your Small Help Makes World Better",
        description: "Giving is not just about making a donation. It's about making a difference one child, one life, one future at a time.",
        cta: "Make A Donation",
        link: "/donate"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1920&auto=format&fit=crop",
        subtitle: "Building Resilience",
        title: "Creating Sustainable Change Together",
        description: "We believe in the power of community and mentorship to build strong, independent futures for young women.",
        cta: "Get Involved",
        link: "/get-involved"
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
