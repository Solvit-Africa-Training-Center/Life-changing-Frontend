import React from 'react';
import { motion } from 'framer-motion';

export function VolunteerSection() {
    return (
        <section className="relative py-28 md:py-40 bg-[#0d211e] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="https://images.pexels.com/photos/3206011/pexels-photo-3206011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0d211e]/90 mix-blend-multiply"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="text-white space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-[#FFC105] font-bold text-sm tracking-[0.2em] uppercase mb-4">
                                Join With Us
                            </h4>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                                Because Every <br />
                                Life Matters!
                            </h2>
                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-light">
                                Charitable giving as a religious act or duty is referred to as alms. The name stems from the most obvious expression of the virtue of charity, giving the recipients of it the means they need to survive.
                            </p>

                            <a href="#" className="inline-block bg-[#FFC105] text-[#0d211e] font-extrabold py-4 px-10 rounded-sm hover:bg-white transition-all duration-300 uppercase tracking-widest shadow-lg">
                                Donate Now
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 md:p-14 relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] z-20 w-full max-w-[500px] lg:ml-auto rounded-md"
                    >
                        {/* Form Header */}
                        <div className="mb-8">
                            <h4 className="text-[#FFC105] font-bold text-xs tracking-[0.2em] uppercase mb-3">
                                Join Us Now
                            </h4>
                            <h3 className="text-3xl font-extrabold text-[#0d211e]">
                                Become A Volunteer
                            </h3>
                        </div>

                        {/* Form Fields */}
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-gray-50 border-none p-4 text-gray-800 focus:ring-1 focus:ring-[#FFC105]/50 outline-none placeholder:text-gray-400 transition-all rounded-sm"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-gray-50 border-none p-4 text-gray-800 focus:ring-1 focus:ring-[#FFC105]/50 outline-none placeholder:text-gray-400 transition-all rounded-sm"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <input
                                    type="tel"
                                    placeholder="Phone No"
                                    className="w-full bg-gray-50 border-none p-4 text-gray-800 focus:ring-1 focus:ring-[#FFC105]/50 outline-none placeholder:text-gray-400 transition-all rounded-sm"
                                />
                                <input
                                    type="text"
                                    placeholder="Your address"
                                    className="w-full bg-gray-50 border-none p-4 text-gray-800 focus:ring-1 focus:ring-[#FFC105]/50 outline-none placeholder:text-gray-400 transition-all rounded-sm"
                                />
                            </div>
                            <textarea
                                placeholder="Message"
                                rows={4}
                                className="w-full bg-gray-50 border-none p-4 text-gray-800 focus:ring-1 focus:ring-[#FFC105]/50 outline-none placeholder:text-gray-400 resize-none transition-all rounded-sm"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-[#FFC105] text-[#0d211e] font-extrabold py-5 px-8 uppercase tracking-widest hover:bg-[#0d211e] hover:text-white transition-colors duration-300 shadow-lg hover:shadow-xl rounded-sm"
                            >
                                Become A Volunteer
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
