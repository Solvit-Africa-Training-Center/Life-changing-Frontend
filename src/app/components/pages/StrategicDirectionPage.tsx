import { Card, CardContent } from '@/app/components/ui/card';
import { Target, TrendingUp, Globe, Users } from 'lucide-react';

export function StrategicDirectionPage() {
  const philosophyPoints = [
    "Gender transformation requires addressing power dynamics, not just symptoms",
    "Sustainable change comes from community ownership and leadership",
    "Economic empowerment must be paired with education and mental health",
    "Evidence and data should drive all program decisions",
  ];

  const sdgGoals = [
    { number: 1, title: 'No Poverty' },
    { number: 3, title: 'Good Health and Well-being' },
    { number: 4, title: 'Quality Education' },
    { number: 5, title: 'Gender Equality' },
    { number: 8, title: 'Decent Work and Economic Growth' },
    { number: 10, title: 'Reduced Inequalities' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Strategic Direction</h1>
          <p className="text-xl text-blue-100">
            Our framework for creating sustainable, transformative change
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                True empowerment doesn't happen in isolation. It requires addressing the root causes of inequality—
                poverty, harmful gender norms, limited access to education and healthcare, and lack of economic opportunity.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our gender-transformative approach challenges these root causes by working at multiple levels: with individuals 
                to build skills and agency, with communities to shift norms, and with systems to create enabling environments.
              </p>
              <ul className="space-y-3">
                {philosophyPoints.map((point, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1678225892688-e4a3bd3d9214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBlZHVjYXRpb24lMjByd2FuZGF8ZW58MXx8fHwxNzY5MDc5MTYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Strategic planning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Change Model */}
      <section className="py-16 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Rugero Rwiza Community Change Model (RR-CCM)</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our evidence-based framework for sustainable gender transformation
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-4 gap-0">
                <div className="bg-primary/5 p-8 border-r border-border">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                    1
                  </div>
                  <h3 className="font-bold text-lg mb-3">Awareness</h3>
                  <p className="text-sm text-muted-foreground">
                    Community dialogue on gender inequality, harmful norms, and their impacts
                  </p>
                </div>

                <div className="bg-secondary/5 p-8 border-r border-border">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                    2
                  </div>
                  <h3 className="font-bold text-lg mb-3">Skills Building</h3>
                  <p className="text-sm text-muted-foreground">
                    Training in entrepreneurship, leadership, and life skills for women and girls
                  </p>
                </div>

                <div className="bg-accent/5 p-8 border-r border-border">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                    3
                  </div>
                  <h3 className="font-bold text-lg mb-3">Action</h3>
                  <p className="text-sm text-muted-foreground">
                    Implementation of programs with measurable outcomes and community participation
                  </p>
                </div>

                <div className="bg-primary/5 p-8">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                    4
                  </div>
                  <h3 className="font-bold text-lg mb-3">Sustainability</h3>
                  <p className="text-sm text-muted-foreground">
                    Community ownership, systems change, and ongoing mentorship networks
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              This cyclical model ensures that changes are not temporary interventions, but lasting transformations 
              embedded in community structures and practices.
            </p>
          </div>
        </div>
      </section>

      {/* National and Global Alignment */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">National & Global Alignment</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3">Rwanda Vision 2050</h3>
                <p className="text-muted-foreground text-sm">
                  Contributing to Rwanda's transformation into an upper middle-income country with high quality of life 
                  for all citizens through gender equality and human capital development
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-secondary" size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3">NST2 (2024-2029)</h3>
                <p className="text-muted-foreground text-sm">
                  Aligned with National Strategy for Transformation priorities on economic development, 
                  social welfare, and gender equality
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-accent" size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3">UN SDGs</h3>
                <p className="text-muted-foreground text-sm">
                  Direct contribution to 6 Sustainable Development Goals, with measurable indicators and 
                  regular reporting on progress
                </p>
              </CardContent>
            </Card>
          </div>

          {/* SDG Goals Grid */}
          <div className="bg-muted rounded-lg p-8">
            <h3 className="font-bold text-xl text-center mb-8">Our SDG Contributions</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {sdgGoals.map((goal) => (
                <div key={goal.number} className="text-center">
                  <div className="w-full aspect-square bg-primary rounded-lg flex flex-col items-center justify-center text-white font-bold mb-2">
                    <div className="text-3xl mb-1">{goal.number}</div>
                    <div className="text-xs px-2">{goal.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Priorities */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">2024-2026 Strategic Priorities</h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Scale Impact</h3>
                    <p className="text-muted-foreground text-sm">
                      Expand from 3 districts to 10 districts, reaching 10,000 beneficiaries by 2026 while maintaining program quality and outcomes
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Strengthen M&E Systems</h3>
                    <p className="text-muted-foreground text-sm">
                      Implement digital data collection via Kobo Toolbox, real-time dashboards for donors, and rigorous impact evaluations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Diversify Funding</h3>
                    <p className="text-muted-foreground text-sm">
                      Build sustainable revenue through monthly donor program, institutional partnerships, and social enterprise initiatives
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Policy Advocacy</h3>
                    <p className="text-muted-foreground text-sm">
                      Leverage program data and beneficiary voices to advocate for policy changes at local and national levels
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
