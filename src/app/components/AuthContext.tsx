import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { UserType } from '@/types/backend';
import { authAPI } from '@/services/api';

export type UserRole = 'beneficiary' | 'donor' | 'admin' | null;

interface User {
  id?: string;
  email?: string;
  phone?: string;
  user_type: UserRole;
  name: string;
  language?: 'en' | 'rw';
}

interface AuthContextType {
  user: User | null;
  login: (identifier: string, password: string, role: UserRole, isPhone?: boolean) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo credentials for testing (will be replaced with real API calls)
const DEMO_CREDENTIALS = {
  beneficiary: {
    email: 'beneficiary@lceo.org',
    phone: '0788123456',
    password: 'beneficiary123',
    name: 'Sarah Uwase',
  },
  donor: {
    email: 'donor@lceo.org',
    password: 'donor123',
    name: 'John Smith',
  },
  admin: {
    email: 'admin@lceo.org',
    password: 'admin123',
    name: 'Admin User',
  },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('lceo_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('lceo_user');
      }
    }
  }, []);

  const login = async (identifier: string, password: string, role: UserRole, isPhone: boolean = false): Promise<boolean> => {
    if (!role) return false;

    // TODO: Replace with actual API call
    // For now, use demo credentials
    try {
      const credentials = DEMO_CREDENTIALS[role];
      
      const isValid = isPhone 
        ? (credentials.phone === identifier && password === credentials.password)
        : (credentials.email === identifier && password === credentials.password);
      
      if (isValid) {
        const newUser: User = {
          ...(isPhone ? { phone: credentials.phone } : { email: credentials.email }),
          user_type: role,
          name: credentials.name,
          language: 'en',
        };
        setUser(newUser);
        localStorage.setItem('lceo_user', JSON.stringify(newUser));
        return true;
      }

      /* 
      // Uncomment this when backend is ready:
      const response = await authAPI.login({
        ...(isPhone ? { phone: identifier } : { email: identifier }),
        password,
      });
      
      const newUser: User = {
        id: response.user.id,
        email: response.user.email,
        phone: response.user.phone,
        user_type: response.user.user_type as UserRole,
        name: '', // Will be populated from beneficiary/donor/staff table
        language: response.user.language,
      };
      
      setUser(newUser);
      localStorage.setItem('lceo_user', JSON.stringify(newUser));
      localStorage.setItem('lceo_auth_token', response.token);
      return true;
      */
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('lceo_user');
    localStorage.removeItem('lceo_auth_token');
    
    // TODO: Call API logout when backend is ready
    // authAPI.logout().catch(console.error);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        login, 
        logout, 
        isAuthenticated: !!user 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}