import { useState } from 'react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowRight, Calendar } from 'lucide-react';

export function ImpactPage() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedProgram, setSelectedProgram] = useState('all');

  const stories = [
    {
      title: "From Student to Business Owner: Grace's Journey",
      image: "https://images.unsplash.com/photo-1739300293361-d1b503281902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBzbWlsaW5nJTIwY29uZmlkZW50fGVufDF8fHx8MTc2OTA3OTE2NHww&ixlib=rb-4.1.0&q=80&w=400",
      excerpt: "At 22, Grace was struggling to pay for university. Through IkiraroBiz, she learned tailoring and started her own business. Today, she employs 3 other women and supports her siblings' education.",
      program: "IkiraroBiz",
      year: 2024
    },
    {
      title: "Breaking the Cycle: Divine's Educational Success",
      image: "https://images.unsplash.com/photo-1678225892688-e4a3bd3d9214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBlZHVjYXRpb24lMjByd2FuZGF8ZW58MXx8fHwxNzY5MDc5MTYyfDA&ixlib=rb-4.1.0&q=80&w=400",
      excerpt: "Missing school due to lack of menstrual products was holding Divine back. The Pad Box Initiative changed that. She's now top of her class and dreams of becoming a doctor.",
      program: "School Retention",
      year: 2025
    },
    {
      title: "Leadership Transformation: Hope's Story",
      image: "https://images.unsplash.com/flagged/photo-1570562119798-a4b2a542fe3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBsZWFkZXJzaGlwfGVufDF8fHx8MTc2OTA3OTE2NHww&ixlib=rb-4.1.0&q=80&w=400",
      excerpt: "After surviving trauma, Hope found healing through our Mental Resilience program. Today, she's a Change Champion, mentoring 15 other young women in her community.",
      program: "Mental Resilience",
      year: 2024
    }
  ];

  const beneficiariesOverTime = [
    { year: '2018', beneficiaries: 500 },
    { year: '2019', beneficiaries: 850 },
    { year: '2020', beneficiaries: 1200 },
    { year: '2021', beneficiaries: 1800 },
    { year: '2022', beneficiaries: 2800 },
    { year: '2023', beneficiaries: 3900 },
    { year: '2024', beneficiaries: 5000 },
  ];

  const programBreakdown = [
    { name: 'School Retention', value: 2000, color: '#0066CC' },
    { name: 'IkiraroBiz', value: 1800, color: '#00A896' },
    { name: 'Mental Resilience', value: 1200, color: '#FF6B35' },
  ];

  const timeline = [
    { year: '2015', milestone: 'LCEO Founded - First 50 girls supported' },
    { year: '2017', milestone: 'Launched IkiraroBiz entrepreneurship program' },
    { year: '2019', milestone: 'Expanded to 3 districts, 1,000+ beneficiaries' },
    { year: '2021', milestone: 'Introduced Mental Resilience program' },
    { year: '2023', milestone: 'Reached 3,000+ women and girls' },
    { year: '2024', milestone: '800+ businesses launched, 5,000+ lives impacted' },
  ];

  const filteredStories = stories.filter(story => {
    if (selectedProgram === 'all') return true;
    return story.program.toLowerCase().includes(selectedProgram.toLowerCase());
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Impact & Stories</h1>
          <p className="text-xl text-blue-100">
            Real lives, real transformation, measurable impact
          </p>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-3xl font-bold">Success Stories</h2>
            <div className="flex gap-4">
              <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Programs</SelectItem>
                  <SelectItem value="school">School Retention</SelectItem>
                  <SelectItem value="ikiraroBiz">IkiraroBiz</SelectItem>
                  <SelectItem value="mental">Mental Resilience</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {story.program}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">{story.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {story.excerpt}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Read Full Story <ArrowRight className="ml-1" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Dashboard */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Impact Metrics</h2>
          <p className="text-center text-muted-foreground mb-12">
            Data-driven insights into our programs' reach and effectiveness
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Line Chart */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-6">Total Beneficiaries Over Time</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={beneficiariesOverTime}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="beneficiaries" stroke="#0066CC" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Pie Chart */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-6">Program Distribution (2024)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={programBreakdown}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {programBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">School Retention Rate</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-secondary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Business Success Rate</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">$450</div>
                <div className="text-sm text-muted-foreground">Avg. Monthly Business Income</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">92%</div>
                <div className="text-sm text-muted-foreground">Beneficiary Satisfaction</div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground italic">
              Data powered by Kobo Toolbox | Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Impact Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`mb-8 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="relative">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2 text-primary font-semibold">
                        <Calendar size={16} />
                        <span>{item.year}</span>
                      </div>
                      <p className="text-muted-foreground">{item.milestone}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
