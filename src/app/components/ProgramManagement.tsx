import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Badge } from '@/app/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/app/components/ui/dialog';
import { Progress } from '@/app/components/ui/progress';
import { 
  Target, Users, DollarSign, TrendingUp, Edit, Trash2, Plus,
  Calendar, MapPin, Award, Settings
} from 'lucide-react';
import { toast } from 'sonner';

export function ProgramManagement() {
  const [programs, setPrograms] = useState([
    {
      id: 1,
      name: 'IkiraroBiz Entrepreneurship',
      description: 'Comprehensive entrepreneurship training and business development program',
      status: 'Active',
      participants: 95,
      capacity: 120,
      budget: 25000,
      spent: 18500,
      startDate: 'Jan 2025',
      location: 'Kigali & Bugesera',
      coordinator: 'Mary Uwimana',
      successRate: 82,
    },
    {
      id: 2,
      name: 'School Retention Program',
      description: 'Supporting girls to stay in school through menstrual hygiene and academic support',
      status: 'Active',
      participants: 248,
      capacity: 300,
      budget: 35000,
      spent: 28000,
      startDate: 'Aug 2024',
      location: '15 Partner Schools',
      coordinator: 'Jean Paul Nkusi',
      successRate: 94,
    },
    {
      id: 3,
      name: 'Mental Resilience & Human Capital',
      description: 'Trauma counseling and life skills development program',
      status: 'Active',
      participants: 73,
      capacity: 100,
      budget: 20000,
      spent: 15000,
      startDate: 'Mar 2025',
      location: 'Nyarugenge',
      coordinator: 'Hope Mutoni',
      successRate: 88,
    },
    {
      id: 4,
      name: 'Digital Skills Training',
      description: 'Technology and digital literacy training for young women',
      status: 'Planning',
      participants: 0,
      capacity: 50,
      budget: 15000,
      spent: 0,
      startDate: 'Mar 2026',
      location: 'Kigali',
      coordinator: 'TBD',
      successRate: 0,
    },
  ]);

  const handleDelete = (id: number) => {
    setPrograms(programs.filter(p => p.id !== id));
    toast.success('Program deleted successfully');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Planning':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      case 'On Hold':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Program Management</h2>
          <p className="text-sm text-gray-600">Manage and monitor all LCEO programs</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create New Program
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Program</DialogTitle>
            </DialogHeader>
            <form className="space-y-4">
              <div>
                <Label htmlFor="programName">Program Name</Label>
                <Input id="programName" placeholder="Enter program name" />
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Brief description of the program" 
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="capacity">Participant Capacity</Label>
                  <Input id="capacity" type="number" placeholder="100" />
                </div>
                
                <div>
                  <Label htmlFor="budget">Total Budget ($)</Label>
                  <Input id="budget" type="number" placeholder="25000" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input id="startDate" type="date" />
                </div>
                
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="e.g., Kigali" />
                </div>
              </div>

              <div>
                <Label htmlFor="coordinator">Program Coordinator</Label>
                <Input id="coordinator" placeholder="Coordinator name" />
              </div>

              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline">Cancel</Button>
                <Button type="button">Create Program</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Program Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Programs</p>
                <p className="text-2xl font-bold">
                  {programs.filter(p => p.status === 'Active').length}
                </p>
              </div>
              <Target className="w-10 h-10 text-green-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Participants</p>
                <p className="text-2xl font-bold">
                  {programs.reduce((sum, p) => sum + p.participants, 0)}
                </p>
              </div>
              <Users className="w-10 h-10 text-blue-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Budget</p>
                <p className="text-2xl font-bold">
                  ${programs.reduce((sum, p) => sum + p.budget, 0).toLocaleString()}
                </p>
              </div>
              <DollarSign className="w-10 h-10 text-purple-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Success Rate</p>
                <p className="text-2xl font-bold">
                  {Math.round(
                    programs.reduce((sum, p) => sum + p.successRate, 0) / programs.length
                  )}%
                </p>
              </div>
              <TrendingUp className="w-10 h-10 text-green-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Programs List */}
      <div className="grid gap-6">
        {programs.map((program) => (
          <Card key={program.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle>{program.name}</CardTitle>
                    <Badge className={getStatusColor(program.status)}>
                      {program.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{program.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleDelete(program.id)}
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Participants */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Participants</span>
                    <span className="text-sm font-semibold">
                      {program.participants} / {program.capacity}
                    </span>
                  </div>
                  <Progress value={(program.participants / program.capacity) * 100} />
                  <p className="text-xs text-gray-500 mt-1">
                    {Math.round((program.participants / program.capacity) * 100)}% capacity
                  </p>
                </div>

                {/* Budget */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Budget</span>
                    <span className="text-sm font-semibold">
                      ${program.spent.toLocaleString()} / ${program.budget.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={(program.spent / program.budget) * 100} />
                  <p className="text-xs text-gray-500 mt-1">
                    {Math.round((program.spent / program.budget) * 100)}% spent
                  </p>
                </div>

                {/* Success Rate */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600">Success Rate</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-green-600">
                      {program.successRate}%
                    </span>
                    {program.successRate > 80 && (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    )}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">Started {program.startDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{program.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{program.coordinator}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-4 pt-4 border-t">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  Manage Participants
                </Button>
                <Button variant="outline" size="sm">
                  View Reports
                </Button>
                <Button variant="outline" size="sm">
                  Budget Breakdown
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
