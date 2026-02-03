import { Target, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface CampaignsSectionProps {
    onNavigate: (page: string) => void;
}

export function CampaignsSection({ onNavigate }: CampaignsSectionProps) {
    const campaigns = [
        {
            title: "Clean Water Access",
            category: "Water",
            goal: "$450k",
            raised: "$402k",
            percent: 89,
            // Alternative Reliable Water Image (African kids pumping water)
            image: "https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&q=80&w=400&h=300",
            desc: "Providing clean water access to rural communities."
        },
        {
            title: "School Construction",
            category: "Education",
            goal: "$250k",
            raised: "$201k",
            percent: 80,
            // Alternative Education Image (Classroom smiling)
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400&h=300",
            desc: "Building sustainable classrooms for future leaders."
        },
        {
            title: "Medical Supplies",
            category: "Health",
            goal: "$550k",
            raised: "$320k",
            percent: 58,
            // Alternative Health Image (Doctor exam)
            image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=400&h=300",
            desc: "Essential medical equipment for local clinics."
        },
        {
            title: "Food Security",
            category: "Nutrition",
            goal: "$150k",
            raised: "$45k",
            percent: 30,
            // Alternative Nutrition Image (Corn/Maize Harvest)
            image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=400&h=300",
            desc: "Sustainable farming and emergency food relief."
        }
    ];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Compact Header */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-end justify-between mb-8 border-b border-gray-100 pb-4"
                >
                    <div>
                        <div className="text-secondary font-bold text-[10px] uppercase tracking-widest mb-1">
                            Impact in Action
                        </div>
                        <h2 className="text-2xl font-bold text-accent">
                            Active Campaigns
                        </h2>
                    </div>
                    <div className="hidden md:block text-right">
                        <a href="#" onClick={() => onNavigate('impact')} className="text-sm font-semibold text-primary hover:text-accent transition-colors">
                            View All Projects &rarr;
                        </a>
                    </div>
                </motion.div>

                {/* Compact Grid */}
                <div className="flex flex-wrap justify-center gap-4">
                    {campaigns.map((campaign, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            className="group bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[180px] flex-shrink-0"
                        >
                            {/* Proportional Image Container - Taller for visibility */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                <img
                                    src={campaign.image}
                                    alt={campaign.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-1 right-1">
                                    {/* Category Badge - Primary Color */}
                                    <span className="bg-primary/90 backdrop-blur-sm text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                                        {campaign.category}
                                    </span>
                                </div>
                            </div>

                            {/* Dense Content */}
                            <div className="p-3">
                                <h3 className="text-xs font-bold text-accent mb-2 truncate group-hover:text-primary transition-colors">
                                    {campaign.title}
                                </h3>

                                <div className="mb-2">
                                    <div className="flex justify-between items-end mb-1">
                                        <span className="text-[8px] font-semibold text-gray-400 uppercase">Progress</span>
                                        <span className="text-[8px] font-bold text-primary">{campaign.percent}%</span>
                                    </div>
                                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            // Progress Bar - Secondary Brand Color (Yellow)
                                            className="h-full bg-secondary rounded-full"
                                            style={{ width: `${campaign.percent}%` }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-[8px] text-gray-500 border-t border-gray-50 pt-1.5 mt-1.5">
                                    <div className="flex flex-col">
                                        <span className="uppercase tracking-wider text-[7px] text-gray-400">Goal</span>
                                        <span className="font-bold text-accent">{campaign.goal}</span>
                                    </div>
                                    <div className="flex flex-col text-right">
                                        <span className="uppercase tracking-wider text-[7px] text-gray-400">Raised</span>
                                        <span className="font-bold text-primary">{campaign.raised}</span>
                                    </div>
                                </div>

                                <button className="w-full mt-2 bg-secondary hover:bg-yellow-400 text-black text-[9px] font-bold py-1.5 rounded transition-colors uppercase tracking-wide shadow-sm">
                                    Donate
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
