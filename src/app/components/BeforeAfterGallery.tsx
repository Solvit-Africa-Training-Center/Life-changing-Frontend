import { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

interface BeforeAfter {
  id: number;
  name: string;
  program: string;
  before: {
    image: string;
    description: string;
    year: string;
  };
  after: {
    image: string;
    description: string;
    year: string;
  };
  impact: string[];
  consent: boolean;
}

export function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  const stories: BeforeAfter[] = [
    {
      id: 1,
      name: 'Sarah\'s Tailoring Journey',
      program: 'IkiraroBiz Entrepreneurship',
      before: {
        image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600',
        description: 'Before joining LCEO, Sarah struggled to make ends meet, working odd jobs with no stable income or future prospects.',
        year: '2023',
      },
      after: {
        image: 'https://images.unsplash.com/photo-1558769132-cb1aea0a2c0e?w=600',
        description: 'Today, Sarah owns a thriving tailoring business, employs 3 people, and provides for her family with dignity and pride.',
        year: '2026',
      },
      impact: ['Business Owner', 'Employs 3 Women', 'Monthly Income: $450', 'Mentors 5 Girls'],
      consent: true,
    },
    {
      id: 2,
      name: 'Divine\'s Education Path',
      program: 'School Retention Program',
      before: {
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600',
        description: 'Divine frequently missed school due to lack of menstrual hygiene products and low self-confidence. Her grades were declining.',
        year: '2024',
      },
      after: {
        image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600',
        description: 'With LCEO\'s support, Divine now has 100% attendance, improved grades, and dreams of becoming a doctor to serve her community.',
        year: '2026',
      },
      impact: ['100% Attendance', 'Top 10% of Class', 'Science Club President', 'University Scholarship'],
      consent: true,
    },
    {
      id: 3,
      name: 'Hope\'s Healing Journey',
      program: 'Mental Resilience & Human Capital',
      before: {
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600',
        description: 'Hope struggled with trauma and had difficulty building relationships or envisioning a positive future for herself.',
        year: '2023',
      },
      after: {
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600',
        description: 'Through counseling and peer support, Hope has transformed into a confident peer counselor, helping others heal and thrive.',
        year: '2026',
      },
      impact: ['Certified Peer Counselor', 'Supports 20+ Youth', 'Community Leader', 'Mental Health Advocate'],
      consent: true,
    },
    {
      id: 4,
      name: 'Community Transformation',
      program: 'Multi-Program Impact',
      before: {
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600',
        description: 'A community facing high youth unemployment, school dropout rates, and limited opportunities for young women.',
        year: '2022',
      },
      after: {
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600',
        description: 'The same community now has thriving youth-led businesses, improved school retention, and a network of empowered young leaders.',
        year: '2026',
      },
      impact: ['50+ Businesses Launched', '85% School Retention', '200+ Women Trained', 'Community Hub Established'],
      consent: true,
    },
  ];

  const currentStory = stories[currentIndex];

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
    setShowBefore(true);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
    setShowBefore(true);
  };

  return (
    <div className="w-full">
      {/* Consent Notice */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg flex items-start gap-3">
        <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-blue-900 font-semibold mb-1">Shared with Consent & Dignity</p>
          <p className="text-xs text-blue-700">
            All stories and images are shared with full informed consent from our beneficiaries. 
            We protect privacy and celebrate transformation with permission and respect.
          </p>
        </div>
      </div>

      <Card className="overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
          <h3 className="text-2xl font-bold mb-1">{currentStory.name}</h3>
          <p className="text-blue-100">{currentStory.program}</p>
        </div>

        {/* Image Comparison */}
        <div className="relative">
          {/* Toggle Buttons */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2 bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-lg">
            <Button
              size="sm"
              variant={showBefore ? 'default' : 'ghost'}
              onClick={() => setShowBefore(true)}
              className={showBefore ? 'bg-primary' : ''}
            >
              Before
            </Button>
            <Button
              size="sm"
              variant={!showBefore ? 'default' : 'ghost'}
              onClick={() => setShowBefore(false)}
              className={!showBefore ? 'bg-primary' : ''}
            >
              After
            </Button>
          </div>

          {/* Images */}
          <div className="relative h-96">
            <img
              src={showBefore ? currentStory.before.image : currentStory.after.image}
              alt={showBefore ? 'Before' : 'After'}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            
            {/* Year Badge */}
            <Badge className="absolute bottom-4 right-4 bg-white text-gray-900">
              {showBefore ? currentStory.before.year : currentStory.after.year}
            </Badge>
          </div>
        </div>

        {/* Description & Impact */}
        <CardContent className="p-6">
          <p className="text-gray-700 mb-6">
            {showBefore ? currentStory.before.description : currentStory.after.description}
          </p>

          {!showBefore && (
            <div>
              <h4 className="font-semibold mb-3">Transformative Impact:</h4>
              <div className="grid grid-cols-2 gap-2">
                {currentStory.impact.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-green-50 p-3 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-green-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>

        {/* Navigation */}
        <div className="flex items-center justify-between p-6 border-t">
          <Button onClick={prevStory} variant="outline" size="sm">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous Story
          </Button>
          
          <div className="flex gap-2">
            {stories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setShowBefore(true);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <Button onClick={nextStory} variant="outline" size="sm">
            Next Story
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
