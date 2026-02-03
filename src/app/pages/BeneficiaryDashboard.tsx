import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import {
  User,
  FileText,
  TrendingUp,
  MessageSquare,
  BookOpen,
  Settings,
  Upload,
  Save,
  Award,
  DollarSign,
  Users,
  Target,
} from 'lucide-react';
import { toast } from 'sonner';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function BeneficiaryDashboard() {
  const [activeTab, setActiveTab] = useState('report');
  const [formData, setFormData] = useState({
    month: '',
    businessName: 'Rose\'s Tailoring Shop',
    businessType: 'Tailoring & Fashion',
    revenue: '',
    expenses: '',
    customers: '',
    productsSold: '',
    successes: '',
    challenges: '',
    solutions: '',
    supportNeeded: {
      businessAdvice: false,
      financialPlanning: false,
      marketing: false,
      other: false,
      otherText: '',
    },
  });

  const revenueData = [
    { month: 'Jul', revenue: 45000 },
    { month: 'Aug', revenue: 52000 },
    { month: 'Sep', revenue: 48000 },
    { month: 'Oct', revenue: 61000 },
    { month: 'Nov', revenue: 68000 },
    { month: 'Dec', revenue: 75000 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Business report submitted successfully! 🎉');
  };

  const profit = formData.revenue && formData.expenses
    ? Number(formData.revenue) - Number(formData.expenses)
    : 0;

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
              <span className="text-slate-600">Beneficiary Portal</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-600">Welcome, Rose!</span>
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
                { id: 'profile', icon: User, label: 'My Profile' },
                { id: 'report', icon: FileText, label: 'Business Reports' },
                { id: 'progress', icon: TrendingUp, label: 'My Progress' },
                { id: 'messages', icon: MessageSquare, label: 'Messages' },
                { id: 'resources', icon: BookOpen, label: 'Resources' },
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
            {activeTab === 'report' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">Submit Business Report</h1>
                  <p className="text-slate-600">
                    Current Period: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Report Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="month">Report Period *</Label>
                        <Select
                          value={formData.month}
                          onValueChange={(value) => setFormData({ ...formData, month: value })}
                        >
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select month" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="jan">January 2026</SelectItem>
                            <SelectItem value="dec">December 2025</SelectItem>
                            <SelectItem value="nov">November 2025</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="businessName">Business Name *</Label>
                          <Input
                            id="businessName"
                            value={formData.businessName}
                            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                            className="h-12"
                          />
                        </div>
                        <div>
                          <Label htmlFor="businessType">Business Type *</Label>
                          <Input
                            id="businessType"
                            value={formData.businessType}
                            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                            className="h-12"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5" />
                        Financial Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="revenue">Revenue this month (RWF) *</Label>
                          <Input
                            id="revenue"
                            type="number"
                            placeholder="e.g., 75000"
                            value={formData.revenue}
                            onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                            className="h-12 text-lg"
                          />
                        </div>
                        <div>
                          <Label htmlFor="expenses">Expenses this month (RWF) *</Label>
                          <Input
                            id="expenses"
                            type="number"
                            placeholder="e.g., 45000"
                            value={formData.expenses}
                            onChange={(e) => setFormData({ ...formData, expenses: e.target.value })}
                            className="h-12 text-lg"
                          />
                        </div>
                      </div>

                      {formData.revenue && formData.expenses && (
                        <div className={`p-4 rounded-lg ${profit >= 0 ? 'bg-green-50' : 'bg-red-50'}`}>
                          <div className="flex items-center justify-between">
                            <span className={`font-semibold ${profit >= 0 ? 'text-green-900' : 'text-red-900'}`}>
                              Profit/Loss:
                            </span>
                            <span className={`text-2xl font-bold ${profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {profit >= 0 ? '+' : ''}
                              {profit.toLocaleString()} RWF
                            </span>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Business Activities
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="customers">Customers served *</Label>
                          <Input
                            id="customers"
                            type="number"
                            placeholder="e.g., 25"
                            value={formData.customers}
                            onChange={(e) => setFormData({ ...formData, customers: e.target.value })}
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="productsSold">Products/services sold *</Label>
                        <Textarea
                          id="productsSold"
                          placeholder="Describe what you sold this month..."
                          value={formData.productsSold}
                          onChange={(e) => setFormData({ ...formData, productsSold: e.target.value })}
                          rows={3}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        Progress & Achievements
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="successes">What went well this month? *</Label>
                        <Textarea
                          id="successes"
                          placeholder="Share your achievements and successes..."
                          value={formData.successes}
                          onChange={(e) => setFormData({ ...formData, successes: e.target.value })}
                          rows={4}
                        />
                      </div>

                      <div>
                        <Label htmlFor="challenges">Challenges faced *</Label>
                        <Textarea
                          id="challenges"
                          placeholder="What difficulties did you encounter?"
                          value={formData.challenges}
                          onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                          rows={4}
                        />
                      </div>

                      <div>
                        <Label htmlFor="solutions">Solutions tried</Label>
                        <Textarea
                          id="solutions"
                          placeholder="How did you try to solve the challenges?"
                          value={formData.solutions}
                          onChange={(e) => setFormData({ ...formData, solutions: e.target.value })}
                          rows={4}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Upload className="h-5 w-5" />
                        Business Photos
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-[#0066CC] transition-colors cursor-pointer">
                        <Upload className="h-12 w-12 mx-auto mb-4 text-slate-400" />
                        <p className="text-slate-600 mb-2">Click to upload or drag and drop</p>
                        <p className="text-sm text-slate-500">PNG, JPG up to 10MB</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Support Needed</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Checkbox
                          id="businessAdvice"
                          checked={formData.supportNeeded.businessAdvice}
                          onCheckedChange={(checked) =>
                            setFormData({
                              ...formData,
                              supportNeeded: { ...formData.supportNeeded, businessAdvice: checked as boolean },
                            })
                          }
                        />
                        <label htmlFor="businessAdvice" className="cursor-pointer">
                          Business advice
                        </label>
                      </div>

                      <div className="flex items-start gap-2">
                        <Checkbox
                          id="financialPlanning"
                          checked={formData.supportNeeded.financialPlanning}
                          onCheckedChange={(checked) =>
                            setFormData({
                              ...formData,
                              supportNeeded: { ...formData.supportNeeded, financialPlanning: checked as boolean },
                            })
                          }
                        />
                        <label htmlFor="financialPlanning" className="cursor-pointer">
                          Financial planning
                        </label>
                      </div>

                      <div className="flex items-start gap-2">
                        <Checkbox
                          id="marketing"
                          checked={formData.supportNeeded.marketing}
                          onCheckedChange={(checked) =>
                            setFormData({
                              ...formData,
                              supportNeeded: { ...formData.supportNeeded, marketing: checked as boolean },
                            })
                          }
                        />
                        <label htmlFor="marketing" className="cursor-pointer">
                          Marketing help
                        </label>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Checkbox
                            id="other"
                            checked={formData.supportNeeded.other}
                            onCheckedChange={(checked) =>
                              setFormData({
                                ...formData,
                                supportNeeded: { ...formData.supportNeeded, other: checked as boolean },
                              })
                            }
                          />
                          <label htmlFor="other" className="cursor-pointer">
                            Other
                          </label>
                        </div>
                        {formData.supportNeeded.other && (
                          <Input
                            placeholder="Please specify..."
                            value={formData.supportNeeded.otherText}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                supportNeeded: { ...formData.supportNeeded, otherText: e.target.value },
                              })
                            }
                          />
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex gap-4">
                    <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700 h-12">
                      <Save className="h-5 w-5 mr-2" />
                      Submit Report
                    </Button>
                    <Button type="button" variant="outline" className="h-12">
                      Save Draft
                    </Button>
                  </div>

                  <p className="text-sm text-center text-slate-500">
                    💾 Your progress is automatically saved
                  </p>
                </form>
              </div>
            )}

            {activeTab === 'progress' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">My Progress</h1>
                  <p className="text-slate-600">Track your journey and achievements</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-[#0066CC] mb-2">6</div>
                      <div className="text-slate-600">Reports Submitted</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-green-600 mb-2">+45%</div>
                      <div className="text-slate-600">Revenue Growth</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-[#FF6B35] mb-2">3</div>
                      <div className="text-slate-600">Badges Earned</div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Growth Over Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="revenue" stroke="#0066CC" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Achievement Badges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { name: 'First Report', earned: true },
                        { name: '6 Month Streak', earned: true },
                        { name: 'Profit Maker', earned: true },
                        { name: '1 Year Anniversary', earned: false },
                      ].map((badge) => (
                        <div
                          key={badge.name}
                          className={`p-4 rounded-lg text-center ${
                            badge.earned ? 'bg-yellow-50 border-2 border-yellow-400' : 'bg-slate-100'
                          }`}
                        >
                          <Award
                            className={`h-12 w-12 mx-auto mb-2 ${
                              badge.earned ? 'text-yellow-600' : 'text-slate-400'
                            }`}
                          />
                          <div className="text-sm font-medium">{badge.name}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {['profile', 'messages', 'resources', 'settings'].includes(activeTab) && (
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </h2>
                <p className="text-slate-600">This section is under development</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}