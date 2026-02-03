import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Badge } from '@/app/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/app/components/ui/dialog';
import { 
  FileEdit, Eye, Edit, Trash2, Plus, Image, Globe, Calendar,
  CheckCircle, Clock, Search
} from 'lucide-react';
import { toast } from 'sonner';

export function ContentManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const [contents, setContents] = useState([
    {
      id: 1,
      title: 'Grace\'s Entrepreneurship Journey',
      type: 'Success Story',
      status: 'Published',
      author: 'Editor User',
      date: 'Jan 15, 2026',
      translations: ['EN', 'FR'],
    },
    {
      id: 2,
      title: 'School Retention Program Update Q1 2026',
      type: 'Program Update',
      status: 'Published',
      author: 'Admin User',
      date: 'Jan 10, 2026',
      translations: ['EN', 'FR', 'RW'],
    },
    {
      id: 3,
      title: 'Mental Health Awareness Campaign',
      type: 'Campaign',
      status: 'Draft',
      author: 'Editor User',
      date: 'Jan 20, 2026',
      translations: ['EN'],
    },
    {
      id: 4,
      title: 'New Partnership Announcement',
      type: 'News',
      status: 'Scheduled',
      author: 'Admin User',
      date: 'Jan 30, 2026',
      translations: ['EN', 'FR'],
    },
  ]);

  const handleDelete = (id: number) => {
    setContents(contents.filter(c => c.id !== id));
    toast.success('Content deleted successfully');
  };

  const handlePublish = (id: number) => {
    setContents(contents.map(c => 
      c.id === id ? { ...c, status: 'Published' } : c
    ));
    toast.success('Content published successfully');
  };

  const filteredContents = contents.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || content.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div className="flex gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create New Content
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Content</DialogTitle>
            </DialogHeader>
            <form className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter content title" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="type">Content Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="success">Success Story</SelectItem>
                      <SelectItem value="program">Program Update</SelectItem>
                      <SelectItem value="news">News</SelectItem>
                      <SelectItem value="campaign">Campaign</SelectItem>
                      <SelectItem value="report">Report</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="language">Primary Language</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="rw">Kinyarwanda</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea 
                  id="content" 
                  placeholder="Write your content here..." 
                  rows={8}
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline">Save Draft</Button>
                <Button type="button">Publish</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Content List */}
      <Card>
        <CardHeader>
          <CardTitle>Content Library</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredContents.map((content) => (
              <div key={content.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold">{content.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {content.type}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {content.date}
                      </span>
                      <span>by {content.author}</span>
                      <div className="flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        {content.translations.map((lang, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs px-1 py-0">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={
                        content.status === 'Published' ? 'default' :
                        content.status === 'Draft' ? 'secondary' :
                        'outline'
                      }
                      className={
                        content.status === 'Published' ? 'bg-green-100 text-green-800' :
                        content.status === 'Draft' ? 'bg-gray-100 text-gray-800' :
                        'bg-blue-100 text-blue-800'
                      }
                    >
                      {content.status === 'Published' && <CheckCircle className="w-3 h-3 mr-1" />}
                      {content.status === 'Scheduled' && <Clock className="w-3 h-3 mr-1" />}
                      {content.status}
                    </Badge>
                    
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    {content.status !== 'Published' && (
                      <Button 
                        variant="default" 
                        size="sm"
                        onClick={() => handlePublish(content.id)}
                      >
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Publish
                      </Button>
                    )}
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleDelete(content.id)}
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Content Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Total Content</p>
            <p className="text-2xl font-bold">{contents.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Published</p>
            <p className="text-2xl font-bold text-green-600">
              {contents.filter(c => c.status === 'Published').length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Drafts</p>
            <p className="text-2xl font-bold text-gray-600">
              {contents.filter(c => c.status === 'Draft').length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Scheduled</p>
            <p className="text-2xl font-bold text-blue-600">
              {contents.filter(c => c.status === 'Scheduled').length}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
