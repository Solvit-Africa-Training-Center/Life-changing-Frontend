import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

export function VolunteerSection() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5s
        }, 1500);
    };

    return (
        <section className="relative py-28 md:py-40 overflow-hidden bg-slate-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 w-full h-full z-0">
                <img
                    src="https://images.pexels.com/photos/3206011/pexels-photo-3206011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
            </div>

            {/* Floating Background Element */}
            <motion.div
                className="absolute top-20 right-20 w-64 h-64 bg-[#FFC105]/20 rounded-full blur-3xl z-0"
                animate={{
                    y: [0, 50, 0],
                    x: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-20 left-20 w-80 h-80 bg-[#0066CC]/20 rounded-full blur-3xl z-0"
                animate={{
                    y: [0, -40, 0],
                    x: [0, -20, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="text-white space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-1 w-12 bg-[#FFC105] rounded-full"></span>
                                <span className="text-[#FFC105] font-bold tracking-widest uppercase text-sm">Join Our Mission</span>
                            </div>

                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 tracking-tight">
                                Because Every <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Life Matters.</span>
                            </h2>

                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mb-12 font-light border-l-4 border-[#FFC105]/30 pl-6">
                                Your time and skills can transform lives. Join a community of changemakers dedicated to breaking existing cycles of poverty and building a brighter future.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Button
                                    className="bg-secondary text-primary-foreground hover:bg-primary/90 font-bold rounded-md uppercase tracking-wide text-[11px] shadow-sm transition-all hover:-translate-y-0.5 active:scale-95 whitespace-nowrap px-5 py-3"
                                >
                                    Donate Now
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-medium backdrop-blur-sm"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Form - Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Glass Container */}
                        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden">

                            {/* Decorative gradient inside card */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>

                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="flex flex-col items-center justify-center text-center h-[400px] space-y-6"
                                    >
                                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                                            <CheckCircle2 className="w-10 h-10 text-green-400" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-white">Thank You!</h3>
                                        <p className="text-gray-300 text-lg">We've received your details and will be in touch shortly.</p>
                                        <Button
                                            onClick={() => setIsSubmitted(false)}
                                            variant="ghost"
                                            className="text-white hover:bg-white/10 mt-6"
                                        >
                                            Send another message
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <div className="mb-10">
                                            <h4 className="text-[#FFC105] font-bold text-xs tracking-[0.2em] uppercase mb-4">
                                                Get Involved
                                            </h4>
                                            <h3 className="text-3xl font-bold text-white">
                                                Become A Volunteer
                                            </h3>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <input
                                                        type="text"
                                                        placeholder="Your Name"
                                                        required
                                                        className="w-full bg-white/5 border border-white/10 focus:border-[#FFC105]/50 focus:bg-white/10 p-4 text-white placeholder:text-white/40 outline-none transition-all rounded-xl"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <input
                                                        type="email"
                                                        placeholder="Your Email"
                                                        required
                                                        className="w-full bg-white/5 border border-white/10 focus:border-[#FFC105]/50 focus:bg-white/10 p-4 text-white placeholder:text-white/40 outline-none transition-all rounded-xl"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <input
                                                        type="tel"
                                                        placeholder="Phone No"
                                                        className="w-full bg-white/5 border border-white/10 focus:border-[#FFC105]/50 focus:bg-white/10 p-4 text-white placeholder:text-white/40 outline-none transition-all rounded-xl"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <input
                                                        type="text"
                                                        placeholder="Address"
                                                        className="w-full bg-white/5 border border-white/10 focus:border-[#FFC105]/50 focus:bg-white/10 p-4 text-white placeholder:text-white/40 outline-none transition-all rounded-xl"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <textarea
                                                    placeholder="Tell us why you want to join..."
                                                    rows={4}
                                                    className="w-full bg-white/5 border border-white/10 focus:border-[#FFC105]/50 focus:bg-white/10 p-4 text-white placeholder:text-white/40 outline-none resize-none transition-all rounded-xl"
                                                ></textarea>
                                            </div>

                                            <Button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full bg-gradient-to-r from-[#FFC105] to-[#FF9800] text-slate-900 border-none font-bold py-6 hover:shadow-lg hover:shadow-orange-500/20 transition-all rounded-xl group"
                                            >
                                                {isLoading ? (
                                                    <span className="flex items-center gap-2">
                                                        <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                                                        Sending...
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center justify-center gap-2">
                                                        Become A Volunteer
                                                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                    </span>
                                                )}
                                            </Button>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}