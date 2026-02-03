import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { 
  LayoutDashboard, FileEdit, Target, Users, DollarSign, BarChart3, Settings,
  Search, CheckCircle, Clock, FileText, Eye, Edit, Trash2, Plus, LogOut
} from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ContentManagement } from '@/app/components/ContentManagement';
import { ProgramManagement } from '@/app/components/ProgramManagement';

interface AdminDashboardProps {
  onLogout: () => void;
  userName: string;
}

export function AdminDashboard({ onLogout, userName }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedBeneficiary, setSelectedBeneficiary] = useState<any>(null);

  const quickStats = [
    { label: 'Donations This Month', value: '$12,450', change: '+15%', icon: DollarSign, color: 'bg-green-100 text-green-700' },
    { label: 'Active Beneficiaries', value: '248', change: '+12', icon: Users, color: 'bg-blue-100 text-blue-700' },
    { label: 'Pending Reports', value: '18', change: 'Review', icon: FileText, color: 'bg-yellow-100 text-yellow-700' },
    { label: 'New Donors', value: '24', change: 'This month', icon: DollarSign, color: 'bg-purple-100 text-purple-700' },
  ];

  const recentActivity = [
    { type: 'donation', text: 'New $100 monthly donation from Sarah Johnson', time: '5 min ago' },
    { type: 'report', text: 'Grace M. submitted December business report', time: '15 min ago' },
    { type: 'beneficiary', text: 'New beneficiary enrolled: Divine K.', time: '1 hour ago' },
    { type: 'content', text: 'Success story published: Hope\'s Journey', time: '2 hours ago' },
  ];

  const pendingReports = [
    {
      id: 1,
      beneficiary: 'Grace Mukamana',
      program: 'IkiraroBiz',
      month: 'January 2026',
      submitted: '2 hours ago',
      revenue: '$520',
      status: 'Pending Review'
    },
    {
      id: 2,
      beneficiary: 'Divine Uwase',
      program: 'School Retention',
      month: 'January 2026',
      submitted: '1 day ago',
      attendance: '100%',
      status: 'Pending Review'
    },
  ];

  const beneficiaries = [
    {
      id: 1,
      name: 'Grace Mukamana',
      photo: 'https://images.unsplash.com/photo-1739300293361-d1b503281902?w=100',
      program: 'IkiraroBiz',
      status: 'Active',
      district: 'Gasabo',
      enrolled: 'Jun 2024',
      lastReport: 'Jan 2026'
    },
    {
      id: 2,
      name: 'Divine Uwase',
      photo: 'https://images.unsplash.com/photo-1678225892688-e4a3bd3d9214?w=100',
      program: 'School Retention',
      status: 'Active',
      district: 'Kicukiro',
      enrolled: 'Aug 2024',
      lastReport: 'Jan 2026'
    },
    {
      id: 3,
      name: 'Hope Mutoni',
      photo: 'https://images.unsplash.com/flagged/photo-1570562119798-a4b2a542fe3b?w=100',
      program: 'Mental Resilience',
      status: 'Active',
      district: 'Nyarugenge',
      enrolled: 'May 2024',
      lastReport: 'Jan 2026'
    },
  ];

  const donors = [
    {
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      type: 'Monthly',
      totalDonated: '$1,200',
      lastDonation: 'Jan 15, 2026',
      status: 'Active'
    },
    {
      name: 'Michael Chen',
      email: 'michael.c@email.com',
      type: 'Quarterly',
      totalDonated: '$800',
      lastDonation: 'Jan 10, 2026',
      status: 'Active'
    },
    {
      name: 'Emma Williams',
      email: 'emma.w@email.com',
      type: 'Monthly',
      totalDonated: '$2,400',
      lastDonation: 'Jan 15, 2026',
      status: 'Active'
    },
  ];

  const donationTrend = [
    { month: 'Jul', amount: 8500 },
    { month: 'Aug', amount: 9200 },
    { month: 'Sep', amount: 10100 },
    { month: 'Oct', amount: 9800 },
    { month: 'Nov', amount: 11200 },
    { month: 'Dec', amount: 13400 },
    { month: 'Jan', amount: 12450 },
  ];

  const programDistribution = [
    { name: 'School Retention', value: 45, color: '#0066CC' },
    { name: 'IkiraroBiz', value: 35, color: '#00A896' },
    { name: 'Mental Resilience', value: 20, color: '#FF6B35' },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">LCEO Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">Manage programs, beneficiaries, and content</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <FileText size={18} className="mr-2" />
                Generate Report
              </Button>
              <Button>
                <Plus size={18} className="mr-2" />
                Quick Action
              </Button>
              <Button variant="outline" onClick={onLogout}>
                <LogOut size={18} className="mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Side Navigation with Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r min-h-screen p-4">
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                activeTab === 'overview' ? 'bg-primary text-white' : 'hover:bg-muted'
              }`}
            >
              <LayoutDashboard size={18} />
              Overview
            </button>
            <button
              onClick={() => setActiveTab('content')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                activeTab === 'content' ? 'bg-primary text-white' : 'hover:bg-muted'
              }`}
            >
              <FileEdit size={18} />
              Content Management
            </button>
            <button
              onClick={() => setActiveTab('programs')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                activeTab === 'programs' ? 'bg-primary text-white' : 'hover:bg-muted'
              }`}
            >
              <Target size={18} />
              Programs
            </button>
            <button
              onClick={() => setActiveTab('beneficiaries')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                activeTab === 'beneficiaries' ? 'bg-primary text-white' : 'hover:bg-muted'
              }`}
            >
              <Users size={18} />
              Beneficiaries
            </button>
            <button
              onClick={() => setActiveTab('donors')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                activeTab === 'donors' ? 'bg-primary text-white' : 'hover:bg-muted'
              }`}
            >
              <DollarSign size={18} />
              Donors
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                activeTab === 'analytics' ? 'bg-primary text-white' : 'hover:bg-muted'
              }`}
            >
              <BarChart3 size={18} />
              Reports & Analytics
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                activeTab === 'settings' ? 'bg-primary text-white' : 'hover:bg-muted'
              }`}
            >
              <Settings size={18} />
              Settings
            </button>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="grid md:grid-cols-4 gap-6">
                {quickStats.map((stat, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color}`}>
                          <stat.icon size={20} />
                        </div>
                        <span className="text-xs text-green-600">{stat.change}</span>
                      </div>
                      <div className="text-2xl font-bold mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex gap-3 pb-3 border-b last:border-0">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div className="flex-1">
                            <p className="text-sm">{activity.text}</p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <Plus className="mr-2" size={18} />
                      Add New Beneficiary
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <FileEdit className="mr-2" size={18} />
                      Create Success Story
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <FileText className="mr-2" size={18} />
                      Review Pending Reports ({pendingReports.length})
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Users className="mr-2" size={18} />
                      Send Newsletter
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Pending Reports */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Pending Business Reports</CardTitle>
                    <Button variant="link">View All</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pendingReports.map((report) => (
                      <div key={report.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div>
                          <div className="font-medium">{report.beneficiary}</div>
                          <div className="text-sm text-muted-foreground">
                            {report.program} • {report.month} • {report.submitted}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye size={14} className="mr-1" />
                            Review
                          </Button>
                          <Button size="sm">
                            <CheckCircle size={14} className="mr-1" />
                            Approve
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Beneficiaries Tab */}
          {activeTab === 'beneficiaries' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Beneficiary Management</h2>
                <Button>
                  <Plus className="mr-2" size={18} />
                  Add Beneficiary
                </Button>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4 mb-6">
                    <Input placeholder="Search by name or ID..." className="max-w-md" />
                    <Select>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Filter by program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Programs</SelectItem>
                        <SelectItem value="school">School Retention</SelectItem>
                        <SelectItem value="business">IkiraroBiz</SelectItem>
                        <SelectItem value="mental">Mental Resilience</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="graduated">Graduated</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Beneficiary</th>
                          <th className="text-left py-3 px-4">Program</th>
                          <th className="text-left py-3 px-4">District</th>
                          <th className="text-left py-3 px-4">Enrolled</th>
                          <th className="text-left py-3 px-4">Last Report</th>
                          <th className="text-left py-3 px-4">Status</th>
                          <th className="text-left py-3 px-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {beneficiaries.map((beneficiary) => (
                          <tr key={beneficiary.id} className="border-b hover:bg-muted">
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-3">
                                <img 
                                  src={beneficiary.photo}
                                  alt={beneficiary.name}
                                  className="w-10 h-10 rounded-full object-cover"
                                />
                                <span className="font-medium">{beneficiary.name}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                                {beneficiary.program}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-sm">{beneficiary.district}</td>
                            <td className="py-3 px-4 text-sm">{beneficiary.enrolled}</td>
                            <td className="py-3 px-4 text-sm">{beneficiary.lastReport}</td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                                {beneficiary.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex gap-1">
                                <Button variant="ghost" size="sm">
                                  <Eye size={14} />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Edit size={14} />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Donors Tab */}
          {activeTab === 'donors' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Donor Management</h2>
                <div className="flex gap-3">
                  <Button variant="outline">Export Data</Button>
                  <Button variant="outline">Send Thank You</Button>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4 mb-6">
                    <Input placeholder="Search donors..." className="max-w-md" />
                    <Select>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recent">Most Recent</SelectItem>
                        <SelectItem value="amount">Highest Amount</SelectItem>
                        <SelectItem value="name">Name A-Z</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Name</th>
                          <th className="text-left py-3 px-4">Email</th>
                          <th className="text-left py-3 px-4">Type</th>
                          <th className="text-left py-3 px-4">Total Donated</th>
                          <th className="text-left py-3 px-4">Last Donation</th>
                          <th className="text-left py-3 px-4">Status</th>
                          <th className="text-left py-3 px-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {donors.map((donor, index) => (
                          <tr key={index} className="border-b hover:bg-muted">
                            <td className="py-3 px-4 font-medium">{donor.name}</td>
                            <td className="py-3 px-4 text-sm text-muted-foreground">{donor.email}</td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs">
                                {donor.type}
                              </span>
                            </td>
                            <td className="py-3 px-4 font-bold">{donor.totalDonated}</td>
                            <td className="py-3 px-4 text-sm">{donor.lastDonation}</td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                                {donor.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex gap-1">
                                <Button variant="ghost" size="sm">
                                  <Eye size={14} />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <FileText size={14} />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Reports & Analytics</h2>
              
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Donation Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={donationTrend}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="amount" stroke="#0066CC" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Beneficiary Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={programDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${percent}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {programDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Export Options</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-4">
                  <Button variant="outline" className="justify-start">
                    <FileText className="mr-2" size={18} />
                    Monthly Report (PDF)
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <FileText className="mr-2" size={18} />
                    Donor List (CSV)
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <FileText className="mr-2" size={18} />
                    Impact Metrics (Excel)
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Other tabs would go here */}
          {activeTab === 'content' && (
            <ContentManagement />
          )}

          {activeTab === 'programs' && (
            <ProgramManagement />
          )}

          {activeTab === 'settings' && (
            <div className="text-center py-12 text-muted-foreground">
              <p>Settings panel coming soon</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}