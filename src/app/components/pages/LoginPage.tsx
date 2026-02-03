import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { useAuth, UserRole } from '@/app/components/AuthContext';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';

interface LoginPageProps {
  role: UserRole;
  onNavigate: (page: string) => void;
}

export function LoginPage({ role, onNavigate }: LoginPageProps) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');

  const roleLabels: Record<string, string> = {
    beneficiary: 'Beneficiary',
    donor: 'Donor',
    admin: 'Admin',
  };

  const roleDescriptions: Record<string, string> = {
    beneficiary: 'Access your dashboard to submit business reports and track your progress.',
    donor: 'View your donation history and track the impact of your contributions.',
    admin: 'Manage content, track beneficiaries, and oversee organizational activities.',
  };

  const fillDemoCredentials = () => {
    if (loginMethod === 'email' || role !== 'beneficiary') {
      setEmail(`${role}@lceo.org`);
      setPassword(`${role}123`);
    } else {
      setPhone('0788123456');
      setPassword('beneficiary123');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const identifier = loginMethod === 'phone' ? phone : email;
    const success = login(identifier, password, role, loginMethod === 'phone');
    
    if (success) {
      // Navigate to appropriate dashboard
      onNavigate(`${role}-dashboard`);
    } else {
      setError(`Invalid ${loginMethod === 'phone' ? 'phone number' : 'email'} or password. Please try again.`);
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-accent/5 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Back button */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>

        <Card className="border-2">
          <CardHeader className="space-y-2">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">L</span>
              </div>
            </div>
            
            <CardTitle className="text-2xl text-center">
              {roleLabels[role!]} Login
            </CardTitle>
            <CardDescription className="text-center">
              {roleDescriptions[role!]}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Show tabs only for beneficiaries */}
              {role === 'beneficiary' ? (
                <Tabs value={loginMethod} onValueChange={(v) => setLoginMethod(v as 'email' | 'phone')}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="email">Email</TabsTrigger>
                    <TabsTrigger value="phone">Phone Number</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="email" className="space-y-2 mt-4">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </TabsContent>
                  
                  <TabsContent value="phone" className="space-y-2 mt-4">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0788123456"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </TabsContent>
                </Tabs>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>

              {/* Demo credentials info */}
              <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
                <p className="text-xs font-semibold text-foreground mb-2">Demo Credentials:</p>
                <div className="text-xs text-muted-foreground space-y-1">
                  {role === 'beneficiary' && loginMethod === 'phone' ? (
                    <>
                      <p><strong>Phone:</strong> 0788123456</p>
                      <p><strong>Password:</strong> beneficiary123</p>
                    </>
                  ) : (
                    <>
                      <p><strong>Email:</strong> {role}@lceo.org</p>
                      <p><strong>Password:</strong> {role}123</p>
                    </>
                  )}
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-2 w-full"
                  onClick={fillDemoCredentials}
                >
                  Fill Demo Credentials
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Need a different account?{' '}
            <button
              onClick={() => onNavigate('home')}
              className="text-primary hover:underline font-medium"
            >
              View all login options
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}