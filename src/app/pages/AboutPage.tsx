import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Card, CardContent } from '@/app/components/ui/card';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Linkedin } from 'lucide-react';

export function AboutPage() {
  const team = [
    {
      name: 'Dr. Amina Mugisha',
      role: 'Executive Director',
      bio: 'Over 15 years of experience in development work and gender empowerment in East Africa.',
      image:
        'https://images.unsplash.com/photo-1679332878591-17aa292e3c6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyd2FuZGElMjBidXNpbmVzcyUyMHdvbWFufGVufDF8fHx8MTc2OTA3OTE0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Jean-Claude Nkurunziza',
      role: 'Program Director',
      bio: 'Expert in entrepreneurship training and economic empowerment with a focus on youth development.',
      image:
        'https://images.unsplash.com/photo-1563132337-f159f484226c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBlbnRyZXByZW5ldXJ8ZW58MXx8fHwxNzY5MDI3ODE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Grace Uwimana',
      role: 'Mental Health Coordinator',
      bio: 'Licensed psychologist specializing in trauma recovery and resilience building in vulnerable communities.',
      image:
        'https://images.unsplash.com/photo-1686910781696-13fc94585bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZ2lybCUyMHNtaWxpbmd8ZW58MXx8fHwxNzY5MDc5MTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Patrick Habimana',
      role: 'Education Programs Manager',
      bio: 'Former teacher with deep expertise in girls education and school retention strategies.',
      image:
        'https://images.unsplash.com/photo-1666280963024-5da21c9be270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZ2lybCUyMHN0dWRlbnQlMjBlZHVjYXRpb258ZW58MXx8fHwxNzY5MDc5MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-[#0066CC] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About LCEO</h1>
            <p className="text-xl">
              Empowering change, transforming lives, building futures
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="who" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              <TabsTrigger value="who">Who We Are</TabsTrigger>
              <TabsTrigger value="vision">Vision</TabsTrigger>
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
            </TabsList>

            {/* Who We Are */}
            <TabsContent value="who" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-slate-900">
                    Transforming Lives Since 2015
                  </h2>
                  <div className="prose prose-lg text-slate-700 space-y-4">
                    <p>
                      Life-Changing Endeavor Organization (LCEO) was founded in 2015 with a simple
                      yet powerful vision: to create a Rwanda where every young woman and girl has
                      the opportunity to thrive, regardless of their circumstances.
                    </p>
                    <p>
                      We work in some of Rwanda's most vulnerable communities, providing
                      comprehensive support that addresses the root causes of inequality. Our
                      programs combine education support, economic empowerment, health services, and
                      mental resilience training to create sustainable, lasting change.
                    </p>
                    <p>
                      What sets us apart is our holistic, community-based approach. We don't just
                      provide services—we build movements. Through our Rugero Rwiza Community Change
                      Model, we engage families, communities, and local leaders to create an
                      environment where girls and young women can flourish.
                    </p>
                    <p>
                      Today, LCEO operates in 8 districts across Rwanda, reaching over 5,000
                      beneficiaries annually. Our graduates don't just survive—they thrive as
                      entrepreneurs, educators, community leaders, and change-makers.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1768814667300-8c9e2007b949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tZW4lMjBjb21tdW5pdHl8ZW58MXx8fHwxNzY5MDc5MTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="LCEO community"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Vision */}
            <TabsContent value="vision">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-12">
                  <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-8">
                      <svg
                        className="w-20 h-20 mx-auto text-[#0066CC] mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                    <blockquote className="text-4xl font-bold text-slate-900 leading-relaxed mb-8">
                      "A society where young women and girls are mentally strong, educated and
                      economically empowered—free to lead and thrive."
                    </blockquote>
                    <p className="text-lg text-slate-600">
                      We envision a Rwanda where gender inequality is a thing of the past, where
                      every girl completes her education, and where young women are economic leaders
                      in their communities. Our vision is a society transformed from within—where
                      empowered women lift up their families, communities, and nation.
                    </p>
                  </div>
                  <div className="mt-12 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1686910781696-13fc94585bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZ2lybCUyMHNtaWxpbmd8ZW58MXx8fHwxNzY5MDc5MTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Vision imagery"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Mission */}
            <TabsContent value="mission">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-12">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF6B35]/10 mb-6">
                        <svg
                          className="h-8 w-8 text-[#FF6B35]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Mission</h2>
                      <div className="prose prose-lg text-slate-700 space-y-4">
                        <p>
                          To empower vulnerable young women and girls in Rwanda through integrated
                          programs that provide:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Quality education and school retention support</li>
                          <li>Economic empowerment and entrepreneurship training</li>
                          <li>Sexual and reproductive health education</li>
                          <li>Mental health and resilience building</li>
                          <li>Safe spaces and protection services</li>
                          <li>Community engagement and advocacy</li>
                        </ul>
                        <p>
                          We work hand-in-hand with communities, families, and local institutions to
                          create sustainable change that breaks the cycle of poverty and
                          inequality for generations to come.
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-xl">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1666280963024-5da21c9be270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZ2lybCUyMHN0dWRlbnQlMjBlZHVjYXRpb258ZW58MXx8fHwxNzY5MDc5MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Mission imagery"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Team */}
            <TabsContent value="team">
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-slate-900">Meet Our Team</h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Dedicated professionals committed to creating lasting change
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {team.map((member) => (
                    <Card key={member.name} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                          <ImageWithFallback
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-center mb-1 text-slate-900">
                          {member.name}
                        </h3>
                        <p className="text-[#0066CC] text-center font-medium mb-3">
                          {member.role}
                        </p>
                        <p className="text-slate-600 text-sm text-center mb-4">{member.bio}</p>
                        <div className="flex justify-center">
                          <button className="text-[#0066CC] hover:text-[#0066CC]/80 transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}
