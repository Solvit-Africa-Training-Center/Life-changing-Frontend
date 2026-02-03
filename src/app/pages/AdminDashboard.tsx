import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Badge } from '@/app/components/ui/badge';
import {
  LayoutDashboard,
  FileText,
  Target,
  Users,
  DollarSign,
  BarChart3,
  Settings,
  CheckCircle,
  Clock,
  XCircle,
  TrendingUp,
  AlertCircle,
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const quickStats = {
    donationsThisMonth: 15420,
    activeBeneficiaries: 342,
    pendingReports: 12,
    newDonors: 8,
    websiteVisitors: 3542,
  };

  const recentDonations = [
    { name: 'John Doe', amount: 100, program: 'General Support', date: '2 hours ago' },
    { name: 'Jane Smith', amount: 250, program: 'IkiraroBiz', date: '5 hours ago' },
    { name: 'Mike Johnson', amount: 50, program: 'School Retention', date: '1 day ago' },
  ];

  const pendingReports = [
    {
      id: 1,
      beneficiary: 'Rose Mukamana',
      program: 'IkiraroBiz',
      month: 'December 2025',
      status: 'pending',
      submitted: '2 hours ago',
    },
    {
      id: 2,
      beneficiary: 'Grace Uwase',
      program: 'Mental Resilience',
      month: 'December 2025',
      status: 'pending',
      submitted: '5 hours ago',
    },
  ];

  const monthlyData = [
    { month: 'Jul', donations: 12000, beneficiaries: 310 },
    { month: 'Aug', donations: 13500, beneficiaries: 315 },
    { month: 'Sep', donations: 14200, beneficiaries: 325 },
    { month: 'Oct', donations: 15800, beneficiaries: 330 },
    { month: 'Nov', donations: 14500, beneficiaries: 338 },
    { month: 'Dec', donations: 16200, beneficiaries: 342 },
  ];

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
              <span className="text-slate-600">Admin Portal</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-600">Welcome, Admin!</span>
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
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="lg:w-64">
            <nav className="space-y-1">
              {[
                { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
                { id: 'content', icon: FileText, label: 'Content Management' },
                { id: 'programs', icon: Target, label: 'Programs' },
                { id: 'beneficiaries', icon: Users, label: 'Beneficiaries' },
                { id: 'donors', icon: DollarSign, label: 'Donors' },
                { id: 'analytics', icon: BarChart3, label: 'Reports & Analytics' },
                { id: 'settings', icon: Settings, label: 'Settings' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-[#0066CC] text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard Overview</h1>
                  <p className="text-slate-600">
                    {new Date().toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-green-100 p-2 rounded-lg">
                          <DollarSign className="h-5 w-5 text-green-600" />
                        </div>
                        <span className="text-sm text-slate-600">This Month</span>
                      </div>
                      <div className="text-2xl font-bold text-slate-900">
                        ${quickStats.donationsThisMonth.toLocaleString()}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <Users className="h-5 w-5 text-blue-600" />
                        </div>
                        <span className="text-sm text-slate-600">Active</span>
                      </div>
                      <div className="text-2xl font-bold text-slate-900">
                        {quickStats.activeBeneficiaries}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-orange-100 p-2 rounded-lg">
                          <Clock className="h-5 w-5 text-orange-600" />
                        </div>
                        <span className="text-sm text-slate-600">Pending</span>
                      </div>
                      <div className="text-2xl font-bold text-slate-900">
                        {quickStats.pendingReports}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-purple-100 p-2 rounded-lg">
                          <TrendingUp className="h-5 w-5 text-purple-600" />
                        </div>
                        <span className="text-sm text-slate-600">New Donors</span>
                      </div>
                      <div className="text-2xl font-bold text-slate-900">
                        {quickStats.newDonors}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-indigo-100 p-2 rounded-lg">
                          <BarChart3 className="h-5 w-5 text-indigo-600" />
                        </div>
                        <span className="text-sm text-slate-600">Visitors</span>
                      </div>
                      <div className="text-2xl font-bold text-slate-900">
                        {quickStats.websiteVisitors.toLocaleString()}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Recent Donations</span>
                        <Button variant="link" size="sm">
                          View All
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {recentDonations.map((donation, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div>
                            <p className="font-medium text-slate-900">{donation.name}</p>
                            <p className="text-sm text-slate-600">{donation.program}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-green-600">${donation.amount}</p>
                            <p className="text-xs text-slate-500">{donation.date}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Pending Reports</span>
                        <Badge variant="secondary">{pendingReports.length}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {pendingReports.map((report) => (
                        <div key={report.id} className="p-3 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-medium text-slate-900">{report.beneficiary}</p>
                            <Badge className="bg-orange-500">{report.status}</Badge>
                          </div>
                          <p className="text-sm text-slate-600 mb-2">
                            {report.program} • {report.month}
                          </p>
                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1">
                              Review
                            </Button>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Charts */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Monthly Donations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={monthlyData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="donations" fill="#0066CC" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Beneficiary Growth</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={monthlyData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="beneficiaries" stroke="#00A896" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Button variant="outline" className="h-20 flex flex-col gap-2">
                        <Users className="h-6 w-6" />
                        <span className="text-sm">Add Beneficiary</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col gap-2">
                        <FileText className="h-6 w-6" />
                        <span className="text-sm">Review Reports</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col gap-2">
                        <Target className="h-6 w-6" />
                        <span className="text-sm">Create Story</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col gap-2">
                        <BarChart3 className="h-6 w-6" />
                        <span className="text-sm">Send Newsletter</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {[
              'content',
              'programs',
              'beneficiaries',
              'donors',
              'analytics',
              'settings',
            ].includes(activeTab) && (
              <div className="text-center py-20">
                <AlertCircle className="h-16 w-16 mx-auto text-slate-400 mb-4" />
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section
                </h2>
                <p className="text-slate-600 mb-6">This section is under development</p>
                <p className="text-sm text-slate-500">
                  Full CMS features, user management, and analytics coming soon
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
