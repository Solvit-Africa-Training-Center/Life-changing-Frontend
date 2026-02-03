import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Card, CardContent } from '@/app/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';
import {
  GraduationCap,
  Heart,
  TrendingUp,
  Shield,
  Users,
  AlertCircle,
} from 'lucide-react';

export function HowWeWorkPage() {
  const programs = [
    {
      id: 'education',
      title: "Girls' School Retention & Protection",
      icon: GraduationCap,
      color: 'bg-blue-500',
      description: 'Keeping girls in school and creating safe learning environments',
      initiatives: [
        'Pad Box Initiative - providing menstrual hygiene products',
        'School Facilitation - fees, materials, and uniforms',
        'Girls Safe Spaces - peer support and mentorship',
        'School-based counseling services',
      ],
    },
    {
      id: 'business',
      title: 'IkiraroBiz – Skills & Entrepreneurship',
      icon: TrendingUp,
      color: 'bg-green-500',
      description: 'Building sustainable livelihoods through business training',
      initiatives: [
        'Graduation Approach methodology',
        'Vocational skills training',
        'Business development support',
        'Seed capital and equipment',
        'Ongoing mentorship and coaching',
      ],
    },
    {
      id: 'mental',
      title: 'Human Capital & Mental Resilience',
      icon: Heart,
      color: 'bg-red-500',
      description: 'Strengthening mental health and building resilience',
      initiatives: [
        'Trauma-informed counseling',
        'Life skills training',
        'Leadership development',
        'Peer support groups',
        'Community healing circles',
      ],
    },
  ];

  const interventions = [
    { icon: GraduationCap, title: 'Education & School Retention', color: 'text-blue-600' },
    { icon: Heart, title: 'SRHR & Menstrual Health', color: 'text-pink-600' },
    { icon: Shield, title: 'Gender & Protection', color: 'text-purple-600' },
    { icon: TrendingUp, title: 'Economic Empowerment', color: 'text-green-600' },
    { icon: Users, title: 'Human Capital & Resilience', color: 'text-orange-600' },
    { icon: AlertCircle, title: 'Emergency Response', color: 'text-red-600' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-[#0066CC] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">How We Work</h1>
            <p className="text-xl">
              Our holistic, community-based approach creates lasting change
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Our Programs</h2>

            <Accordion type="single" collapsible className="space-y-4">
              {programs.map((program) => (
                <AccordionItem key={program.id} value={program.id} className="border rounded-lg">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <div className={`${program.color} p-3 rounded-lg`}>
                        <program.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{program.title}</h3>
                        <p className="text-sm text-slate-600">{program.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <ul className="space-y-2 mt-4">
                      {program.initiatives.map((initiative, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-[#0066CC] mt-1">✓</span>
                          <span className="text-slate-700">{initiative}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Areas of Intervention */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Areas of Intervention</h2>
            <p className="text-lg text-slate-600">
              Comprehensive support across six key areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {interventions.map((area, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <CardContent className="p-6 text-center">
                  <area.icon className={`h-12 w-12 mx-auto mb-4 ${area.color}`} />
                  <h3 className="font-semibold text-slate-900">{area.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Hover to learn more
                  </p>
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
