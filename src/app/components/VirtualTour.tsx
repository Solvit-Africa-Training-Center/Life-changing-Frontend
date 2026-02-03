import { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Users, Building, Heart } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

interface TourStop {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  highlights: string[];
  icon: any;
}

export function VirtualTour() {
  const [currentStop, setCurrentStop] = useState(0);

  const tourStops: TourStop[] = [
    {
      id: 1,
      title: 'Bugesera Community Center',
      location: 'Bugesera District, Eastern Province',
      description: 'Our main community hub where young women gather for training, mentorship, and entrepreneurship programs. This center serves over 200 beneficiaries monthly.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      highlights: ['Training Workshops', 'Computer Lab', 'Meeting Spaces', 'Resource Library'],
      icon: Building,
    },
    {
      id: 2,
      title: 'IkiraroBiz Training Workshop',
      location: 'Kigali City',
      description: 'Our entrepreneurship training center equipped with sewing machines, food processing equipment, and business development resources.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
      highlights: ['Tailoring Studio', 'Food Processing Lab', 'Business Incubator', 'Mentorship Room'],
      icon: Users,
    },
    {
      id: 3,
      title: 'School Partnership Sites',
      location: 'Gasabo, Kicukiro, Nyarugenge Districts',
      description: 'Partner schools where we implement our School Retention Program, providing menstrual hygiene products and educational support to keep girls in school.',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
      highlights: ['15 Partner Schools', 'Pad Box Distribution', 'Counseling Services', 'Academic Support'],
      icon: MapPin,
    },
    {
      id: 4,
      title: 'Mental Resilience Center',
      location: 'Nyarugenge District',
      description: 'A safe space for trauma counseling, peer support groups, and mental health workshops. Our trained counselors provide compassionate care.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800',
      highlights: ['Counseling Rooms', 'Group Therapy Space', 'Meditation Garden', 'Resource Center'],
      icon: Heart,
    },
  ];

  const nextStop = () => {
    setCurrentStop((prev) => (prev + 1) % tourStops.length);
  };

  const prevStop = () => {
    setCurrentStop((prev) => (prev - 1 + tourStops.length) % tourStops.length);
  };

  const current = tourStops[currentStop];
  const Icon = current.icon;

  return (
    <div className="w-full">
      <Card className="overflow-hidden">
        {/* Image */}
        <div className="relative h-96">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Navigation */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              onClick={prevStop}
              size="icon"
              variant="secondary"
              className="rounded-full bg-white/90 hover:bg-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextStop}
              size="icon"
              variant="secondary"
              className="rounded-full bg-white/90 hover:bg-white"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Stop indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {tourStops.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStop(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentStop ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-1">{current.title}</h3>
              <div className="flex items-center text-gray-600 gap-1">
                <MapPin className="w-4 h-4" />
                <p className="text-sm">{current.location}</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mb-4">{current.description}</p>

          <div>
            <h4 className="font-semibold mb-2">Highlights:</h4>
            <div className="flex flex-wrap gap-2">
              {current.highlights.map((highlight, idx) => (
                <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-700">
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
