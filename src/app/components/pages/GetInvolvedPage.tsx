import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Users, Handshake, Mail, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

interface GetInvolvedPageProps {
  onNavigate: (page: string) => void;
}

export function GetInvolvedPage({ onNavigate }: GetInvolvedPageProps) {
  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We\'ll be in touch soon.');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll respond within 24 hours.');
  };

  const volunteerOpportunities = [
    {
      title: "Program Mentors",
      description: "Guide beneficiaries in their entrepreneurship journey, providing business advice and encouragement",
      commitment: "4 hours/month",
      location: "Kigali or Remote"
    },
    {
      title: "Skills Trainers",
      description: "Teach vocational skills like tailoring, hairdressing, or digital literacy to young women",
      commitment: "8 hours/month",
      location: "In-person (Kigali)"
    },
    {
      title: "Content Creators",
      description: "Help document beneficiary stories through photography, videography, or writing",
      commitment: "Flexible",
      location: "Remote"
    },
    {
      title: "Administrative Support",
      description: "Assist with data entry, donor communications, or event planning",
      commitment: "Flexible",
      location: "Remote or Kigali"
    }
  ];

  const districts = [
    'Gasabo', 'Kicukiro', 'Nyarugenge', 'Bugesera', 'Gatsibo', 
    'Kayonza', 'Kirehe', 'Ngoma', 'Rwamagana', 'Other'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl text-blue-100">
            Join us in empowering the next generation of women leaders in Rwanda
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Ways to Make a Difference</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('donate')}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3">Become a Monthly Donor</h3>
                <p className="text-muted-foreground mb-4">
                  Provide sustainable support that changes lives every single month
                </p>
                <Button variant="outline">Start Giving</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-secondary" size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3">Volunteer Your Time</h3>
                <p className="text-muted-foreground mb-4">
                  Share your skills and expertise to mentor and train beneficiaries
                </p>
                <Button variant="outline" onClick={() => {
                  document.getElementById('volunteer-section')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="text-accent" size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3">Partner With Us</h3>
                <p className="text-muted-foreground mb-4">
                  Collaborate on programs, sponsor initiatives, or provide pro-bono services
                </p>
                <Button variant="outline" onClick={() => {
                  document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Get in Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section id="volunteer-section" className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Volunteer Opportunities</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Whether you have a few hours a month or can make a larger commitment, there's a way for you to contribute
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{opportunity.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{opportunity.description}</p>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded">
                      {opportunity.commitment}
                    </span>
                    <span className="px-2 py-1 bg-secondary/10 text-secondary rounded">
                      {opportunity.location}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Volunteer Form */}
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Volunteer Interest Form</h3>
              <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="v-name">Full Name *</Label>
                    <Input id="v-name" required />
                  </div>
                  <div>
                    <Label htmlFor="v-email">Email *</Label>
                    <Input id="v-email" type="email" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="v-phone">Phone</Label>
                    <Input id="v-phone" type="tel" />
                  </div>
                  <div>
                    <Label htmlFor="v-location">Location *</Label>
                    <Select required>
                      <SelectTrigger id="v-location">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kigali">Kigali</SelectItem>
                        <SelectItem value="rwanda">Other Rwanda</SelectItem>
                        <SelectItem value="international">International</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="v-interest">Area of Interest *</Label>
                  <Select required>
                    <SelectTrigger id="v-interest">
                      <SelectValue placeholder="Select area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mentor">Mentorship</SelectItem>
                      <SelectItem value="trainer">Skills Training</SelectItem>
                      <SelectItem value="content">Content Creation</SelectItem>
                      <SelectItem value="admin">Administrative Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="v-skills">Skills & Experience</Label>
                  <Textarea 
                    id="v-skills" 
                    placeholder="Tell us about your relevant skills, experience, and why you want to volunteer with LCEO"
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="v-availability">Availability</Label>
                  <Textarea 
                    id="v-availability" 
                    placeholder="How many hours per month can you commit? Any specific days/times?"
                    rows={3}
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Submit Interest
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-section" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground">
              Questions? Partnership opportunities? We'd love to hear from you.
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="c-name">Full Name *</Label>
                    <Input id="c-name" required />
                  </div>
                  <div>
                    <Label htmlFor="c-email">Email *</Label>
                    <Input id="c-email" type="email" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="c-phone">Phone</Label>
                    <Input id="c-phone" type="tel" />
                  </div>
                  <div>
                    <Label htmlFor="c-location">Location</Label>
                    <Select>
                      <SelectTrigger id="c-location">
                        <SelectValue placeholder="Select district" />
                      </SelectTrigger>
                      <SelectContent>
                        {districts.map((district) => (
                          <SelectItem key={district} value={district.toLowerCase()}>
                            {district}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="c-type">Type of Inquiry *</Label>
                  <Select required>
                    <SelectTrigger id="c-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      <SelectItem value="donation">Donation Inquiry</SelectItem>
                      <SelectItem value="volunteer">Volunteer Question</SelectItem>
                      <SelectItem value="media">Media Request</SelectItem>
                      <SelectItem value="beneficiary">Become a Beneficiary</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="c-message">Message *</Label>
                  <Textarea 
                    id="c-message" 
                    placeholder="Please provide details about your inquiry..."
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="mx-auto mb-6" size={48} />
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get monthly updates on our impact, beneficiary stories, and ways to get involved
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white text-foreground h-12"
            />
            <Button className="bg-accent hover:bg-accent/90 h-12 px-8">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-blue-100 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
