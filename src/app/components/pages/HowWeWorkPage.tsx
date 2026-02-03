import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import { Card, CardContent } from '@/app/components/ui/card';
import { GraduationCap, Shield, Briefcase, Brain, Heart, Users, Home, AlertCircle } from 'lucide-react';

export function HowWeWorkPage() {
  const programs = [
    {
      id: 'school-retention',
      title: "Girls' School Retention & Protection",
      icon: GraduationCap,
      color: 'primary',
      description: "Eliminating barriers that prevent girls from completing their education",
      components: [
        {
          name: "Pad Box Initiative",
          description: "Monthly provision of menstrual hygiene products and education to ensure girls don't miss school during their periods. Includes dignity kits with reusable pads, underwear, soap, and educational materials about menstrual health."
        },
        {
          name: "School Facilitation",
          description: "Direct support for school fees, uniforms, books, and supplies for vulnerable girls. Includes academic tutoring, parent engagement, and coordination with schools to address attendance challenges."
        },
        {
          name: "Girls' Safe Spaces",
          description: "Community-based safe spaces where girls can receive mentorship, life skills training, and peer support. Topics include sexual and reproductive health, gender-based violence prevention, and leadership development."
        }
      ]
    },
    {
      id: 'ikiraroBiz',
      title: "IkiraroBiz – Skills & Entrepreneurship",
      icon: Briefcase,
      color: 'secondary',
      description: "Empowering young women to achieve economic independence through business ownership",
      components: [
        {
          name: "Graduation Approach",
          description: "A proven methodology that combines training, capital, and coaching over 12-18 months. Participants progress through phases: intensive skills training → asset transfer (starter kits) → ongoing mentorship → graduation to self-sufficiency."
        },
        {
          name: "Business Training",
          description: "Comprehensive entrepreneurship curriculum covering business planning, financial literacy, marketing, customer service, and record-keeping. Tailored to local market opportunities in tailoring, retail, agriculture, and services."
        },
        {
          name: "Starter Capital & Assets",
          description: "Provision of business starter kits with tools, equipment, or inventory based on each woman's chosen enterprise. Includes microloans or grants to cover initial operating expenses."
        },
        {
          name: "Ongoing Mentorship",
          description: "Monthly business coaching and peer learning groups where graduates share challenges, solutions, and best practices. Access to market linkages and bulk purchasing networks."
        }
      ]
    },
    {
      id: 'human-capital',
      title: "Human Capital & Mental Resilience",
      icon: Brain,
      color: 'accent',
      description: "Building inner strength and confidence for sustainable success",
      components: [
        {
          name: "Trauma-Informed Care",
          description: "Psychosocial support for survivors of violence, abuse, or trauma. Individual and group counseling sessions facilitated by trained mental health professionals."
        },
        {
          name: "Resilience Training",
          description: "Life skills curriculum focused on self-esteem, goal-setting, problem-solving, and stress management. Helps beneficiaries develop coping strategies and emotional regulation."
        },
        {
          name: "Leadership Development",
          description: "Training for 'Change Champions'—women and girls who become advocates and mentors in their communities. Includes public speaking, community organizing, and advocacy skills."
        },
        {
          name: "Peer Support Networks",
          description: "Structured peer groups where beneficiaries share experiences, provide mutual support, and hold each other accountable to goals."
        }
      ]
    }
  ];

  const interventionAreas = [
    {
      icon: GraduationCap,
      title: "Education & School Retention",
      description: "Keeping vulnerable girls in school through holistic support"
    },
    {
      icon: Heart,
      title: "SRHR & Menstrual Health",
      description: "Ensuring access to menstrual products and reproductive health education"
    },
    {
      icon: Shield,
      title: "Gender & Protection",
      description: "Creating safe spaces and preventing gender-based violence"
    },
    {
      icon: Briefcase,
      title: "Economic Empowerment",
      description: "Building sustainable livelihoods through entrepreneurship"
    },
    {
      icon: Brain,
      title: "Human Capital & Resilience",
      description: "Fostering mental strength and leadership capacity"
    },
    {
      icon: AlertCircle,
      title: "Emergency Response",
      description: "Rapid support during crises affecting vulnerable women and girls"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h1>
          <p className="text-xl text-blue-100">
            A holistic, evidence-based approach to empowering vulnerable women and girls
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Programs</h2>
            <p className="text-muted-foreground">
              Three integrated programs that address the interconnected barriers to women's empowerment
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {programs.map((program, index) => (
              <AccordionItem 
                key={program.id} 
                value={program.id}
                className="border rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted">
                  <div className="flex items-center gap-4 text-left">
                    <div className={`w-12 h-12 bg-${program.color}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <program.icon className={`text-${program.color}`} size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{program.title}</h3>
                      <p className="text-sm text-muted-foreground">{program.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-6 pt-4">
                    {program.components.map((component, idx) => (
                      <div key={idx} className="border-l-4 border-primary/20 pl-4">
                        <h4 className="font-bold text-md mb-2">{component.name}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {component.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Areas of Intervention */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Areas of Intervention</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We address multiple dimensions of vulnerability and empowerment through targeted interventions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interventionAreas.map((area, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <area.icon className="text-primary group-hover:text-white transition-colors" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{area.title}</h3>
                  <p className="text-muted-foreground text-sm">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Holistic Approach</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We recognize that poverty and inequality are not single-issue challenges. A girl who misses school 
                due to lack of menstrual products may fall behind academically, drop out, and face limited economic 
                opportunities. A young woman without mental health support may struggle to run a successful business.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                That's why our programs are designed to work together, addressing education, economic empowerment, 
                and mental resilience as interconnected pathways to transformation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We also work at multiple levels—individual, household, community, and systems—to create sustainable 
                change that outlasts our direct interventions.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1744809482817-9a9d4fc280af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGVudHMlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY4OTc3NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students in classroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beneficiary Journey */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">A Beneficiary's Journey</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl relative z-10">
                  1
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-bold text-xl mb-2">Enrollment & Assessment</h3>
                  <p className="text-muted-foreground">
                    Community outreach identifies vulnerable girls and young women. Individual assessments determine 
                    specific needs and appropriate program pathways.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl relative z-10">
                  2
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-bold text-xl mb-2">Intervention & Support</h3>
                  <p className="text-muted-foreground">
                    Beneficiaries receive targeted support across programs—school supplies, business training, 
                    counseling—based on their unique circumstances and goals.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl relative z-10">
                  3
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-bold text-xl mb-2">Monitoring & Adaptation</h3>
                  <p className="text-muted-foreground">
                    Regular check-ins track progress, celebrate wins, and address challenges. Programs adapt to 
                    evolving needs, ensuring continuous support.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl relative z-10">
                  4
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-bold text-xl mb-2">Graduation & Beyond</h3>
                  <p className="text-muted-foreground">
                    After achieving key milestones (school completion, business sustainability, leadership roles), 
                    beneficiaries graduate but remain connected through alumni networks and opportunities to mentor others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
