import { useState } from 'react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Checkbox } from '@/app/components/ui/checkbox';
import { CreditCard, Smartphone, Building2, Lock, Check, Heart } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export function DonatePage() {
  const [donationType, setDonationType] = useState('monthly');
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [program, setProgram] = useState('where-needed');
  const [showThankYou, setShowThankYou] = useState(false);

  const presetAmounts = {
    monthly: [25, 50, 100, 250],
    quarterly: [75, 150, 300, 750],
    yearly: [300, 600, 1200, 3000],
    'one-time': [25, 50, 100, 500]
  };

  const impactDescriptions = {
    25: "School supplies and pad box for 1 girl for a month",
    50: "Business starter kit with tools and initial inventory",
    75: "School supplies for 1 girl for 3 months",
    100: "Full monthly support for 1 beneficiary across all programs",
    150: "Business starter kit and 3 months of mentorship",
    250: "Support 2 beneficiaries with comprehensive services",
    300: "Annual school support for 1 girl",
    500: "Launch 5 businesses through IkiraroBiz",
    600: "Annual support for 1 beneficiary",
    750: "Support 5 beneficiaries for 3 months",
    1200: "Annual comprehensive support for 1 beneficiary",
    3000: "Transform 2 lives with full annual support"
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
    toast.success('Thank you for your donation!');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  if (showThankYou) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full"
        >
          <Card className="border-2 border-gray-100 shadow-2xl overflow-hidden rounded-2xl">
            <div className="bg-primary h-2 w-full"></div>
            <CardContent className="p-12 text-center">
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner animate-in fade-in zoom-in duration-500">
                <Check className="text-green-600" size={48} />
              </div>
              <h1 className="text-4xl font-extrabold mb-4 text-black">Thank You!</h1>
              <p className="text-lg text-black mb-8 max-w-lg mx-auto">
                Your generous <span className="font-bold text-primary">{donationType}</span> donation of <span className="font-bold text-2xl text-accent">${customAmount || selectedAmount}</span> will change lives.
              </p>

              <div className="bg-gray-50 rounded-xl p-8 mb-8 border border-gray-100 text-left">
                <h3 className="font-bold text-black mb-4 text-lg">Next Steps:</h3>
                <ul className="space-y-3 text-black">
                  <li className="flex gap-3 items-center"><div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"><Check size={14} className="text-primary" /></div> Receipt sent to your email</li>
                  <li className="flex gap-3 items-center"><div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"><Check size={14} className="text-primary" /></div> Monthly impact report subscription activated</li>
                  <li className="flex gap-3 items-center"><div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"><Check size={14} className="text-primary" /></div> Access to donor dashboard granted</li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="text-sm text-black font-medium uppercase tracking-wide">Share your impact</div>
                <div className="flex gap-4 justify-center mb-8">
                  <Button variant="outline" className="gap-2 border-gray-200 text-black hover:border-primary hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                    Facebook
                  </Button>
                  <Button variant="outline" className="gap-2 border-gray-200 text-black hover:border-primary hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                    Twitter
                  </Button>
                </div>
                <Button onClick={() => setShowThankYou(false)} variant="ghost" className="text-black hover:text-primary font-bold">
                  Return to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* Hero Section - UPDATED TO LIGHT THEME */}
      <section className="bg-gray-50 relative overflow-hidden text-black py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-bold text-black mb-6 shadow-sm">
              Join 500+ Monthly Donors
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-black">
              Make a Real Difference
            </h1>
            <p className="text-xl text-black max-w-2xl mx-auto leading-relaxed font-medium">
              Your contribution directly funds education, healthcare, and economic empowerment programs for women and girls in Rwanda.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-20 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Donation Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="shadow-xl border border-gray-100 rounded-2xl overflow-hidden bg-white">
              <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardContent className="p-8 md:p-10">
                <form onSubmit={handleSubmit}>
                  {/* Donation Type Toggles */}
                  <div className="mb-10">
                    <Label className="text-sm font-bold uppercase tracking-wider text-black mb-4 block">Frequency</Label>
                    <Tabs value={donationType} onValueChange={setDonationType} className="w-full">
                      <TabsList className="grid w-full grid-cols-4 bg-gray-100 p-1.5 rounded-xl h-auto">
                        {['monthly', 'quarterly', 'yearly', 'one-time'].map(type => (
                          <TabsTrigger
                            key={type}
                            value={type}
                            className="capitalize py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-black font-bold transition-all duration-300"
                          >
                            {type.replace('-', ' ')}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </Tabs>
                  </div>

                  {/* Amount Grid */}
                  <div className="mb-10">
                    <Label className="text-sm font-bold uppercase tracking-wider text-black mb-4 block">Select Amount</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {presetAmounts[donationType as keyof typeof presetAmounts].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount('');
                          }}
                          className={`py-4 px-2 rounded-xl text-xl font-bold border-2 transition-all duration-200 ${selectedAmount === amount && !customAmount
                            ? 'border-primary bg-primary text-white shadow-lg transform -translate-y-1'
                            : 'border-gray-200 text-black hover:border-primary hover:text-primary bg-white'
                            }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-black font-bold">$</span>
                      <Input
                        id="custom-amount"
                        type="number"
                        placeholder="Other amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(0);
                        }}
                        className="h-14 pl-8 text-lg font-bold border-gray-200 text-black focus:border-primary focus:ring-primary rounded-xl"
                      />
                    </div>

                    <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-5 flex gap-4 items-start">
                      <div className="bg-white p-2 rounded-full shadow-sm text-primary shrink-0 border border-gray-100">
                        <Heart size={20} fill="currentColor" />
                      </div>
                      <div>
                        <p className="font-bold text-black text-lg mb-1">Your Impact</p>
                        <p className="text-black leading-relaxed">
                          {impactDescriptions[selectedAmount as keyof typeof impactDescriptions] ||
                            `Your contribution of ${donationType === 'one-time' ? 'a' : 'a monthly'} $${customAmount || selectedAmount} helps us provide essential resources where they are needed most.`}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Program Selection */}
                  <div className="mb-10">
                    <Label className="text-sm font-bold uppercase tracking-wider text-black mb-4 block">Designation</Label>
                    <Select value={program} onValueChange={setProgram}>
                      <SelectTrigger className="h-14 text-lg border-gray-200 rounded-xl text-black">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="where-needed" className="py-3 text-base text-black">Where Most Needed</SelectItem>
                        <SelectItem value="school-retention" className="py-3 text-base text-black">Girls' School Retention</SelectItem>
                        <SelectItem value="ikiraroBiz" className="py-3 text-base text-black">IkiraroBiz Entrepreneurship</SelectItem>
                        <SelectItem value="mental-resilience" className="py-3 text-base text-black">Mental Resilience</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Donor Info */}
                  <div className="mb-10">
                    <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                      <span className="bg-secondary/20 text-secondary w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                      Your Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="full-name" className="text-black font-semibold">Full Name</Label>
                        <Input id="full-name" required className="h-12 rounded-lg border-gray-200 text-black focus:border-primary" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-black font-semibold">Email Address</Label>
                        <Input id="email" type="email" required className="h-12 rounded-lg border-gray-200 text-black focus:border-primary" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-start space-x-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <Checkbox id="updates" defaultChecked className="mt-1 border-gray-300 text-primary data-[state=checked]:bg-primary" />
                      <label htmlFor="updates" className="text-sm text-black cursor-pointer leading-relaxed font-medium">
                        Yes, I want to receive impact updates. We promise not to spam you.
                      </label>
                    </div>
                  </div>

                  {/* Payment */}
                  <div className="mb-10">
                    <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                      <span className="bg-secondary/20 text-secondary w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                      Payment Details
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['Card', 'Mobile', 'Bank', 'PayPal'].map((method, i) => (
                        <button
                          key={method}
                          type="button"
                          className={`p-4 border-2 rounded-xl flex flex-col items-center gap-3 transition-all hover:border-primary hover:bg-primary/5 ${i === 0 ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white'}`}
                        >
                          {i === 0 && <CreditCard className="text-primary" size={28} />}
                          {i === 1 && <Smartphone className="text-black" size={28} />}
                          {i === 2 && <Building2 className="text-black" size={28} />}
                          {i === 3 && <span className="text-2xl font-bold text-blue-800">P</span>}
                          <span className={`text-xs font-bold uppercase tracking-wide ${i === 0 ? 'text-primary' : 'text-black'}`}>{method}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 h-16 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-black">
                    Donate ${customAmount || selectedAmount}
                  </Button>

                  <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-500 font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <Lock size={14} className="text-black" />
                      <span className="text-black">256-bit Secure Encryption</span>
                    </div>
                    <span className="text-black">•</span>
                    <span className="text-black">100% Tax Deductible</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar Info - UPDATED TO LIGHT THEME */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Card className="bg-white text-black border border-gray-200 shadow-xl rounded-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <CardContent className="p-8 relative z-10">
                <h3 className="font-bold text-xl mb-6 flex items-center gap-3 text-black">
                  <div className="p-2 bg-gray-100 rounded-lg"><Check className="text-secondary" size={20} /></div>
                  Why Donate Monthly?
                </h3>
                <ul className="space-y-4">
                  {[
                    'Steady funding allows us to plan long-term.',
                    'Lower administrative costs means more goes to the cause.',
                    'Consistent support for a child through graduation.',
                    'Emergency funds available for crises.'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-black leading-relaxed text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg rounded-2xl bg-white">
              <CardContent className="p-8">
                <h3 className="font-bold text-lg mb-6 text-black">Allocation of Funds</h3>
                <div className="space-y-5">
                  {[
                    { l: 'Programs & Services', p: 85, c: 'bg-primary' },
                    { l: 'Management', p: 12, c: 'bg-secondary' },
                    { l: 'Fundraising', p: 3, c: 'bg-accent' },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2 text-sm font-bold text-black">
                        <span>{stat.l}</span>
                        <span>{stat.p}%</span>
                      </div>
                      <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden border border-gray-100">
                        <motion.div
                          className={`h-full ${stat.c}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.p}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200">
              <p className="font-bold text-black mb-2">Need Help?</p>
              <a href="mailto:donations@lceo.org" className="text-primary font-bold hover:underline">donations@lceo.org</a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
