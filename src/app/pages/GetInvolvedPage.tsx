import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { toast } from 'sonner';

export function GetInvolvedPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We will be in touch soon.');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-[#0066CC] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Get Involved</h1>
            <p className="text-xl">Join us in creating lasting change</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Volunteer Section */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900">Volunteer With Us</h2>
                <p className="text-slate-600 mb-6">
                  Share your skills and time to support our programs. We welcome mentors, trainers,
                  and volunteers in various capacities.
                </p>
                <ul className="space-y-2 text-slate-700 mb-6">
                  <li>• Business mentorship for entrepreneurs</li>
                  <li>• Teaching and tutoring support</li>
                  <li>• Skills training facilitation</li>
                  <li>• Administrative and technical support</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" required className="h-12" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" required className="h-12" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" className="h-12" />
                    </div>
                    <div>
                      <Label htmlFor="location">Location *</Label>
                      <Select required>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select district" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kigali">Kigali</SelectItem>
                          <SelectItem value="northern">Northern Province</SelectItem>
                          <SelectItem value="southern">Southern Province</SelectItem>
                          <SelectItem value="eastern">Eastern Province</SelectItem>
                          <SelectItem value="western">Western Province</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="inquiry">Type of Inquiry *</Label>
                    <Select required>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="volunteer">Volunteer Interest</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="donation">Donation Inquiry</SelectItem>
                        <SelectItem value="general">General Question</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us more about your interest..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#0066CC] hover:bg-[#0066CC]/90 h-12">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
