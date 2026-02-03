import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function ImpactStoriesPage() {
  const stories = [
    {
      name: 'Rose Mukamana',
      title: 'From Student to Business Owner',
      excerpt: 'Rose joined LCEO in 2019 as a struggling high school student. Today, she runs a successful tailoring business employing three other young women...',
      image: 'https://images.unsplash.com/photo-1563132337-f159f484226c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBlbnRyZXByZW5ldXJ8ZW58MXx8fHwxNzY5MDI3ODE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      program: 'IkiraroBiz',
      year: '2023',
    },
    {
      name: 'Grace Uwase',
      title: 'Overcoming Trauma, Embracing Hope',
      excerpt: 'Grace\'s story is one of resilience. Through our mental health program, she found the strength to pursue her dreams of becoming a lawyer...',
      image: 'https://images.unsplash.com/photo-1686910781696-13fc94585bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZ2lybCUyMHNtaWxpbmd8ZW58MXx8fHwxNzY5MDc5MTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      program: 'Mental Resilience',
      year: '2024',
    },
    {
      name: 'Marie Umutoni',
      title: 'Teacher, Mentor, Role Model',
      excerpt: 'Marie stayed in school thanks to LCEO support. Now she teaches and mentors other girls, creating a ripple effect of change...',
      image: 'https://images.unsplash.com/photo-1666280963024-5da21c9be270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZ2lybCUyMHN0dWRlbnQlMjBlZHVjYXRpb258ZW58MXx8fHwxNzY5MDc5MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      program: 'School Retention',
      year: '2022',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-[#0066CC] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Impact & Stories</h1>
            <p className="text-xl">Real change, real impact, real lives transformed</p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Select defaultValue="all">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Programs</SelectItem>
                <SelectItem value="education">School Retention</SelectItem>
                <SelectItem value="business">IkiraroBiz</SelectItem>
                <SelectItem value="mental">Mental Resilience</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <Card key={story.name} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-[#0066CC] font-medium mb-2">
                    {story.program} • {story.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{story.title}</h3>
                  <p className="text-slate-600 mb-4">{story.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto text-[#0066CC]">
                    Read Full Story →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}