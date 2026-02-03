import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { User, BarChart3, Target, MessageSquare, BookOpen, Settings, TrendingUp, Upload, Check, LogOut } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { toast } from 'sonner';

interface BeneficiaryDashboardProps {
  onLogout: () => void;
  userName: string;
}

export function BeneficiaryDashboard({ onLogout, userName }: BeneficiaryDashboardProps) {
  const [activeTab, setActiveTab] = useState('profile');
  const [revenue, setRevenue] = useState('');
  const [expenses, setExpenses] = useState('');

  const calculateProfit = () => {
    const rev = parseFloat(revenue) || 0;
    const exp = parseFloat(expenses) || 0;
    return rev - exp;
  };

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Report submitted successfully! Your mentor will review it soon.');
  };

  const revenueData = [
    { month: 'Jul', revenue: 120 },
    { month: 'Aug', revenue: 180 },
    { month: 'Sep', revenue: 250 },
    { month: 'Oct', revenue: 320 },
    { month: 'Nov', revenue: 380 },
    { month: 'Dec', revenue: 450 },
  ];

  const reportHistory = [
    { date: 'December 2025', status: 'Approved', revenue: '$450', profit: '$180' },
    { date: 'November 2025', status: 'Approved', revenue: '$380', profit: '$145' },
    { date: 'October 2025', status: 'Approved', revenue: '$320', profit: '$120' },
  ];

  const achievements = [
    { title: 'First Sale', unlocked: true },
    { title: 'Profitable Month', unlocked: true },
    { title: '6 Months in Business', unlocked: true },
    { title: '50 Customers Served', unlocked: false },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">{userName.charAt(0)}</span>
              </div>
              <div>
                <div className="font-bold">{userName}</div>
                <div className="text-sm text-muted-foreground">IkiraroBiz Participant</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Settings size={18} className="mr-2" />
                Settings
              </Button>
              <Button variant="outline" onClick={onLogout}>
                <LogOut size={18} className="mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="border-b rounded-none h-auto p-0 bg-transparent w-full justify-start">
              <TabsTrigger 
                value="profile" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                <User size={18} className="mr-2" />
                My Profile
              </TabsTrigger>
              <TabsTrigger 
                value="reports" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                <BarChart3 size={18} className="mr-2" />
                Business Reports
              </TabsTrigger>
              <TabsTrigger 
                value="progress" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                <Target size={18} className="mr-2" />
                My Progress
              </TabsTrigger>
              <TabsTrigger 
                value="messages" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                <MessageSquare size={18} className="mr-2" />
                Messages
              </TabsTrigger>
              <TabsTrigger 
                value="resources" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                <BookOpen size={18} className="mr-2" />
                Resources
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Profile Tab */}
          <TabsContent value="profile">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>Full Name</Label>
                        <Input value="Grace Mukamana" readOnly />
                      </div>
                      <div>
                        <Label>Program</Label>
                        <Input value="IkiraroBiz Entrepreneurship" readOnly />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>District</Label>
                        <Input value="Gasabo" readOnly />
                      </div>
                      <div>
                        <Label>Enrollment Date</Label>
                        <Input value="June 2024" readOnly />
                      </div>
                    </div>
                    <div>
                      <Label>Business Name</Label>
                      <Input value="Grace's Tailoring Shop" />
                    </div>
                    <div>
                      <Label>Business Type</Label>
                      <Select defaultValue="tailoring">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tailoring">Tailoring & Sewing</SelectItem>
                          <SelectItem value="retail">Retail Shop</SelectItem>
                          <SelectItem value="agriculture">Agriculture</SelectItem>
                          <SelectItem value="food">Food & Catering</SelectItem>
                          <SelectItem value="services">Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full md:w-auto">Update Profile</Button>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">7 months</div>
                      <div className="text-sm text-muted-foreground">In program</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">7 reports</div>
                      <div className="text-sm text-muted-foreground">Submitted</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">$450</div>
                      <div className="text-sm text-muted-foreground">Last month revenue</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Your Mentor</h4>
                    <p className="text-sm mb-1">Marie Uwimana</p>
                    <Button variant="outline" size="sm" className="w-full mt-3">
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Business Reports Tab */}
          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Submit Monthly Business Report</CardTitle>
                <p className="text-sm text-muted-foreground">Report period: January 2026</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitReport} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="report-month">Report Period *</Label>
                      <Select defaultValue="jan-2026">
                        <SelectTrigger id="report-month">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="jan-2026">January 2026</SelectItem>
                          <SelectItem value="dec-2025">December 2025</SelectItem>
                          <SelectItem value="nov-2025">November 2025</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="business-name">Business Name</Label>
                      <Input id="business-name" defaultValue="Grace's Tailoring Shop" />
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-bold text-lg mb-4">Financial Summary</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="revenue">Revenue this month (RWF) *</Label>
                        <Input 
                          id="revenue" 
                          type="number" 
                          placeholder="350000"
                          value={revenue}
                          onChange={(e) => setRevenue(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="expenses">Expenses this month (RWF) *</Label>
                        <Input 
                          id="expenses" 
                          type="number" 
                          placeholder="200000"
                          value={expenses}
                          onChange={(e) => setExpenses(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label>Profit/Loss (RWF)</Label>
                        <div className={`h-10 px-3 rounded-md border flex items-center font-bold ${
                          calculateProfit() >= 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                        }`}>
                          {calculateProfit().toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-bold text-lg mb-4">Business Activities</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="customers">Customers served this month *</Label>
                        <Input id="customers" type="number" placeholder="45" required />
                      </div>
                      <div>
                        <Label htmlFor="products">Products/services sold *</Label>
                        <Textarea 
                          id="products" 
                          placeholder="List main products or services (e.g., dresses, alterations, school uniforms)"
                          rows={3}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-bold text-lg mb-4">Progress & Achievements</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="wins">What went well this month? *</Label>
                        <Textarea 
                          id="wins" 
                          placeholder="Share your successes and positive experiences"
                          rows={3}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="challenges">Challenges faced *</Label>
                        <Textarea 
                          id="challenges" 
                          placeholder="What difficulties did you encounter?"
                          rows={3}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="solutions">Solutions tried</Label>
                        <Textarea 
                          id="solutions" 
                          placeholder="How did you address these challenges?"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-bold text-lg mb-4">Photo Upload</h3>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <Upload className="mx-auto text-muted-foreground mb-3" size={32} />
                      <p className="text-sm text-muted-foreground mb-3">
                        Add photos of your business, products, or workspace
                      </p>
                      <Button type="button" variant="outline" size="sm">
                        Choose Files
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2">
                        Maximum 5 photos, 5MB each
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-bold text-lg mb-4">Support Needed</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="support-business" />
                        <label htmlFor="support-business" className="text-sm cursor-pointer">
                          Business advice
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="support-financial" />
                        <label htmlFor="support-financial" className="text-sm cursor-pointer">
                          Financial planning
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="support-marketing" />
                        <label htmlFor="support-marketing" className="text-sm cursor-pointer">
                          Marketing help
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="support-other" />
                        <label htmlFor="support-other" className="text-sm cursor-pointer">
                          Other
                        </label>
                      </div>
                      <Input placeholder="Please specify..." className="mt-2" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <p className="text-sm text-muted-foreground italic">
                      <Check className="inline mr-1" size={14} />
                      Auto-saved 2 minutes ago
                    </p>
                    <Button type="submit" size="lg" className="bg-green-600 hover:bg-green-700">
                      Submit Report
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="revenue" stroke="#0066CC" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Report History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {reportHistory.map((report, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <div>
                            <div className="font-medium">{report.date}</div>
                            <div className="text-sm text-muted-foreground">
                              Revenue: {report.revenue} | Profit: {report.profit}
                            </div>
                          </div>
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                            {report.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {achievements.map((achievement, index) => (
                        <div 
                          key={index} 
                          className={`flex items-center gap-3 p-3 rounded-lg ${
                            achievement.unlocked ? 'bg-yellow-50' : 'bg-muted'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            achievement.unlocked ? 'bg-yellow-400' : 'bg-gray-300'
                          }`}>
                            {achievement.unlocked ? '🏆' : '🔒'}
                          </div>
                          <span className={achievement.unlocked ? 'font-medium' : 'text-muted-foreground'}>
                            {achievement.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium">Marie Uwimana (Mentor)</span>
                      <span className="text-xs text-muted-foreground">2 days ago</span>
                    </div>
                    <p className="text-sm">
                      Great work on your December report! Your revenue growth is impressive. 
                      Let's discuss marketing strategies in our next session.
                    </p>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium">LCEO Admin</span>
                      <span className="text-xs text-muted-foreground">1 week ago</span>
                    </div>
                    <p className="text-sm">
                      Reminder: Monthly business training session this Saturday at 10 AM. Location: LCEO Office, Kigali.
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium">Donor Message</span>
                      <span className="text-xs text-muted-foreground">2 weeks ago</span>
                    </div>
                    <p className="text-sm">
                      Your story is so inspiring! Keep up the amazing work. We're proud to support your journey.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Training Materials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2" size={18} />
                    Business Planning Guide
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2" size={18} />
                    Financial Record Keeping
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2" size={18} />
                    Marketing Basics
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2" size={18} />
                    Customer Service Tips
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Video Tutorials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Video Player</p>
                  </div>
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start text-sm">
                      ▶ How to Price Your Products
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-sm">
                      ▶ Managing Cash Flow
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-sm">
                      ▶ Growing Your Customer Base
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}