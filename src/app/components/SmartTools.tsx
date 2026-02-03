import { useState } from 'react';
import { CheckCircle, Search, Heart, Briefcase, BookOpen, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Badge } from '@/app/components/ui/badge';
import { Textarea } from '@/app/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';

export function SmartTools() {
  return (
    <Tabs defaultValue="eligibility" className="w-full">
      <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
        <TabsTrigger value="eligibility">Eligibility Checker</TabsTrigger>
        <TabsTrigger value="resources">Resource Finder</TabsTrigger>
        <TabsTrigger value="mental-health">Mental Health</TabsTrigger>
        <TabsTrigger value="career">Career Paths</TabsTrigger>
      </TabsList>

      <TabsContent value="eligibility">
        <EligibilityChecker />
      </TabsContent>

      <TabsContent value="resources">
        <ResourceFinder />
      </TabsContent>

      <TabsContent value="mental-health">
        <MentalHealthConnector />
      </TabsContent>

      <TabsContent value="career">
        <CareerPathSuggestions />
      </TabsContent>
    </Tabs>
  );
}

function EligibilityChecker() {
  const [age, setAge] = useState('');
  const [district, setDistrict] = useState('');
  const [education, setEducation] = useState('');
  const [situation, setSituation] = useState('');
  const [result, setResult] = useState<any>(null);

  const checkEligibility = () => {
    const ageNum = parseInt(age);
    const eligible: string[] = [];
    
    if (ageNum >= 14 && ageNum <= 30) {
      // Check for different programs
      if (education === 'in-school' && ageNum >= 12 && ageNum <= 18) {
        eligible.push('School Retention Program');
      }
      if (ageNum >= 18 && ageNum <= 30) {
        eligible.push('IkiraroBiz Entrepreneurship');
      }
      if (situation === 'mental-health' || situation === 'trauma') {
        eligible.push('Mental Resilience & Human Capital');
      }
      if (eligible.length === 0 && ageNum >= 14 && ageNum <= 30) {
        eligible.push('General Support Programs');
      }
    }

    setResult({
      eligible: eligible.length > 0,
      programs: eligible,
      message: eligible.length > 0 
        ? 'Great news! You qualify for the following programs:'
        : 'Based on your information, you may not currently qualify. Please contact us directly for personalized guidance.',
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          Program Eligibility Checker
        </CardTitle>
        <p className="text-sm text-gray-600">
          Answer a few questions to see which LCEO programs you qualify for
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="age">Your Age</Label>
          <Input
            id="age"
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="district">District</Label>
          <Select value={district} onValueChange={setDistrict}>
            <SelectTrigger>
              <SelectValue placeholder="Select your district" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gasabo">Gasabo</SelectItem>
              <SelectItem value="kicukiro">Kicukiro</SelectItem>
              <SelectItem value="nyarugenge">Nyarugenge</SelectItem>
              <SelectItem value="bugesera">Bugesera</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="education">Education Status</Label>
          <Select value={education} onValueChange={setEducation}>
            <SelectTrigger>
              <SelectValue placeholder="Select your education status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="in-school">Currently in School</SelectItem>
              <SelectItem value="completed">Completed School</SelectItem>
              <SelectItem value="dropped-out">Dropped Out</SelectItem>
              <SelectItem value="never-attended">Never Attended</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="situation">Current Situation</Label>
          <Select value={situation} onValueChange={setSituation}>
            <SelectTrigger>
              <SelectValue placeholder="Select what describes you best" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="unemployment">Unemployed/Need Income</SelectItem>
              <SelectItem value="school-challenges">Struggling to Stay in School</SelectItem>
              <SelectItem value="mental-health">Need Mental Health Support</SelectItem>
              <SelectItem value="trauma">Experienced Trauma</SelectItem>
              <SelectItem value="entrepreneur">Want to Start Business</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={checkEligibility} className="w-full" disabled={!age || !district || !education || !situation}>
          Check Eligibility
        </Button>

        {result && (
          <div className={`p-4 rounded-lg ${result.eligible ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'}`}>
            <p className="font-semibold mb-2">{result.message}</p>
            {result.eligible && (
              <div className="space-y-2">
                {result.programs.map((program: string, idx: number) => (
                  <Badge key={idx} variant="secondary" className="mr-2 bg-green-100 text-green-800">
                    {program}
                  </Badge>
                ))}
                <p className="text-sm text-gray-700 mt-4">
                  Next step: Visit our <span className="font-semibold text-primary">Get Involved</span> page to apply!
                </p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function ResourceFinder() {
  const [need, setNeed] = useState('');
  const [resources, setResources] = useState<any[]>([]);

  const resourceDatabase: Record<string, any[]> = {
    'education': [
      { title: 'School Supplies Assistance', type: 'Material Support', contact: 'education@lceo.org.rw' },
      { title: 'Tutoring & Academic Support', type: 'Educational', contact: '+250 788 123 456' },
      { title: 'Scholarship Information', type: 'Financial', contact: 'scholarships@lceo.org.rw' },
    ],
    'business': [
      { title: 'IkiraroBiz Training Program', type: 'Training', contact: 'business@lceo.org.rw' },
      { title: 'Business Mentorship', type: 'Mentorship', contact: '+250 788 123 457' },
      { title: 'Microloans & Funding', type: 'Financial', contact: 'funding@lceo.org.rw' },
    ],
    'health': [
      { title: 'Pad Box Initiative', type: 'Menstrual Hygiene', contact: 'padbox@lceo.org.rw' },
      { title: 'Health Education Workshops', type: 'Education', contact: 'health@lceo.org.rw' },
      { title: 'Medical Referrals', type: 'Healthcare', contact: '+250 788 123 458' },
    ],
    'mental-health': [
      { title: 'Individual Counseling', type: 'Professional Support', contact: 'counseling@lceo.org.rw' },
      { title: 'Peer Support Groups', type: 'Community', contact: '+250 788 123 459' },
      { title: 'Crisis Hotline', type: 'Emergency', contact: '24/7: +250 788 CRISIS' },
    ],
  };

  const findResources = () => {
    setResources(resourceDatabase[need] || []);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="w-5 h-5 text-primary" />
          Resource Finder
        </CardTitle>
        <p className="text-sm text-gray-600">
          Find LCEO resources and support services based on your needs
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>What do you need help with?</Label>
          <Select value={need} onValueChange={setNeed}>
            <SelectTrigger>
              <SelectValue placeholder="Select your need" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="education">Education & School Support</SelectItem>
              <SelectItem value="business">Business & Entrepreneurship</SelectItem>
              <SelectItem value="health">Health & Hygiene</SelectItem>
              <SelectItem value="mental-health">Mental Health & Counseling</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={findResources} className="w-full" disabled={!need}>
          Find Resources
        </Button>

        {resources.length > 0 && (
          <div className="space-y-3 mt-4">
            {resources.map((resource, idx) => (
              <div key={idx} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-gray-900">{resource.title}</h4>
                <Badge variant="secondary" className="my-2">{resource.type}</Badge>
                <p className="text-sm text-gray-700">Contact: {resource.contact}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function MentalHealthConnector() {
  const [urgency, setUrgency] = useState('');
  const [recommendation, setRecommendation] = useState<any>(null);

  const getRecommendation = () => {
    const recommendations: Record<string, any> = {
      'crisis': {
        level: 'URGENT',
        color: 'red',
        message: 'Please reach out immediately. You are not alone.',
        actions: [
          { text: 'Call Crisis Hotline: +250 788 CRISIS (24/7)', urgent: true },
          { text: 'Visit nearest health center', urgent: true },
          { text: 'Contact LCEO counselor: counseling@lceo.org.rw', urgent: true },
        ],
      },
      'high': {
        level: 'HIGH PRIORITY',
        color: 'orange',
        message: 'We recommend professional support as soon as possible.',
        actions: [
          { text: 'Schedule counseling session: +250 788 123 459' },
          { text: 'Join next peer support group (Mondays, 3 PM)' },
          { text: 'Access self-care resources on our portal' },
        ],
      },
      'moderate': {
        level: 'MODERATE',
        color: 'yellow',
        message: 'Let\'s connect you with supportive resources.',
        actions: [
          { text: 'Join peer support groups' },
          { text: 'Access mental wellness workshops' },
          { text: 'Connect with a peer mentor' },
        ],
      },
      'low': {
        level: 'PREVENTIVE',
        color: 'green',
        message: 'Great! Let\'s keep your mental wellness strong.',
        actions: [
          { text: 'Join wellness workshops' },
          { text: 'Access self-care resources' },
          { text: 'Connect with community' },
        ],
      },
    };

    setRecommendation(recommendations[urgency]);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-primary" />
          Mental Health Resource Connector
        </CardTitle>
        <p className="text-sm text-gray-600">
          Connect with appropriate mental health support - completely confidential
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
          <p className="text-sm text-purple-900">
            <AlertCircle className="w-4 h-4 inline mr-1" />
            Your privacy is protected. All mental health support is confidential.
          </p>
        </div>

        <div>
          <Label>How are you feeling right now?</Label>
          <RadioGroup value={urgency} onValueChange={setUrgency}>
            <div className="flex items-center space-x-2 p-3 rounded border hover:bg-gray-50">
              <RadioGroupItem value="crisis" id="crisis" />
              <Label htmlFor="crisis" className="flex-1 cursor-pointer">
                In crisis - need immediate help
              </Label>
            </div>
            <div className="flex items-center space-x-2 p-3 rounded border hover:bg-gray-50">
              <RadioGroupItem value="high" id="high" />
              <Label htmlFor="high" className="flex-1 cursor-pointer">
                Struggling significantly - need support soon
              </Label>
            </div>
            <div className="flex items-center space-x-2 p-3 rounded border hover:bg-gray-50">
              <RadioGroupItem value="moderate" id="moderate" />
              <Label htmlFor="moderate" className="flex-1 cursor-pointer">
                Having some challenges - want to talk
              </Label>
            </div>
            <div className="flex items-center space-x-2 p-3 rounded border hover:bg-gray-50">
              <RadioGroupItem value="low" id="low" />
              <Label htmlFor="low" className="flex-1 cursor-pointer">
                Doing okay - interested in wellness resources
              </Label>
            </div>
          </RadioGroup>
        </div>

        <Button onClick={getRecommendation} className="w-full" disabled={!urgency}>
          Get Recommendations
        </Button>

        {recommendation && (
          <div className={`p-4 rounded-lg border-2 ${
            recommendation.color === 'red' ? 'bg-red-50 border-red-300' :
            recommendation.color === 'orange' ? 'bg-orange-50 border-orange-300' :
            recommendation.color === 'yellow' ? 'bg-yellow-50 border-yellow-300' :
            'bg-green-50 border-green-300'
          }`}>
            <Badge className={`mb-2 ${
              recommendation.color === 'red' ? 'bg-red-600' :
              recommendation.color === 'orange' ? 'bg-orange-600' :
              recommendation.color === 'yellow' ? 'bg-yellow-600' :
              'bg-green-600'
            }`}>
              {recommendation.level}
            </Badge>
            <p className="font-semibold mb-3">{recommendation.message}</p>
            <div className="space-y-2">
              {recommendation.actions.map((action: any, idx: number) => (
                <div key={idx} className={`p-3 rounded ${action.urgent ? 'bg-white border-2 border-red-400' : 'bg-white'}`}>
                  <p className="text-sm font-medium">{action.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function CareerPathSuggestions() {
  const [interests, setInterests] = useState<string[]>([]);
  const [skills, setSkills] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const careerPaths: Record<string, any> = {
    'creative': {
      title: 'Creative & Design',
      careers: [
        { name: 'Fashion Designer / Tailor', program: 'IkiraroBiz', demand: 'High' },
        { name: 'Graphic Designer', program: 'Digital Skills', demand: 'Growing' },
        { name: 'Artisan / Crafts', program: 'IkiraroBiz', demand: 'Medium' },
      ],
    },
    'business': {
      title: 'Business & Entrepreneurship',
      careers: [
        { name: 'Small Business Owner', program: 'IkiraroBiz', demand: 'High' },
        { name: 'Market Vendor', program: 'Business Training', demand: 'High' },
        { name: 'Business Consultant', program: 'Advanced Training', demand: 'Growing' },
      ],
    },
    'helping': {
      title: 'Helping & Care',
      careers: [
        { name: 'Peer Counselor', program: 'Mental Resilience', demand: 'High' },
        { name: 'Community Health Worker', program: 'Health Training', demand: 'Very High' },
        { name: 'Social Worker', program: 'Professional Development', demand: 'Growing' },
      ],
    },
    'technical': {
      title: 'Technical & Practical',
      careers: [
        { name: 'IT Support Specialist', program: 'Tech Training', demand: 'Very High' },
        { name: 'Agricultural Technician', program: 'Agri-Business', demand: 'High' },
        { name: 'Electrician / Plumber', program: 'Technical Training', demand: 'High' },
      ],
    },
  };

  const getSuggestions = () => {
    const results: any[] = [];
    interests.forEach((interest) => {
      if (careerPaths[interest]) {
        results.push(careerPaths[interest]);
      }
    });
    setSuggestions(results);
  };

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-primary" />
          Career Path Suggestions
        </CardTitle>
        <p className="text-sm text-gray-600">
          Discover career paths aligned with your interests and LCEO programs
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>What are you interested in? (Select all that apply)</Label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {[
              { id: 'creative', label: 'Creative & Design', icon: '🎨' },
              { id: 'business', label: 'Business', icon: '💼' },
              { id: 'helping', label: 'Helping Others', icon: '❤️' },
              { id: 'technical', label: 'Technical Skills', icon: '⚙️' },
            ].map((option) => (
              <Button
                key={option.id}
                variant={interests.includes(option.id) ? 'default' : 'outline'}
                onClick={() => toggleInterest(option.id)}
                className="justify-start"
              >
                <span className="mr-2">{option.icon}</span>
                {option.label}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="skills">Current Skills or Experience (Optional)</Label>
          <Textarea
            id="skills"
            placeholder="E.g., I know how to sew, I'm good with computers, I enjoy working with children..."
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>

        <Button onClick={getSuggestions} className="w-full" disabled={interests.length === 0}>
          Get Career Suggestions
        </Button>

        {suggestions.length > 0 && (
          <div className="space-y-4 mt-4">
            {suggestions.map((category, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border">
                <h4 className="font-bold text-lg mb-3">{category.title}</h4>
                <div className="space-y-2">
                  {category.careers.map((career: any, cIdx: number) => (
                    <div key={cIdx} className="p-3 bg-white rounded border">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="font-semibold">{career.name}</h5>
                        <Badge variant="secondary" className={
                          career.demand === 'Very High' ? 'bg-green-100 text-green-800' :
                          career.demand === 'High' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }>
                          {career.demand} Demand
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">LCEO Program: {career.program}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-900">
                <BookOpen className="w-4 h-4 inline mr-1" />
                Ready to start? Visit our <span className="font-semibold">Get Involved</span> page to apply for these programs!
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
