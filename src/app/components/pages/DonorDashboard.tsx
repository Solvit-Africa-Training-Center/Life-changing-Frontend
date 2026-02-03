import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/app/components/ui/dialog';
import { BarChart3, Users, CreditCard, Settings, Heart, Download, TrendingUp, Calendar, LogOut } from 'lucide-react';
import { PieChart, Pie, Cell, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DonorDashboardProps {
  onLogout: () => void;
  userName: string;
}

export function DonorDashboard({ onLogout, userName }: DonorDashboardProps) {
  const [activeTab, setActiveTab] = useState('impact');
  const [selectedReport, setSelectedReport] = useState<any>(null);

  const impactStats = [
    { label: 'Total Donated', value: '$1,800', icon: Heart, color: 'text-primary' },
    { label: 'Monthly Commitment', value: '$100', icon: TrendingUp, color: 'text-secondary' },
    { label: 'Lives Impacted', value: '3', icon: Users, color: 'text-accent' },
    { label: 'Member Since', value: 'June 2024', icon: Calendar, color: 'text-primary' },
  ];

  const donationBreakdown = [
    { name: 'School Retention', value: 600, color: '#0066CC' },
    { name: 'IkiraroBiz', value: 800, color: '#00A896' },
    { name: 'Mental Resilience', value: 400, color: '#FF6B35' },
  ];

  const donationsOverTime = [
    { month: 'Jul', amount: 100 },
    { month: 'Aug', amount: 100 },
    { month: 'Sep', amount: 100 },
    { month: 'Oct', amount: 100 },
    { month: 'Nov', amount: 100 },
    { month: 'Dec', amount: 100 },
    { month: 'Jan', amount: 100 },
  ];

  const beneficiaryUpdates = [
    {
      id: 1,
      name: "Grace's Business Update",
      beneficiary: "Grace Mukamana",
      program: "IkiraroBiz",
      month: "December 2025",
      photo: "https://images.unsplash.com/photo-1739300293361-d1b503281902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBzbWlsaW5nJTIwY29uZmlkZW50fGVufDF8fHx8MTc2OTA3OTE2NHww&ixlib=rb-4.1.0&q=80&w=400",
      revenue: "$450",
      profit: "$180",
      customers: 45,
      summary: "Exceptional month! Completed orders for 3 schools, adding school uniforms to my product line. The new sewing machine is making a huge difference.",
      challenges: "Managing increased demand while maintaining quality",
      photos: 3
    },
    {
      id: 2,
      name: "Divine's Progress Report",
      beneficiary: "Divine Uwase",
      program: "School Retention",
      month: "December 2025",
      photo: "https://images.unsplash.com/photo-1678225892688-e4a3bd3d9214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBlZHVjYXRpb24lMjByd2FuZGF8ZW58MXx8fHwxNzY5MDc5MTYyfDA&ixlib=rb-4.1.0&q=80&w=400",
      attendance: "100%",
      grades: "85% average",
      achievement: "Top 5 in class",
      summary: "Achieved my best grades yet! The Pad Box program means I never miss school anymore. I'm confident I'll pass my final exams.",
      challenges: "Math is still difficult, but my tutor is helping",
      photos: 2
    },
    {
      id: 3,
      name: "Hope's Leadership Journey",
      beneficiary: "Hope Mutoni",
      program: "Mental Resilience",
      month: "December 2025",
      photo: "https://images.unsplash.com/flagged/photo-1570562119798-a4b2a542fe3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBsZWFkZXJzaGlwfGVufDF8fHx8MTc2OTA3OTE2NHww&ixlib=rb-4.1.0&q=80&w=400",
      mentees: 15,
      sessions: 8,
      impact: "Change Champion",
      summary: "Led 8 peer support sessions this month, reaching 15 young women. I'm seeing real transformation in my mentees' confidence.",
      challenges: "Need more training materials for group sessions",
      photos: 4
    }
  ];

  const donationHistory = [
    { date: 'Jan 15, 2026', amount: '$100', program: 'IkiraroBiz', method: 'Credit Card' },
    { date: 'Dec 15, 2025', amount: '$100', program: 'IkiraroBiz', method: 'Credit Card' },
    { date: 'Nov 15, 2025', amount: '$100', program: 'IkiraroBiz', method: 'Credit Card' },
    { date: 'Oct 15, 2025', amount: '$100', program: 'School Retention', method: 'Credit Card' },
    { date: 'Sep 15, 2025', amount: '$100', program: 'School Retention', method: 'Credit Card' },
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
                <h1 className="text-2xl font-bold">{userName}</h1>
                <p className="text-sm text-muted-foreground">Thank you for making a difference!</p>
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

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="border-b rounded-none h-auto p-0 bg-transparent w-full justify-start">
              <TabsTrigger 
                value="impact" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                <BarChart3 size={18} className="mr-2" />
                My Impact
              </TabsTrigger>
              <TabsTrigger 
                value="updates" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                <Users size={18} className="mr-2" />
                Beneficiary Updates
              </TabsTrigger>
              <TabsTrigger 
                value="history" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                <CreditCard size={18} className="mr-2" />
                Donation History
              </TabsTrigger>
              <TabsTrigger 
                value="payment" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                <Settings size={18} className="mr-2" />
                Payment Settings
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* My Impact Tab */}
          <TabsContent value="impact" className="space-y-6">
            {/* Impact Summary Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              {impactStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon className={stat.color} size={24} />
                    </div>
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Donation Breakdown by Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={donationBreakdown}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {donationBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Giving Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={donationsOverTime}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="amount" stroke="#0066CC" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Impact Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>Your Impact in Action</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-primary/5 rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">18</div>
                    <div className="text-sm text-muted-foreground">Months of school supplies provided</div>
                  </div>
                  <div className="text-center p-6 bg-secondary/5 rounded-lg">
                    <div className="text-4xl font-bold text-secondary mb-2">2</div>
                    <div className="text-sm text-muted-foreground">Businesses launched and thriving</div>
                  </div>
                  <div className="text-center p-6 bg-accent/5 rounded-lg">
                    <div className="text-4xl font-bold text-accent mb-2">$1,240</div>
                    <div className="text-sm text-muted-foreground">Total business income generated</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Beneficiary Updates Tab */}
          <TabsContent value="updates" className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold">Beneficiary Updates</h2>
                <p className="text-muted-foreground">See the direct impact of your support</p>
              </div>
              <div className="flex gap-3">
                <Input placeholder="Search by name..." className="w-64" />
                <Button variant="outline">Filter</Button>
              </div>
            </div>

            <div className="space-y-4">
              {beneficiaryUpdates.map((update) => (
                <Card key={update.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-4 gap-0">
                      <div className="relative h-48 md:h-auto">
                        <img 
                          src={update.photo}
                          alt={update.beneficiary}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold">
                            {update.program}
                          </span>
                        </div>
                      </div>
                      <div className="md:col-span-3 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-bold text-lg mb-1">{update.name}</h3>
                            <p className="text-sm text-muted-foreground">{update.month}</p>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setSelectedReport(update)}
                          >
                            Read Full Report
                          </Button>
                        </div>

                        {update.revenue && (
                          <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-muted rounded-lg">
                            <div>
                              <div className="text-xs text-muted-foreground">Revenue</div>
                              <div className="text-lg font-bold text-primary">{update.revenue}</div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground">Profit</div>
                              <div className="text-lg font-bold text-secondary">{update.profit}</div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground">Customers</div>
                              <div className="text-lg font-bold">{update.customers}</div>
                            </div>
                          </div>
                        )}

                        {update.attendance && (
                          <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-muted rounded-lg">
                            <div>
                              <div className="text-xs text-muted-foreground">Attendance</div>
                              <div className="text-lg font-bold text-primary">{update.attendance}</div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground">Avg. Grades</div>
                              <div className="text-lg font-bold text-secondary">{update.grades}</div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground">Achievement</div>
                              <div className="text-sm font-bold">{update.achievement}</div>
                            </div>
                          </div>
                        )}

                        {update.mentees && (
                          <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-muted rounded-lg">
                            <div>
                              <div className="text-xs text-muted-foreground">Mentees</div>
                              <div className="text-lg font-bold text-primary">{update.mentees}</div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground">Sessions</div>
                              <div className="text-lg font-bold text-secondary">{update.sessions}</div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground">Role</div>
                              <div className="text-sm font-bold">{update.impact}</div>
                            </div>
                          </div>
                        )}

                        <p className="text-sm text-muted-foreground mb-3">
                          <strong>Progress:</strong> {update.summary}
                        </p>

                        <div className="flex items-center justify-between pt-3 border-t">
                          <span className="text-xs text-muted-foreground">
                            📷 {update.photos} photos attached
                          </span>
                          <Button variant="ghost" size="sm" className="text-primary">
                            Send Encouragement
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Donation History Tab */}
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Donation History</CardTitle>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2" size={16} />
                    Export CSV
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Date</th>
                        <th className="text-left py-3 px-4">Amount</th>
                        <th className="text-left py-3 px-4">Program</th>
                        <th className="text-left py-3 px-4">Payment Method</th>
                        <th className="text-left py-3 px-4">Receipt</th>
                      </tr>
                    </thead>
                    <tbody>
                      {donationHistory.map((donation, index) => (
                        <tr key={index} className="border-b hover:bg-muted">
                          <td className="py-3 px-4">{donation.date}</td>
                          <td className="py-3 px-4 font-bold">{donation.amount}</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                              {donation.program}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{donation.method}</td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm">
                              <Download size={14} className="mr-1" />
                              PDF
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payment Settings Tab */}
          <TabsContent value="payment">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <CreditCard className="text-primary" size={24} />
                      </div>
                      <div>
                        <div className="font-medium">Visa ending in 4242</div>
                        <div className="text-sm text-muted-foreground">Expires 12/2027</div>
                      </div>
                    </div>
                    <Button variant="outline">Update Card</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Monthly Donation Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="mb-2 block">Monthly Amount</Label>
                    <div className="flex gap-3 items-center">
                      <Input type="number" defaultValue="100" className="w-32" />
                      <span className="text-muted-foreground">USD per month</span>
                      <Button variant="outline">Update</Button>
                    </div>
                  </div>

                  <div>
                    <Label className="mb-2 block">Program Allocation</Label>
                    <Select defaultValue="ikiraroBiz">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="where-needed">Where Most Needed</SelectItem>
                        <SelectItem value="school">School Retention</SelectItem>
                        <SelectItem value="ikiraroBiz">IkiraroBiz</SelectItem>
                        <SelectItem value="mental">Mental Resilience</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-4 border-t space-y-3">
                    <Button variant="outline" className="w-full justify-start text-yellow-600 hover:text-yellow-700">
                      Pause Monthly Donation
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                      Cancel Recurring Donation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Full Report Modal */}
      <Dialog open={!!selectedReport} onOpenChange={() => setSelectedReport(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedReport?.name}</DialogTitle>
          </DialogHeader>
          {selectedReport && (
            <div className="space-y-6">
              <img 
                src={selectedReport.photo}
                alt={selectedReport.beneficiary}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div>
                <h4 className="font-bold mb-2">Progress Summary</h4>
                <p className="text-muted-foreground">{selectedReport.summary}</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Challenges</h4>
                <p className="text-muted-foreground">{selectedReport.challenges}</p>
              </div>
              <div className="pt-4 border-t">
                <h4 className="font-bold mb-3">Send a Message</h4>
                <Textarea placeholder="Write an encouraging message..." rows={4} />
                <Button className="mt-3 w-full">Send Message</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}