import { Play, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="pt-24 md:pt-40 pb-24 md:pb-40 bg-white w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grid Layout with Large Gap for Explicit Separation */}
                <div className="grid md:grid-cols-2 gap-0 md:gap-10 lg:gap-24 items-stretch md:items-center">

                    {/* Left Side: Video Trigger Area (White Space) */}
                    <div className="relative h-[350px] md:h-[600px] w-full flex items-center justify-center overflow-hidden">
                        {!isPlaying ? (
                            /* Trigger State: "White Space" with Button */
                            <div className="flex flex-col items-center justify-center gap-6 cursor-pointer group" onClick={() => setIsPlaying(true)}>
                                {/* Animated Play Button */}
                                <div className="relative flex items-center justify-center">
                                    <div className="absolute w-24 h-24 bg-gray-100 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                                    <div className="absolute w-32 h-32 bg-gray-50 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] animation-delay-500"></div>
                                    <div className="relative w-20 h-20 bg-white border-2 border-gray-100 flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                                        <Play fill="currentColor" size={24} className="text-black ml-1" />
                                    </div>
                                </div>

                                {/* Label moved here */}
                                <h4 className="text-gray-900 font-bold text-sm uppercase tracking-[0.2em] transition-colors group-hover:text-yellow-600">
                                    Watch Video
                                </h4>
                            </div>
                        ) : (
                            /* Video State - Fills the space with HTML5 Video */
                            <div className="relative w-full h-full bg-black overflow-hidden shadow-2xl animate-in fade-in duration-500">
                                <button
                                    onClick={(e) => { e.stopPropagation(); setIsPlaying(false); }}
                                    className="absolute top-4 right-4 z-30 bg-red-600 hover:bg-red-700 text-white p-2 transition-colors shadow-lg backdrop-blur-sm rounded-full"
                                >
                                    <X size={20} />
                                </button>

                                {/* 
                                    TODO: Replace this generic URL with the actual video URL from your Cloudinary/Database.
                                    Example: const videoUrl = beneficiary.videoUrl || "https://res.cloudinary.com/YOUR_CLOUD/video/upload/v.../clean_water.mp4";
                                 */}
                                <video
                                    className="absolute inset-0 w-full h-full object-cover z-20"
                                    controls
                                    autoPlay
                                    playsInline
                                    src="https://videos.pexels.com/video-files/4057335/4057335-hd_1920_1080_25fps.mp4"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        )}
                    </div>

                    {/* Right Side: Text Content Box */}
                    <div
                        className="bg-[#0d211e] p-8 md:p-16 lg:p-20 min-h-[450px] md:h-[600px] flex flex-col justify-center shadow-2xl relative overflow-hidden"
                        style={{ backgroundColor: '#0d211e' }}
                    >
                        {/* Decorative Pattern */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <div className="relative z-10 space-y-6 md:space-y-8">
                            {/* "Watch Video" removed from here */}

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white block"
                            >
                                Over 2.5 Billion People <br />
                                <span className="text-gray-300">Lack Safe Drinking</span> <br />
                                <span className="text-yellow-500">Clean Water!</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-gray-300 text-lg leading-relaxed block max-w-xl"
                            >
                                Every child deserves a chance to grow, learn, and dream. But for millions of children around the world, poverty is a daily reality that robs them of opportunities most of us take for granted.
                            </motion.p>

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-5 px-12 shadow-lg uppercase tracking-wider text-sm inline-flex items-center gap-3 transition-all hover:-translate-y-1 w-fit"
                            >
                                Make A Donation
                                <span>&rarr;</span>
                            </motion.button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
