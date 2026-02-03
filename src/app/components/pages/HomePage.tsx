import { Users, GraduationCap, Briefcase, Heart, ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, Medal, Check, Target, TrendingUp } from 'lucide-react';
import { CampaignsSection } from '@/app/components/CampaignsSection';
import { VideoSection } from '@/app/components/VideoSection';
import { WhatWeDoSection } from '@/app/components/WhatWeDoSection';
import { VolunteerSection } from '@/app/components/VolunteerSection';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { HeroCarousel } from '@/app/components/HeroCarousel';
import { useState } from 'react';
import { motion, Variants } from 'framer-motion';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const stats = [
    { icon: Users, number: '5,000+', label: 'Women & Girls Reached' },
    { icon: GraduationCap, number: '1,200+', label: 'Girls Kept in School' },
    { icon: Briefcase, number: '800+', label: 'Businesses Launched' },
    { icon: Heart, number: '300+', label: 'Change Champions Trained' },
  ];

  const testimonials = [
    {
      quote: "LCEO gave me the confidence and skills to start my tailoring business. Now I support my family and employ two other young women.",
      name: "Grace M.",
      role: "IkiraroBiz Graduate, Kigali",
      image: "https://images.unsplash.com/photo-1739300293361-d1b503281902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      quote: "The Pad Box Initiative changed everything. I no longer miss school during my period, and my grades have improved significantly.",
      name: "Divine K.",
      role: "School Retention Program, Gasabo",
      image: "https://images.unsplash.com/photo-1678225892688-e4a3bd3d9214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      quote: "Through the mental resilience program, I learned to overcome trauma and believe in my potential. Today, I mentor other young women.",
      name: "Hope N.",
      role: "Human Capital Program, Nyarugenge",
      image: "https://images.unsplash.com/flagged/photo-1570562119798-a4b2a542fe3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400"
    },
  ];

  const sdgs = [
    { number: 1, title: 'No Poverty', color: '#E5243B' },
    { number: 3, title: 'Good Health', color: '#4C9F38' },
    { number: 4, title: 'Quality Education', color: '#C5192D' },
    { number: 5, title: 'Gender Equality', color: '#FF3A21' },
    { number: 8, title: 'Decent Work', color: '#A21942' },
    { number: 10, title: 'Reduced Inequalities', color: '#DD1367' },
  ];

  const partners = [
    'FAWE Rwanda',
    'Ecorys International',
    'Mor Assayag Foundation',
    'UN Women Rwanda',
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Impact Statistics - Professional Brand Bar */}
      <div className="relative -mt-16 z-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-accent shadow-2xl rounded-none p-6 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-white relative overflow-hidden"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center relative z-10 flex flex-col items-center justify-center py-4 md:py-0">
                <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base font-medium text-white/80 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="pb-24 md:pb-60 bg-white overflow-hidden" style={{ marginTop: '100px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 items-center gap-8">

            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">
                Who We Are
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-[1.15] text-accent">
                Together, We Make <br className="hidden md:block" />
                <span className="text-primary">A Difference!</span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Life-Changing Endeavor Organization (LCEO) connects vulnerable young women to life-changing opportunities. We deliver holistic support while building a sustainable ecosystem for growth.
                <br /><br />
                Charitable giving is not just a duty; it's an investment in the future. We ensure every contribution reaches those who need it most.
              </p>

              <Button
                onClick={() => onNavigate('donate')}
                className="bg-secondary hover:bg-secondary/90 text-primary-foreground font-bold px-10 py-4 rounded-md shadow-lg transition-all text-base"
              >
                Make A Donation
              </Button>
            </motion.div>

            {/* Right Column: Image Arrangements (Small & Right Aligned) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-3 max-w-sm">
                <div className="space-y-3 pt-8">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=300&fit=crop"
                    alt="Child Smiling"
                    className="w-full aspect-[4/5] object-cover shadow-md hover:scale-[1.02] transition-transform duration-500"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=300&fit=crop"
                    alt="Children Learning"
                    className="w-full aspect-square object-cover shadow-md hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="space-y-3">
                  <img
                    src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=300&fit=crop"
                    alt="Happy Kids"
                    className="w-full aspect-square object-cover shadow-md hover:scale-[1.02] transition-transform duration-500"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=300&fit=crop"
                    alt="Community"
                    className="w-full aspect-[4/5] object-cover shadow-md hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Cards Section based on User Request */}


      {/* Success Stories Carousel */}
      <section className="py-40 bg-muted relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="var(--primary)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-accent">Stories of Transformation</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative">
            <Card className="overflow-hidden border-none shadow-2xl bg-white rounded-2xl">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-80 overflow-hidden group">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="p-10 md:p-14 flex flex-col justify-center bg-white relative">
                    <div className="absolute top-6 left-8 text-9xl text-primary/5 font-serif select-none">"</div>
                    <motion.div
                      key={currentTestimonial}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative z-10"
                    >
                      <p className="text-xl md:text-2xl mb-8 italic text-gray-700 leading-normal font-serif">
                        {testimonials[currentTestimonial].quote}
                      </p>
                      <div className="border-l-4 border-secondary pl-4">
                        <div className="font-bold text-xl text-accent">{testimonials[currentTestimonial].name}</div>
                        <div className="text-primary font-medium">{testimonials[currentTestimonial].role}</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center items-center gap-6 mt-10">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-secondary w-8' : 'bg-gray-300 w-3 hover:bg-primary/50'
                      }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* SDG Alignment - Redesigned */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-accent">Aligned with Global Goals</h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Our programs directly contribute to the United Nations Sustainable Development Goals
            </p>
          </motion.div>

          {/* SDG Cards - Compact Grid */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            {sdgs.map((sdg, index) => (
              <motion.div
                key={sdg.number}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div
                  className="w-24 h-24 rounded-lg flex flex-col items-center justify-center text-white font-bold shadow-md group-hover:shadow-lg transition-all"
                  style={{ backgroundColor: sdg.color }}
                >
                  <div className="text-2xl font-black mb-1">{sdg.number}</div>
                  <div className="text-[9px] px-2 font-semibold uppercase tracking-wide text-center leading-tight">
                    {sdg.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Recent Campaigns Section */}
      <CampaignsSection onNavigate={onNavigate} />

      {/* Video Impact Section */}
      <VideoSection />

      {/* What We Do Cards Section based on User Request */}
      <WhatWeDoSection />

      {/* Volunteer Section */}
      <VolunteerSection />

      {/* Partners Section */}
      <section className="py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-400 uppercase tracking-widest">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 flex items-center justify-center text-center font-bold text-gray-500 shadow-sm hover:shadow-md transition-all grayscale hover:grayscale-0 cursor-pointer border border-gray-100"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/80 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Ready to Be an Agent of Change?
            </h2>
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
              Your monthly support sustains education, builds businesses, and transforms lives for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => onNavigate('donate')}
                className="bg-secondary text-white hover:bg-white/10 font-bold text-xl px-10 py-8 rounded-xl shadow-2xl transition-transform hover:-translate-y-1"
              >
                Start Your Monthly Impact
              </Button>
              <Button
                variant="outline"
                onClick={() => onNavigate('get-involved')}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-xl px-10 py-8 rounded-xl transition-all"
              >
                Get Involved
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
