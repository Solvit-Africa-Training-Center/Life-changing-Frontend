import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Badge } from '@/app/components/ui/badge';
import {
  DollarSign,
  Heart,
  Users,
  Calendar,
  Download,
  CreditCard,
  Mail,
  TrendingUp,
  Send,
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/app/components/ui/dialog';
import { Textarea } from '@/app/components/ui/textarea';
import { toast } from 'sonner';

export function DonorDashboard() {
  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [message, setMessage] = useState('');

  const donorStats = {
    totalDonated: 1200,
    monthlyCommitment: 100,
    livesImpacted: 12,
    memberSince: 'March 2024',
  };

  const donationBreakdown = [
    { name: 'Education', value: 400, color: '#0066CC' },
    { name: 'Entrepreneurship', value: 500, color: '#00A896' },
    { name: 'Mental Health', value: 300, color: '#FF6B35' },
  ];

  const impactOverTime = [
    { month: 'Mar', amount: 100 },
    { month: 'Apr', amount: 100 },
    { month: 'May', amount: 100 },
    { month: 'Jun', amount: 100 },
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
      name: 'Rose Mukamana',
      program: 'IkiraroBiz',
      month: 'December 2025',
      photo: 'https://images.unsplash.com/photo-1563132337-f159f484226c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBlbnRyZXByZW5ldXJ8ZW58MXx8fHwxNzY5MDI3ODE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      revenue: 75000,
      profit: 30000,
      customers: 25,
      summary: 'Had a great month! Completed 25 orders and hired my first assistant. Business is growing steadily.',
      challenges: 'Need help with marketing and reaching more customers online.',
      photos: 2,
    },
    {
      id: 2,
      name: 'Grace Uwase',
      program: 'Mental Resilience',
      month: 'December 2025',
      photo: 'https://images.unsplash.com/photo-1686910781696-13fc94585bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZ2lybCUyMHNtaWxpbmd8ZW58MXx8fHwxNzY5MDc5MTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      revenue: 0,
      profit: 0,
      customers: 0,
      summary: 'Completed my first semester at university with excellent grades. Feeling confident and hopeful about the future.',
      challenges: 'Balancing studies with part-time work is challenging but manageable with support.',
      photos: 1,
    },
  ];

  const donationHistory = [
    { date: '2026-01-01', amount: 100, program: 'General Support', method: 'Credit Card', receiptId: 'RC-2026-001' },
    { date: '2025-12-01', amount: 100, program: 'IkiraroBiz', method: 'Credit Card', receiptId: 'RC-2025-012' },
    { date: '2025-11-01', amount: 100, program: 'IkiraroBiz', method: 'Credit Card', receiptId: 'RC-2025-011' },
  ];

  const handleSendMessage = (beneficiaryName: string) => {
    if (message.trim()) {
      toast.success(`Your encouragement has been sent to ${beneficiaryName}! 💌`);
      setMessage('');
      setSelectedReport(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-[#0066CC] text-white rounded-full p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-[#0066CC]">LCEO</span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-600">Donor Portal</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-600">Welcome, John!</span>
              <Link to="/">
                <Button variant="outline" size="sm">
                  Exit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="impact" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="impact">My Impact</TabsTrigger>
            <TabsTrigger value="updates">Beneficiary Updates</TabsTrigger>
            <TabsTrigger value="history">Donation History</TabsTrigger>
            <TabsTrigger value="settings">Payment Settings</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          {/* My Impact Tab */}
          <TabsContent value="impact" className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">My Impact Dashboard</h1>
              <p className="text-slate-600">See the difference you're making</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[#0066CC]/10 p-2 rounded-lg">
                      <DollarSign className="h-5 w-5 text-[#0066CC]" />
                    </div>
                    <span className="text-sm text-slate-600">Total Donated</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900">${donorStats.totalDonated}</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[#FF6B35]/10 p-2 rounded-lg">
                      <Heart className="h-5 w-5 text-[#FF6B35]" />
                    </div>
                    <span className="text-sm text-slate-600">Monthly Commitment</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900">${donorStats.monthlyCommitment}</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[#00A896]/10 p-2 rounded-lg">
                      <Users className="h-5 w-5 text-[#00A896]" />
                    </div>
                    <span className="text-sm text-slate-600">Lives Impacted</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900">{donorStats.livesImpacted}</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Calendar className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-sm text-slate-600">Member Since</span>
                  </div>
                  <div className="text-xl font-bold text-slate-900">{donorStats.memberSince}</div>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Donation Breakdown by Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={donationBreakdown}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={(entry) => `${entry.name}: $${entry.value}`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {donationBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Impact Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={impactOverTime}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="amount" stroke="#0066CC" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Impact Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Your Impact Story</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-slate max-w-none">
                  <p>
                    Since joining LCEO in March 2024, your generous monthly support of $100 has directly
                    impacted the lives of 12 young women and girls in Rwanda. Your contributions have:
                  </p>
                  <ul>
                    <li>Kept 4 girls in school with full supplies and support</li>
                    <li>Helped 3 women launch successful businesses</li>
                    <li>Provided mental health counseling for 5 beneficiaries</li>
                  </ul>
                  <p className="text-[#0066CC] font-semibold">
                    Thank you for being a champion of change! 🌟
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Beneficiary Updates Tab */}
          <TabsContent value="updates" className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Beneficiary Updates</h1>
              <p className="text-slate-600">See how your support is making a difference</p>
            </div>

            <div className="space-y-6">
              {beneficiaryUpdates.map((update) => (
                <Card key={update.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={update.photo}
                          alt={update.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-slate-900">{update.name}</h3>
                            <Badge variant="outline">{update.program}</Badge>
                          </div>
                          <p className="text-sm text-slate-600">{update.month}</p>
                        </div>

                        {update.revenue > 0 && (
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <div className="text-sm text-slate-600">Revenue</div>
                              <div className="text-lg font-semibold text-slate-900">
                                {update.revenue.toLocaleString()} RWF
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-slate-600">Profit</div>
                              <div className="text-lg font-semibold text-green-600">
                                +{update.profit.toLocaleString()} RWF
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-slate-600">Customers</div>
                              <div className="text-lg font-semibold text-slate-900">
                                {update.customers}
                              </div>
                            </div>
                          </div>
                        )}

                        <div>
                          <p className="text-slate-700 mb-2">{update.summary}</p>
                          {update.challenges && (
                            <p className="text-sm text-slate-600 italic">
                              <strong>Challenge:</strong> {update.challenges}
                            </p>
                          )}
                        </div>

                        <div className="flex gap-3">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setSelectedReport(update)}
                              >
                                Read Full Report
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>Full Business Report - {update.name}</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <p>{update.summary}</p>
                                <p>{update.challenges}</p>
                                <div className="bg-slate-50 p-4 rounded-lg">
                                  <p className="text-sm text-slate-600">
                                    📸 {update.photos} photos uploaded
                                  </p>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>

                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90">
                                <Send className="h-4 w-4 mr-2" />
                                Send Encouragement
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Send Message to {update.name}</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <Textarea
                                  placeholder="Write your message of encouragement..."
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                  rows={5}
                                />
                                <Button
                                  onClick={() => handleSendMessage(update.name)}
                                  className="w-full"
                                >
                                  Send Message
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Donation History Tab */}
          <TabsContent value="history" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Donation History</h1>
                <p className="text-slate-600">All your contributions in one place</p>
              </div>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export to CSV
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50 border-b">
                      <tr>
                        <th className="text-left p-4 font-semibold">Date</th>
                        <th className="text-left p-4 font-semibold">Amount</th>
                        <th className="text-left p-4 font-semibold">Program</th>
                        <th className="text-left p-4 font-semibold">Method</th>
                        <th className="text-left p-4 font-semibold">Receipt</th>
                      </tr>
                    </thead>
                    <tbody>
                      {donationHistory.map((donation, index) => (
                        <tr key={index} className="border-b hover:bg-slate-50">
                          <td className="p-4">{new Date(donation.date).toLocaleDateString()}</td>
                          <td className="p-4 font-semibold">${donation.amount}</td>
                          <td className="p-4">{donation.program}</td>
                          <td className="p-4">{donation.method}</td>
                          <td className="p-4">
                            <Button variant="link" size="sm" className="p-0">
                              <Download className="h-4 w-4 mr-1" />
                              {donation.receiptId}
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
          <TabsContent value="settings" className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Payment Settings</h1>
              <p className="text-slate-600">Manage your donation preferences</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Current Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-semibold">Visa ending in 4242</p>
                    <p className="text-sm text-slate-600">Expires 12/2026</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Update
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Donation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Current monthly amount:</span>
                  <span className="text-2xl font-bold text-[#0066CC]">$100</span>
                </div>
                <Button variant="outline" className="w-full">
                  Change Amount
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Messages</h1>
              <p className="text-slate-600">Communication and updates</p>
            </div>

            <Card>
              <CardContent className="p-8 text-center">
                <Mail className="h-12 w-12 mx-auto text-slate-400 mb-4" />
                <p className="text-slate-600">No new messages</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
