import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { useAuth, UserRole } from '@/app/components/AuthContext';
import { ArrowLeft, Eye, EyeOff, Mail, Phone } from 'lucide-react';

interface LoginPageProps {
  role: UserRole;
  onNavigate: (page: string) => void;
}

const PRIMARY_GREEN = '#4fb1a1';
const DARK_ORANGE = '#ff8c42';

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
    <div 
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ background: `linear-gradient(135deg, ${PRIMARY_GREEN}15 0%, rgba(255,255,255,1) 50%, rgba(255,140,66,0.08) 100%)` }}
    >
      <div className="w-full max-w-md">
        {/* Back button */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-sm mb-10 transition-colors"
          style={{ color: '#667470' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = PRIMARY_GREEN)}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#667470')}
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>

        <div 
          className="rounded-2xl p-8 shadow-lg"
          style={{ 
            backgroundColor: '#ffffff',
            boxShadow: '0 10px 40px rgba(79, 177, 161, 0.08)'
          }}
        >
          {/* Calm spacing at top - no logo */}
          <div style={{ marginBottom: '3rem' }}>
            <h1 
              className="text-3xl font-semibold text-center"
              style={{ 
                color: PRIMARY_GREEN,
                letterSpacing: '0.75px',
                marginBottom: '1rem'
              }}
            >
              {roleLabels[role!]} Login
            </h1>
            <p 
              className="text-center text-base"
              style={{ 
                color: '#667470',
                lineHeight: '1.6',
                letterSpacing: '0.25px'
              }}
            >
              {roleDescriptions[role!]}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-0">
            {error && (
              <div 
                className="mb-6 p-4 rounded-lg flex items-start gap-3"
                style={{ backgroundColor: 'rgba(220, 53, 69, 0.1)' }}
              >
                <div 
                  className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: '#DC3545', color: 'white', fontSize: '12px', fontWeight: 'bold' }}
                >
                  !
                </div>
                <p style={{ color: '#DC3545', fontSize: '14px', lineHeight: '1.5' }}>
                  {error}
                </p>
              </div>
            )}

            {/* Login Method Selector - Pill Style Toggle */}
            {role === 'beneficiary' && (
              <div style={{ marginBottom: '2.5rem' }}>
                <div className="flex gap-3">
                  {['email', 'phone'].map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setLoginMethod(method as 'email' | 'phone')}
                      className="flex-1 py-3 px-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2"
                      style={{
                        backgroundColor: loginMethod === method ? PRIMARY_GREEN : 'transparent',
                        color: loginMethod === method ? 'white' : '#667470',
                        border: loginMethod === method ? `2px solid ${PRIMARY_GREEN}` : `2px solid #e0e0e0`,
                        letterSpacing: '0.5px',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        if (loginMethod !== method) {
                          e.currentTarget.style.borderColor = DARK_ORANGE;
                          e.currentTarget.style.color = DARK_ORANGE;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (loginMethod !== method) {
                          e.currentTarget.style.borderColor = '#e0e0e0';
                          e.currentTarget.style.color = '#667470';
                        }
                      }}
                    >
                      {method === 'email' ? <Mail size={18} /> : <Phone size={18} />}
                      <span>{method === 'email' ? 'Email' : 'Phone'}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Email/Phone Input */}
            <div style={{ marginBottom: '2rem' }}>
              {role === 'beneficiary' && loginMethod === 'phone' ? (
                <div>
                  <Label 
                    htmlFor="phone"
                    style={{ 
                      color: '#122f2b',
                      fontSize: '14px',
                      fontWeight: '600',
                      letterSpacing: '0.3px',
                      marginBottom: '0.75rem',
                      display: 'block'
                    }}
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="0788 123 456"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    disabled={isLoading}
                    style={{
                      padding: '0.875rem 1rem',
                      borderRadius: '0.75rem',
                      border: `2px solid #e0e0e0`,
                      fontSize: '15px',
                      color: '#122f2b',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = PRIMARY_GREEN;
                      e.currentTarget.style.boxShadow = `0 0 0 3px ${PRIMARY_GREEN}20`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#e0e0e0';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
              ) : (
                <div>
                  <Label 
                    htmlFor="email"
                    style={{ 
                      color: '#122f2b',
                      fontSize: '14px',
                      fontWeight: '600',
                      letterSpacing: '0.3px',
                      marginBottom: '0.75rem',
                      display: 'block'
                    }}
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    style={{
                      padding: '0.875rem 1rem',
                      borderRadius: '0.75rem',
                      border: `2px solid #e0e0e0`,
                      fontSize: '15px',
                      color: '#122f2b',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = PRIMARY_GREEN;
                      e.currentTarget.style.boxShadow = `0 0 0 3px ${PRIMARY_GREEN}20`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#e0e0e0';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
              )}
            </div>

            {/* Password Input */}
            <div style={{ marginBottom: '2.5rem' }}>
              <Label 
                htmlFor="password"
                style={{ 
                  color: '#122f2b',
                  fontSize: '14px',
                  fontWeight: '600',
                  letterSpacing: '0.3px',
                  marginBottom: '1rem',
                  display: 'block'
                }}
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  style={{
                    padding: '1rem 1rem',
                    paddingRight: '3.75rem',
                    borderRadius: '0.75rem',
                    border: `2px solid #e0e0e0`,
                    fontSize: '15px',
                    color: '#122f2b',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = PRIMARY_GREEN;
                    e.currentTarget.style.boxShadow = `0 0 0 6px ${PRIMARY_GREEN}20`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#e0e0e0';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 transition-colors"
                  style={{
                    right: 12,
                    background: 'transparent',
                    border: 'none',
                    padding: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    color: showPassword ? PRIMARY_GREEN : '#889390',
                    opacity: showPassword ? 1 : 0.85
                  }}
                  onMouseEnter={(e) => { if (!isLoading) e.currentTarget.style.color = DARK_ORANGE; }}
                  onMouseLeave={(e) => { if (!isLoading) e.currentTarget.style.color = showPassword ? PRIMARY_GREEN : '#889390'; }}
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Sign In Button (reduced width, centered) */}
            <button
              type="submit"
              disabled={isLoading}
              className="block rounded-lg font-semibold transition-all duration-300"
              style={{
                width: '62%',
                margin: '0 auto 2.25rem',
                padding: '0.95rem 0',
                backgroundColor: PRIMARY_GREEN,
                color: 'white',
                letterSpacing: '0.85px',
                fontSize: '15px',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                opacity: isLoading ? 0.85 : 1,
                boxShadow: '0 6px 18px rgba(79,177,161,0.08)'
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.background = `linear-gradient(90deg, ${DARK_ORANGE}, ${PRIMARY_GREEN})`;
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.background = PRIMARY_GREEN;
                }
              }}
              onFocus={(e) => {
                e.currentTarget.style.boxShadow = `0 0 0 6px ${PRIMARY_GREEN}20`;
              }}
              onBlur={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(79,177,161,0.08)';
              }}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>

            {/* Demo credentials info */}
            <div 
              className="p-5 rounded-xl border"
              style={{ 
                backgroundColor: 'rgba(79, 177, 161, 0.05)',
                borderColor: 'rgba(79, 177, 161, 0.15)'
              }}
            >
              <p 
                className="text-sm font-semibold mb-3"
                style={{ color: '#122f2b' }}
              >
                Demo Credentials:
              </p>
              <div className="text-sm space-y-1.5" style={{ color: '#667470', lineHeight: '1.5' }}>
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
              <button
                type="button"
                onClick={fillDemoCredentials}
                className="mt-4 w-full py-2.5 rounded-lg font-medium transition-all duration-300"
                style={{
                  backgroundColor: 'transparent',
                  color: PRIMARY_GREEN,
                  border: `2px solid ${PRIMARY_GREEN}`,
                  letterSpacing: '0.5px',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = PRIMARY_GREEN;
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = PRIMARY_GREEN;
                }}
              >
                Fill Demo Credentials
              </button>
            </div>
          </form>
        </div>

        {/* Footer links */}
        <div className="mt-8 text-center">
          <p style={{ color: '#667470', fontSize: '14px', lineHeight: '1.5' }}>
            Don't have an account?{' '}
            <button
              onClick={() => onNavigate('home')}
              className="font-semibold transition-colors"
              style={{ color: PRIMARY_GREEN, background: 'none', border: 'none', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = DARK_ORANGE)}
              onMouseLeave={(e) => (e.currentTarget.style.color = PRIMARY_GREEN)}
            >
            Register Here.
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}