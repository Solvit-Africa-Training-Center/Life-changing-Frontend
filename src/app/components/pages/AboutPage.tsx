import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Card, CardContent } from '@/app/components/ui/card';
import { Target, Eye, Users } from 'lucide-react';

export function AboutPage() {
  const team = [
    {
      name: "Marie Uwimana",
      role: "Executive Director",
      bio: "With over 15 years of experience in women's empowerment and development, Marie leads LCEO's strategic vision and programs.",
      image: "https://images.unsplash.com/flagged/photo-1570562119798-a4b2a542fe3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBsZWFkZXJzaGlwfGVufDF8fHx8MTc2OTA3OTE2NHww&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      name: "Grace Mukamana",
      role: "Programs Director",
      bio: "Grace oversees all program implementation, ensuring quality delivery and impact measurement across our three core programs.",
      image: "https://images.unsplash.com/photo-1739300293361-d1b503281902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBzbWlsaW5nJTIwY29uZmlkZW50fGVufDF8fHx8MTc2OTA3OTE2NHww&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      name: "Divine Niyonkuru",
      role: "Finance & Operations Manager",
      bio: "Divine manages organizational finances and operations, ensuring transparency and efficient resource allocation.",
      image: "https://images.unsplash.com/photo-1655720357761-f18ea9e5e7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBlbnRyZXByZW5ldXIlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjkwNzkxNjN8MA&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      name: "Hope Umutoni",
      role: "Community Outreach Coordinator",
      bio: "Hope builds relationships with communities and beneficiaries, ensuring our programs meet real needs on the ground.",
      image: "https://images.unsplash.com/photo-1678225892688-e4a3bd3d9214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBlZHVjYXRpb24lMjByd2FuZGF8ZW58MXx8fHwxNzY5MDc5MTYyfDA&ixlib=rb-4.1.0&q=80&w=400"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About LCEO</h1>
          <p className="text-xl text-blue-100">
            Building a Rwanda where every young woman and girl can thrive
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="who-we-are" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            <TabsTrigger value="who-we-are">Who We Are</TabsTrigger>
            <TabsTrigger value="vision">Vision</TabsTrigger>
            <TabsTrigger value="mission">Mission</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>

          {/* Who We Are */}
          <TabsContent value="who-we-are" className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Founded in 2015, Life-Changing Endeavor Organization (LCEO) emerged from a simple yet powerful belief: 
                      when you invest in a young woman or girl, you invest in an entire community.
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      We began with a small group of 50 girls in Kigali, providing menstrual health education and supplies 
                      to keep them in school. Today, we've expanded our reach to over 5,000 beneficiaries across Rwanda, 
                      offering comprehensive programs that address the interconnected barriers to women's empowerment.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Our approach is holistic and evidence-based, combining education support, entrepreneurship training, 
                      and mental health services. We don't just provide temporary aid—we build sustainable pathways to 
                      economic independence and community leadership.
                    </p>
                  </div>
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1752343781467-bf8f7e68d8d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tZW4lMjBjb21tdW5pdHklMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NjkwNzkxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Community"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Community-Centered</h3>
                  <p className="text-muted-foreground text-sm">
                    We work with communities, not for them. Our programs are co-designed with beneficiaries to ensure cultural relevance and lasting impact.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="text-secondary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Results-Driven</h3>
                  <p className="text-muted-foreground text-sm">
                    Every program is measured for impact. We use data and beneficiary feedback to continuously improve our approach.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Transparent</h3>
                  <p className="text-muted-foreground text-sm">
                    We maintain full transparency with our donors and stakeholders, sharing both successes and challenges openly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Vision */}
          <TabsContent value="vision">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-12">
                <div className="max-w-3xl mx-auto text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8">
                    <Eye className="text-white" size={40} />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                  <blockquote className="text-2xl md:text-3xl font-semibold text-primary mb-8 italic leading-relaxed">
                    "A society where young women and girls are mentally strong, educated and economically empowered—free to lead and thrive."
                  </blockquote>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We envision a Rwanda where gender no longer determines opportunity, where every girl completes her education, 
                    where women entrepreneurs drive economic growth, and where mental health support is accessible to all. 
                    This vision extends beyond individual transformation to systemic change—shifting norms, policies, and practices 
                    that perpetuate inequality.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mission */}
          <TabsContent value="mission">
            <Card>
              <CardContent className="p-12">
                <div className="max-w-3xl mx-auto">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8">
                    <Target className="text-white" size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
                  <p className="text-xl text-center mb-12 font-semibold text-secondary">
                    To empower vulnerable young women and girls in Rwanda through integrated programs that combine education, 
                    entrepreneurship, and mental resilience—creating sustainable pathways out of poverty and into leadership.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Keep Girls in School</h3>
                        <p className="text-muted-foreground">
                          Eliminate barriers to education through menstrual health support, school supplies, and safe spaces, 
                          ensuring girls complete their education without interruption.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Build Economic Independence</h3>
                        <p className="text-muted-foreground">
                          Equip young women with entrepreneurship skills, business capital, and ongoing mentorship to launch 
                          and sustain profitable enterprises that support their families.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Foster Mental Resilience</h3>
                        <p className="text-muted-foreground">
                          Provide mental health support and resilience training to help beneficiaries overcome trauma, 
                          build confidence, and develop the inner strength needed for long-term success.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Transform Communities</h3>
                        <p className="text-muted-foreground">
                          Create ripple effects of change by training community champions who advocate for gender equality, 
                          shift harmful norms, and inspire others to action.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Team */}
          <TabsContent value="team">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our dedicated team brings together diverse expertise in development, education, business, and community organizing
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <div className="text-primary text-sm font-medium mb-3">{member.role}</div>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
