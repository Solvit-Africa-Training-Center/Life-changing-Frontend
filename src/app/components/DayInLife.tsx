import { useState } from 'react';
import { Clock, MapPin, Award, Heart, Coffee, BookOpen, Users, Star } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon: any;
  image?: string;
}

interface Story {
  name: string;
  role: string;
  program: string;
  photo: string;
  timeline: TimelineEvent[];
}

export function DayInLife() {
  const stories: Story[] = [
    {
      name: 'Grace Mukamana',
      role: 'Entrepreneur & Tailoring Business Owner',
      program: 'IkiraroBiz Graduate',
      photo: 'https://images.unsplash.com/photo-1739300293361-d1b503281902?w=300',
      timeline: [
        {
          time: '6:00 AM',
          title: 'Morning Preparation',
          description: 'Wake up, prepare breakfast for my children, and review today\'s customer orders.',
          icon: Coffee,
        },
        {
          time: '8:00 AM',
          title: 'Open My Tailoring Shop',
          description: 'Arrive at my shop in the local market. Check fabric inventory and set up the sewing machines.',
          icon: Star,
          image: 'https://images.unsplash.com/photo-1558769132-cb1aea0a2c0e?w=400',
        },
        {
          time: '10:00 AM',
          title: 'Training Session',
          description: 'Meet with two young women I\'m mentoring through LCEO. Teach them advanced stitching techniques.',
          icon: Users,
        },
        {
          time: '12:30 PM',
          title: 'Lunch & Business Planning',
          description: 'Quick lunch while reviewing my business records. Thanks to LCEO training, I track all expenses and profits.',
          icon: BookOpen,
        },
        {
          time: '2:00 PM',
          title: 'Client Fittings',
          description: 'Meet with customers for dress fittings. Each satisfied customer brings more referrals!',
          icon: Award,
        },
        {
          time: '5:00 PM',
          title: 'LCEO Alumni Meeting',
          description: 'Join virtual meeting with other IkiraroBiz graduates. We share challenges and celebrate wins together.',
          icon: Heart,
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400',
        },
      ],
    },
    {
      name: 'Divine Uwase',
      role: 'High School Student & Future Doctor',
      program: 'School Retention Program',
      photo: 'https://images.unsplash.com/photo-1678225892688-e4a3bd3d9214?w=300',
      timeline: [
        {
          time: '6:30 AM',
          title: 'Morning Routine',
          description: 'Wake up and prepare for school. Thanks to LCEO\'s Pad Box, I never have to worry about missing school.',
          icon: Coffee,
        },
        {
          time: '7:30 AM',
          title: 'School Classes Begin',
          description: 'Attend biology and chemistry classes. My dream is to become a doctor and help my community.',
          icon: BookOpen,
          image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400',
        },
        {
          time: '12:00 PM',
          title: 'Lunch with Study Group',
          description: 'Meet with my study group. We help each other with difficult subjects.',
          icon: Users,
        },
        {
          time: '3:00 PM',
          title: 'After-School Mentorship',
          description: 'LCEO mentor session. My mentor is a university graduate who guides me on my career path.',
          icon: Heart,
        },
        {
          time: '5:00 PM',
          title: 'Homework & Study',
          description: 'Complete homework and study for upcoming exams. Education is my pathway to a better future.',
          icon: Star,
        },
        {
          time: '7:00 PM',
          title: 'Family Time & Reflection',
          description: 'Help with chores and spend time with family. Grateful for the opportunity to pursue my dreams.',
          icon: Award,
        },
      ],
    },
    {
      name: 'Hope Mutoni',
      role: 'Peer Counselor & Change Champion',
      program: 'Mental Resilience Program',
      photo: 'https://images.unsplash.com/flagged/photo-1570562119798-a4b2a542fe3b?w=300',
      timeline: [
        {
          time: '7:00 AM',
          title: 'Morning Meditation',
          description: 'Start my day with meditation and affirmations. LCEO taught me these resilience techniques.',
          icon: Heart,
        },
        {
          time: '9:00 AM',
          title: 'Peer Support Session',
          description: 'Facilitate a peer support group for young women dealing with trauma. Share coping strategies.',
          icon: Users,
          image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400',
        },
        {
          time: '11:00 AM',
          title: 'Community Outreach',
          description: 'Visit community members to raise awareness about mental health. Breaking stigma one conversation at a time.',
          icon: MapPin,
        },
        {
          time: '1:00 PM',
          title: 'Counselor Training',
          description: 'Attend training session with LCEO\'s professional counselors. Continuous learning is key.',
          icon: BookOpen,
        },
        {
          time: '3:00 PM',
          title: 'One-on-One Mentoring',
          description: 'Meet with mentees individually. Listening to their stories and offering support.',
          icon: Coffee,
        },
        {
          time: '6:00 PM',
          title: 'Reflection & Planning',
          description: 'Journal about today\'s impact and plan tomorrow\'s activities. Every day brings hope and healing.',
          icon: Star,
        },
      ],
    },
  ];

  const [selectedStory, setSelectedStory] = useState(0);
  const currentStory = stories[selectedStory];

  return (
    <div className="w-full">
      <Tabs defaultValue="0" className="w-full" onValueChange={(v) => setSelectedStory(parseInt(v))}>
        <TabsList className="w-full grid grid-cols-3 mb-6">
          {stories.map((story, idx) => (
            <TabsTrigger key={idx} value={idx.toString()} className="text-xs sm:text-sm">
              {story.name.split(' ')[0]}
            </TabsTrigger>
          ))}
        </TabsList>

        {stories.map((story, storyIdx) => (
          <TabsContent key={storyIdx} value={storyIdx.toString()}>
            {/* Story Header */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <img
                    src={story.photo}
                    alt={story.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{story.name}</h3>
                    <p className="text-gray-600">{story.role}</p>
                    <p className="text-sm text-primary font-semibold mt-1">{story.program}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

              <div className="space-y-8">
                {story.timeline.map((event, idx) => {
                  const Icon = event.icon;
                  return (
                    <div key={idx} className="relative flex gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-16 flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-xs font-semibold text-gray-600 mt-2">{event.time}</p>
                      </div>

                      {/* Content */}
                      <Card className="flex-1">
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-lg mb-2">{event.title}</h4>
                          <p className="text-gray-700 mb-3">{event.description}</p>
                          {event.image && (
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
