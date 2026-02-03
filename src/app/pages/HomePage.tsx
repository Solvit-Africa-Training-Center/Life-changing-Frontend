import { Link } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { HeroCarousel } from '@/app/components/HeroCarousel';
import {
  Heart,
  GraduationCap,
  TrendingUp,
  Users,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState } from 'react';

export function HomePage() {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      name: 'Rose Mukamana',
      quote:
        'LCEO gave me the confidence and skills to start my own tailoring business. Now I employ three other young women and support my family.',
      role: 'IkiraroBiz Graduate',
    },
    {
      name: 'Grace Uwase',
      quote:
        'The mental resilience program helped me overcome trauma and believe in myself again. I am now in university studying law.',
      role: 'Mental Resilience Program',
    },
    {
      name: 'Marie Umutoni',
      quote:
        'Thanks to the school retention program, I stayed in school and graduated. Today, I work as a teacher helping other girls.',
      role: 'School Retention Graduate',
    },
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <HeroCarousel />

      {/* Introduction Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Who We Are</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Life-Changing Endeavor Organization (LCEO) is a Rwandan nonprofit dedicated to
              breaking the cycle of poverty and inequality. We empower vulnerable young women and
              girls through comprehensive programs that address education, economic empowerment,
              health, and mental resilience. Our holistic approach ensures sustainable change that
              transforms individuals, families, and communities.
            </p>
            <Link to="/about">
              <Button className="bg-[#0066CC] hover:bg-[#0066CC]/90">Learn Our Story</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0066CC]/10 mb-4">
                  <Users className="h-8 w-8 text-[#0066CC]" />
                </div>
                <div className="text-4xl font-bold text-[#0066CC] mb-2">5,200+</div>
                <div className="text-slate-600 font-medium">Women & Girls Reached</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00A896]/10 mb-4">
                  <GraduationCap className="h-8 w-8 text-[#00A896]" />
                </div>
                <div className="text-4xl font-bold text-[#00A896] mb-2">1,850+</div>
                <div className="text-slate-600 font-medium">Girls Kept in School</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF6B35]/10 mb-4">
                  <TrendingUp className="h-8 w-8 text-[#FF6B35]" />
                </div>
                <div className="text-4xl font-bold text-[#FF6B35] mb-2">980+</div>
                <div className="text-slate-600 font-medium">Businesses Launched</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#28A745]/10 mb-4">
                  <Heart className="h-8 w-8 text-[#28A745]" />
                </div>
                <div className="text-4xl font-bold text-[#28A745] mb-2">3,400+</div>
                <div className="text-slate-600 font-medium">Change Champions Trained</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Success Stories</h2>

          <div className="max-w-4xl mx-auto relative">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-12">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-slate-700 mb-6 overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1686910781696-13fc94585bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZ2lybCUyMHNtaWxpbmd8ZW58MXx8fHwxNzY5MDc5MTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt={stories[currentStory].name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <blockquote className="text-xl italic mb-6 leading-relaxed">
                    "{stories[currentStory].quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-lg">{stories[currentStory].name}</div>
                    <div className="text-slate-400">{stories[currentStory].role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-2 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevStory}
                className="rounded-full bg-slate-800 border-slate-700 hover:bg-slate-700"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentStory ? 'bg-[#0066CC]' : 'bg-slate-600'
                    }`}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
              <Button
                variant="outline"
                size="icon"
                onClick={nextStory}
                className="rounded-full bg-slate-800 border-slate-700 hover:bg-slate-700"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Aligned with Global Goals</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our work contributes to the United Nations Sustainable Development Goals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { num: '1', title: 'No Poverty', color: 'bg-red-600' },
              { num: '3', title: 'Good Health', color: 'bg-green-600' },
              { num: '4', title: 'Quality Education', color: 'bg-red-700' },
              { num: '5', title: 'Gender Equality', color: 'bg-orange-600' },
              { num: '8', title: 'Decent Work', color: 'bg-red-800' },
              { num: '10', title: 'Reduced Inequalities', color: 'bg-pink-600' },
            ].map((goal) => (
              <Card key={goal.num} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div
                    className={`${goal.color} text-white rounded-lg p-4 mb-3 font-bold text-2xl`}
                  >
                    {goal.num}
                  </div>
                  <div className="text-sm font-medium text-slate-700">{goal.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Our Partners</h2>
            <p className="text-lg text-slate-600">
              Working together to create lasting change
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {['FAWE Rwanda', 'Ecorys', 'Mor Assayag'].map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow grayscale hover:grayscale-0"
              >
                <div className="text-2xl font-bold text-slate-400">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
