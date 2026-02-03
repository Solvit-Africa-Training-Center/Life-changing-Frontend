import { motion } from 'framer-motion';
import { Droplets, Church, School, HeartHandshake, ArrowRight } from 'lucide-react';


const services = [
    {
        icon: <Droplets size={64} strokeWidth={1} />,
        title: "Clean Water For Communities",
        description: "providing sustainable access to clean water and sanitation for vulnerable communities.",
        bgIcon: <Droplets strokeWidth={0.5} />,
        color: "bg-primary"
    },
    {
        icon: <Church size={64} strokeWidth={1} />,
        title: "Faith & Community Building",
        description: "Strengthening community bonds through spiritual support and shared values.",
        bgIcon: <Church strokeWidth={0.5} />,
        color: "bg-primary"
    },
    {
        icon: <School size={64} strokeWidth={1} />,
        title: "Education for Every Child",
        description: "Ensuring access to quality education and learning resources for impactful futures.",
        bgIcon: <School strokeWidth={0.5} />,
        color: "bg-primary"
    },
    {
        icon: <HeartHandshake size={64} strokeWidth={1} />,
        title: "Medical & Health Services",
        description: "Delivering essential healthcare services to underserved regions for better living.",
        bgIcon: <HeartHandshake strokeWidth={0.5} />,
        color: "bg-primary"
    }
];

export function WhatWeDoSection() {
    return (
        <section className="pt-24 md:pt-40 pb-24 md:pb-40 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-secondary font-bold text-sm tracking-[0.2em] uppercase">
                            What We Do?
                        </h4>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-accent leading-tight"
                    >
                        We Believe That We Can Save <br className="hidden md:block" />
                        More Lives With You!
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed pt-2"
                    >
                        Giving is not just about making a donation. It's about making a difference one child, one life, one future at a time.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white rounded-xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center group h-full border border-gray-50 cursor-pointer"
                        >
                            {/* Hover Background Animation - Slides from top-left */}
                            <div className="absolute -top-32 -left-32 w-56 h-56 bg-accent rounded-full transition-all duration-700 ease-in-out group-hover:scale-[6] z-0 origin-center"></div>

                            {/* Watermark Icon - Fixed Bottom Right */}
                            <div className="absolute -bottom-8 -right-8 w-40 h-40 opacity-40 group-hover:opacity-10 transition-all duration-500 pointer-events-none text-primary/20 group-hover:text-white/10 z-10">
                                <span className="w-full h-full block [&>svg]:w-full [&>svg]:h-full">
                                    {service.bgIcon}
                                </span>
                            </div>

                            {/* Main Icon - No Box, just Icon */}
                            <div className="mb-6 text-primary transform group-hover:scale-110 group-hover:text-white transition-all duration-500 relative z-10">
                                {service.icon}
                            </div>

                            <div className="relative z-10 flex-grow transition-colors duration-500">
                                <h3 className="text-xl font-bold text-accent mb-4 leading-tight group-hover:text-white">
                                    {service.title}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed mb-6 group-hover:text-white/90">
                                    {service.description}
                                </p>
                            </div>

                            {/* Link - Centered and colored */}
                            <div className="relative z-10 mt-auto transition-colors duration-500">
                                <a href="#" className="inline-flex items-center text-sm font-bold text-primary group-hover:text-white transition-colors uppercase tracking-wider gap-2">
                                    Read More
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


