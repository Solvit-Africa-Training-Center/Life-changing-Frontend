import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Lock, Heart, Check } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function DonatePage() {
  const [amount, setAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('monthly');
  const [program, setProgram] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
    updates: false,
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
    toast.success('Thank you for your generous donation!');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showThankYou) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <section className="flex-1 flex items-center justify-center py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto border-0 shadow-xl">
              <CardContent className="p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                  <Check className="h-10 w-10 text-green-600" />
                </div>
                <h1 className="text-4xl font-bold mb-4 text-slate-900">Thank You!</h1>
                <p className="text-lg text-slate-600 mb-6">
                  Your generous ${customAmount || amount} {donationType} donation will make a real difference in the lives of young women and girls in Rwanda.
                </p>
                <div className="bg-slate-50 p-6 rounded-lg mb-6">
                  <p className="text-sm text-slate-700 mb-2">
                    📧 A receipt has been sent to your email
                  </p>
                  <p className="text-sm text-slate-700">
                    💌 You'll receive monthly impact updates showing exactly how your support is creating change
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-slate-600 mb-4">Share your support and inspire others:</p>
                  <div className="flex gap-3 justify-center">
                    <Button className="bg-[#3b5998] hover:bg-[#3b5998]/90">
                      Share on Facebook
                    </Button>
                    <Button className="bg-[#1da1f2] hover:bg-[#1da1f2]/90">
                      Share on Twitter
                    </Button>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t">
                  <Button onClick={() => setShowThankYou(false)} variant="outline">
                    Make Another Donation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0066CC] to-[#00A896] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Your Monthly Support Changes Lives</h1>
            <p className="text-xl">
              Sustain education, livelihoods, and leadership for vulnerable girls and women
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit}>
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  {/* Donation Type */}
                  <div className="mb-8">
                    <Label className="text-lg font-semibold mb-4 block">Donation Frequency</Label>
                    <Tabs value={donationType} onValueChange={setDonationType} className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="monthly">Monthly</TabsTrigger>
                        <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
                        <TabsTrigger value="yearly">Yearly</TabsTrigger>
                        <TabsTrigger value="onetime">One-Time</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>

                  {/* Amount Selection */}
                  <div className="mb-8">
                    <Label className="text-lg font-semibold mb-4 block">Donation Amount</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      {['25', '50', '100', '250'].map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => {
                            setAmount(amt);
                            setCustomAmount('');
                          }}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            amount === amt && !customAmount
                              ? 'border-[#0066CC] bg-[#0066CC]/10 text-[#0066CC] font-semibold'
                              : 'border-slate-200 hover:border-[#0066CC]/50'
                          }`}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>
                    <div>
                      <Label htmlFor="custom-amount" className="mb-2 block text-sm">
                        Or enter custom amount
                      </Label>
                      <Input
                        id="custom-amount"
                        type="number"
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setAmount('');
                        }}
                        className="h-12"
                      />
                    </div>

                    {/* Impact Descriptions */}
                    <div className="mt-6 p-6 bg-slate-50 rounded-lg">
                      <h4 className="font-semibold mb-3 text-[#0066CC]">Your Impact:</h4>
                      <div className="space-y-2 text-sm text-slate-700">
                        <p>💝 $25/month = School supplies and materials for 1 girl</p>
                        <p>🎒 $50/month = Business starter kit for aspiring entrepreneur</p>
                        <p>🌟 $100/month = Full program support for one beneficiary</p>
                        <p>🚀 $250/month = Comprehensive support for 3 girls</p>
                      </div>
                    </div>
                  </div>

                  {/* Program Selection */}
                  <div className="mb-8">
                    <Label htmlFor="program" className="text-lg font-semibold mb-4 block">
                      Choose Where Your Donation Goes
                    </Label>
                    <Select value={program} onValueChange={setProgram}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Support (Where Most Needed)</SelectItem>
                        <SelectItem value="education">Girls' School Retention Program</SelectItem>
                        <SelectItem value="business">IkiraroBiz Entrepreneurship</SelectItem>
                        <SelectItem value="mental">Mental Resilience Programs</SelectItem>
                        <SelectItem value="health">SRHR & Health Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Payment Methods */}
                  <div className="mb-8">
                    <Label className="text-lg font-semibold mb-4 block">Payment Method</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { name: 'Mobile Money', icon: '📱' },
                        { name: 'Bank Transfer', icon: '🏦' },
                        { name: 'Credit Card', icon: '💳' },
                        { name: 'PayPal', icon: '🅿️' },
                      ].map((method) => (
                        <button
                          key={method.name}
                          type="button"
                          className="p-4 border-2 border-slate-200 rounded-lg hover:border-[#0066CC]/50 transition-colors text-center"
                        >
                          <div className="text-3xl mb-2">{method.icon}</div>
                          <div className="text-sm font-medium">{method.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Donor Information */}
                  <div className="mb-8 space-y-4">
                    <h3 className="text-lg font-semibold">Your Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Label htmlFor="country">Country *</Label>
                        <Select
                          value={formData.country}
                          onValueChange={(value) => setFormData({ ...formData, country: value })}
                        >
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rw">Rwanda</SelectItem>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="flex items-start gap-2 pt-2">
                      <Checkbox
                        id="updates"
                        checked={formData.updates}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, updates: checked as boolean })
                        }
                      />
                      <label htmlFor="updates" className="text-sm text-slate-600 cursor-pointer">
                        Send me monthly impact updates showing how my donation is making a difference
                      </label>
                    </div>
                  </div>

                  {/* Trust Signals */}
                  <div className="mb-8 p-6 bg-slate-50 rounded-lg">
                    <div className="flex flex-wrap gap-6 justify-center items-center">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Lock className="h-5 w-5 text-green-600" />
                        <span className="font-medium">Secure Payment</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Heart className="h-5 w-5 text-red-600" />
                        <span className="font-medium">100% goes to programs</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">Tax-deductible</span>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 h-14 text-lg"
                  >
                    Complete My ${customAmount || amount} {donationType === 'onetime' ? 'One-Time' : donationType.charAt(0).toUpperCase() + donationType.slice(1)} Donation
                  </Button>

                  <p className="text-xs text-center text-slate-500 mt-4">
                    By proceeding, you agree to our{' '}
                    <a href="#" className="underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="underline">
                      Privacy Policy
                    </a>
                  </p>
                </CardContent>
              </Card>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
