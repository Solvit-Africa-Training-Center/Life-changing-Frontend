import type {
  User,
  Beneficiary,
  Donor,
  Staff,
  Program,
  Project,
  Donation,
  RecurringDonation,
  WeeklyTracking,
  Goal,
  Story,
  Notification,
  ActivityLog,
} from '@/types/backend';

// Base API URL - update this with your actual backend URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

// Helper function to get auth token
const getAuthToken = (): string | null => {
  return localStorage.getItem('lceo_auth_token');
};

// Helper function for API requests
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getAuthToken();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}

// ========== AUTHENTICATION ==========

export const authAPI = {
  async register(data: {
    email?: string;
    phone?: string;
    password: string;
    user_type: string;
  }): Promise<{ user: User; token: string }> {
    return apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async login(data: {
    email?: string;
    phone?: string;
    password: string;
  }): Promise<{ user: User; token: string }> {
    return apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async logout(): Promise<void> {
    return apiRequest('/auth/logout', { method: 'POST' });
  },

  async refreshToken(): Promise<{ token: string }> {
    return apiRequest('/auth/refresh-token', { method: 'POST' });
  },

  async forgotPassword(email: string): Promise<void> {
    return apiRequest('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },

  async resetPassword(token: string, password: string): Promise<void> {
    return apiRequest('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ token, password }),
    });
  },

  async verifyPhone(phone: string, code: string): Promise<void> {
    return apiRequest('/auth/verify-phone', {
      method: 'POST',
      body: JSON.stringify({ phone, code }),
    });
  },

  async verifyEmail(email: string, code: string): Promise<void> {
    return apiRequest('/auth/verify-email', {
      method: 'POST',
      body: JSON.stringify({ email, code }),
    });
  },
};

// ========== USERS ==========

export const usersAPI = {
  async getProfile(): Promise<User> {
    return apiRequest('/users/profile');
  },

  async updateProfile(data: Partial<User>): Promise<User> {
    return apiRequest('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async getBeneficiaries(): Promise<Beneficiary[]> {
    return apiRequest('/users/beneficiaries');
  },

  async getDonors(): Promise<Donor[]> {
    return apiRequest('/users/donors');
  },

  async getStaff(): Promise<Staff[]> {
    return apiRequest('/users/staff');
  },

  async updateUserRole(userId: string, role: string): Promise<User> {
    return apiRequest(`/users/${userId}/role`, {
      method: 'PUT',
      body: JSON.stringify({ role }),
    });
  },

  async updateUserStatus(userId: string, is_active: boolean): Promise<User> {
    return apiRequest(`/users/${userId}/status`, {
      method: 'PUT',
      body: JSON.stringify({ is_active }),
    });
  },
};

// ========== BENEFICIARIES ==========

export const beneficiariesAPI = {
  async list(params?: { status?: string; program_id?: string }): Promise<Beneficiary[]> {
    const queryString = params ? '?' + new URLSearchParams(params as any).toString() : '';
    return apiRequest(`/beneficiaries${queryString}`);
  },

  async getById(id: string): Promise<Beneficiary> {
    return apiRequest(`/beneficiaries/${id}`);
  },

  async create(data: Partial<Beneficiary>): Promise<Beneficiary> {
    return apiRequest('/beneficiaries', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async update(id: string, data: Partial<Beneficiary>): Promise<Beneficiary> {
    return apiRequest(`/beneficiaries/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async delete(id: string): Promise<void> {
    return apiRequest(`/beneficiaries/${id}`, { method: 'DELETE' });
  },

  async getProgress(id: string): Promise<any> {
    return apiRequest(`/beneficiaries/${id}/progress`);
  },

  async getTrackings(id: string): Promise<WeeklyTracking[]> {
    return apiRequest(`/beneficiaries/${id}/trackings`);
  },

  async submitTracking(id: string, data: Partial<WeeklyTracking>): Promise<WeeklyTracking> {
    return apiRequest(`/beneficiaries/${id}/trackings`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async getGoals(id: string): Promise<Goal[]> {
    return apiRequest(`/beneficiaries/${id}/goals`);
  },

  async createGoal(id: string, data: Partial<Goal>): Promise<Goal> {
    return apiRequest(`/beneficiaries/${id}/goals`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async updateGoal(id: string, goalId: string, data: Partial<Goal>): Promise<Goal> {
    return apiRequest(`/beneficiaries/${id}/goals/${goalId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
};

// ========== PROGRAMS & PROJECTS ==========

export const programsAPI = {
  async list(): Promise<Program[]> {
    return apiRequest('/programs');
  },

  async getById(id: string): Promise<Program> {
    return apiRequest(`/programs/${id}`);
  },

  async create(data: Partial<Program>): Promise<Program> {
    return apiRequest('/programs', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async update(id: string, data: Partial<Program>): Promise<Program> {
    return apiRequest(`/programs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async delete(id: string): Promise<void> {
    return apiRequest(`/programs/${id}`, { method: 'DELETE' });
  },

  async getProjects(id: string): Promise<Project[]> {
    return apiRequest(`/programs/${id}/projects`);
  },

  async getBeneficiaries(id: string): Promise<Beneficiary[]> {
    return apiRequest(`/programs/${id}/beneficiaries`);
  },

  async getImpact(id: string): Promise<any> {
    return apiRequest(`/programs/${id}/impact`);
  },
};

export const projectsAPI = {
  async list(): Promise<Project[]> {
    return apiRequest('/projects');
  },

  async getById(id: string): Promise<Project> {
    return apiRequest(`/projects/${id}`);
  },

  async create(data: Partial<Project>): Promise<Project> {
    return apiRequest('/projects', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async update(id: string, data: Partial<Project>): Promise<Project> {
    return apiRequest(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async getDonations(id: string): Promise<Donation[]> {
    return apiRequest(`/projects/${id}/donations`);
  },
};

// ========== DONATIONS ==========

export const donationsAPI = {
  async list(): Promise<Donation[]> {
    return apiRequest('/donations');
  },

  async getById(id: string): Promise<Donation> {
    return apiRequest(`/donations/${id}`);
  },

  async create(data: Partial<Donation>): Promise<Donation> {
    return apiRequest('/donations', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async cancel(id: string): Promise<void> {
    return apiRequest(`/donations/${id}/cancel`, { method: 'POST' });
  },

  async listRecurring(): Promise<RecurringDonation[]> {
    return apiRequest('/donations/recurring');
  },

  async createRecurring(data: Partial<RecurringDonation>): Promise<RecurringDonation> {
    return apiRequest('/donations/recurring', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async updateRecurring(id: string, data: Partial<RecurringDonation>): Promise<RecurringDonation> {
    return apiRequest(`/donations/recurring/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async cancelRecurring(id: string): Promise<void> {
    return apiRequest(`/donations/recurring/${id}`, { method: 'DELETE' });
  },
};

// ========== CONTENT ==========

export const contentAPI = {
  async listStories(params?: { is_featured?: boolean; is_published?: boolean }): Promise<Story[]> {
    const queryString = params ? '?' + new URLSearchParams(params as any).toString() : '';
    return apiRequest(`/content/stories${queryString}`);
  },

  async getStory(id: string): Promise<Story> {
    return apiRequest(`/content/stories/${id}`);
  },

  async createStory(data: Partial<Story>): Promise<Story> {
    return apiRequest('/content/stories', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async updateStory(id: string, data: Partial<Story>): Promise<Story> {
    return apiRequest(`/content/stories/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
};

// ========== ADMIN DASHBOARD ==========

export const adminAPI = {
  async getDashboardStats(): Promise<any> {
    return apiRequest('/admin/dashboard/stats');
  },

  async getAnalytics(params?: { start_date?: string; end_date?: string }): Promise<any> {
    const queryString = params ? '?' + new URLSearchParams(params as any).toString() : '';
    return apiRequest(`/admin/dashboard/analytics${queryString}`);
  },

  async getDonationReport(params: { start_date?: string; end_date?: string }): Promise<any> {
    const queryString = '?' + new URLSearchParams(params as any).toString();
    return apiRequest(`/admin/reports/donations${queryString}`);
  },

  async getBeneficiaryReport(params: { program_id?: string }): Promise<any> {
    const queryString = '?' + new URLSearchParams(params as any).toString();
    return apiRequest(`/admin/reports/beneficiaries${queryString}`);
  },

  async getProgramReport(params: { program_id?: string }): Promise<any> {
    const queryString = '?' + new URLSearchParams(params as any).toString();
    return apiRequest(`/admin/reports/programs${queryString}`);
  },

  async importBeneficiaries(file: File): Promise<any> {
    const formData = new FormData();
    formData.append('file', file);
    return fetch(`${API_BASE_URL}/admin/import/beneficiaries`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
      body: formData,
    }).then(res => res.json());
  },

  async importDonations(file: File): Promise<any> {
    const formData = new FormData();
    formData.append('file', file);
    return fetch(`${API_BASE_URL}/admin/import/donations`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
      body: formData,
    }).then(res => res.json());
  },

  async syncKobo(): Promise<any> {
    return apiRequest('/admin/sync/kobo', { method: 'POST' });
  },

  async getActivityLogs(params?: { user_id?: string; entity_type?: string }): Promise<ActivityLog[]> {
    const queryString = params ? '?' + new URLSearchParams(params as any).toString() : '';
    return apiRequest(`/admin/activity-logs${queryString}`);
  },

  async getSystemHealth(): Promise<any> {
    return apiRequest('/admin/system-health');
  },
};

// Export all APIs
export default {
  auth: authAPI,
  users: usersAPI,
  beneficiaries: beneficiariesAPI,
  programs: programsAPI,
  projects: projectsAPI,
  donations: donationsAPI,
  content: contentAPI,
  admin: adminAPI,
};
