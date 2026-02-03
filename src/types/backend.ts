// ========== ENUMS ==========

export enum UserType {
  ADMIN = 'admin',
  DONOR = 'donor',
  BENEFICIARY = 'beneficiary',
}

export enum StaffRole {
  SUPER_ADMIN = 'super_admin',
  ADMIN = 'admin',
  PROGRAM_MANAGER = 'program_manager',
  DATA_ENTRY = 'data_entry',
  VIEWER = 'viewer',
}

export enum Language {
  EN = 'en',
  RW = 'rw',
}

export enum BeneficiaryStatus {
  ACTIVE = 'active',
  GRADUATED = 'graduated',
  INACTIVE = 'inactive',
}

export enum TrackingFrequency {
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
}

export enum AttendanceStatus {
  PRESENT = 'present',
  ABSENT = 'absent',
  LATE = 'late',
}

export enum TaskStatus {
  COMPLETED = 'completed',
  IN_PROGRESS = 'in_progress',
  NOT_DONE = 'not_done',
}

export enum GoalType {
  FINANCIAL = 'financial',
  BUSINESS = 'business',
  EDUCATION = 'education',
  PERSONAL = 'personal',
  SKILLS = 'skills',
}

export enum GoalStatus {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  ACHIEVED = 'achieved',
  ABANDONED = 'abandoned',
}

export enum ProgramCategory {
  EDUCATION = 'education',
  ENTREPRENEURSHIP = 'entrepreneurship',
  HEALTH = 'health',
  CROSS_CUTTING = 'cross_cutting',
}

export enum ProgramStatus {
  PLANNING = 'planning',
  ACTIVE = 'active',
  COMPLETED = 'completed',
  ARCHIVED = 'archived',
}

export enum PaymentMethod {
  CARD = 'card',
  MOBILE_MONEY = 'mobile_money',
  BANK_TRANSFER = 'bank_transfer',
  PAYPAL = 'paypal',
}

export enum PaymentStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  FAILED = 'failed',
  REFUNDED = 'refunded',
}

export enum DonationType {
  ONE_TIME = 'one_time',
  MONTHLY = 'monthly',
  QUARTERLY = 'quarterly',
  YEARLY = 'yearly',
}

export enum RecurringFrequency {
  MONTHLY = 'monthly',
  QUARTERLY = 'quarterly',
  YEARLY = 'yearly',
}

export enum RecurringStatus {
  ACTIVE = 'active',
  PAUSED = 'paused',
  CANCELLED = 'cancelled',
}

export enum Currency {
  RWF = 'RWF',
  USD = 'USD',
  EUR = 'EUR',
}

export enum ReceiptPreference {
  EMAIL = 'email',
  POSTAL = 'postal',
  NONE = 'none',
}

export enum DocumentType {
  ID_CARD = 'id_card',
  BIRTH_CERTIFICATE = 'birth_certificate',
  SCHOOL_CERTIFICATE = 'school_certificate',
  MEDICAL_REPORT = 'medical_report',
  BUSINESS_LICENSE = 'business_license',
  OTHER = 'other',
}

export enum NotificationType {
  DONATION_RECEIPT = 'donation_receipt',
  TRACKING_REMINDER = 'tracking_reminder',
  PROGRAM_UPDATE = 'program_update',
  IMPACT_REPORT = 'impact_report',
  SYSTEM_ALERT = 'system_alert',
  WELCOME = 'welcome',
  PASSWORD_RESET = 'password_reset',
}

export enum NotificationStatus {
  PENDING = 'pending',
  SENT = 'sent',
  DELIVERED = 'delivered',
  FAILED = 'failed',
  READ = 'read',
}

export enum NotificationChannel {
  SMS = 'sms',
  EMAIL = 'email',
  IN_APP = 'in_app',
}

export enum MetricPeriod {
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  QUARTERLY = 'quarterly',
  ANNUAL = 'annual',
}

export enum MetricSource {
  KOBO = 'kobo',
  MANUAL = 'manual',
  SYSTEM_CALCULATED = 'system_calculated',
}

export enum AuthorRole {
  BENEFICIARY = 'beneficiary',
  DONOR = 'donor',
  STAFF = 'staff',
  PARTNER = 'partner',
  VOLUNTEER = 'volunteer',
}

// ========== INTERFACES ==========

export interface User {
  id: string;
  email?: string;
  phone?: string;
  password?: string;
  user_type: UserType;
  language: Language;
  is_verified: boolean;
  offline_sync_token?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  last_login_at?: string;
}

export interface Location {
  province?: string;
  district?: string;
  sector?: string;
  cell?: string;
  village?: string;
  latitude?: number;
  longitude?: number;
}

export interface Beneficiary {
  id: string;
  user_id: string;
  full_name: string;
  date_of_birth: string;
  location: Location;
  program_id: string;
  status: BeneficiaryStatus;
  enrollment_date: string;
  exit_date?: string;
  start_capital: number;
  current_capital: number;
  business_type: string;
  tracking_frequency: TrackingFrequency;
  last_tracking_date?: string;
  next_tracking_date?: string;
  profile_completion: number;
  requires_special_attention: boolean;
  created_at: string;
  updated_at: string;
}

export interface CommunicationPreferences {
  email: boolean;
  sms: boolean;
  phone: boolean;
  whatsapp: boolean;
}

export interface Donor {
  id: string;
  user_id: string;
  full_name: string;
  country: string;
  preferred_currency: Currency;
  communication_preferences: CommunicationPreferences;
  receipt_preference: ReceiptPreference;
  total_donated: number;
  last_donation_date?: string;
  is_recurring_donor: boolean;
  anonymity_preference: boolean;
  receive_newsletter: boolean;
  created_at: string;
  updated_at: string;
}

export interface StaffPermissions {
  can_create_programs?: boolean;
  can_edit_programs?: boolean;
  can_delete_programs?: boolean;
  can_manage_users?: boolean;
  can_view_reports?: boolean;
  can_manage_donations?: boolean;
  can_manage_beneficiaries?: boolean;
}

export interface ContactInfo {
  phone?: string;
  email?: string;
  address?: string;
}

export interface Staff {
  id: string;
  user_id: string;
  full_name: string;
  role: StaffRole;
  department: string;
  permissions: StaffPermissions;
  employee_id: string;
  hire_date: string;
  contact_info: ContactInfo;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface MultilingualText {
  en: string;
  rw?: string;
  fr?: string;
}

export interface SDGAlignment {
  goal_number: number;
  goal_name: string;
  targets?: string[];
}

export interface KPITarget {
  metric_name: string;
  target_value: number;
  current_value?: number;
  unit: string;
}

export interface Program {
  id: string;
  name: MultilingualText;
  description: MultilingualText;
  category: ProgramCategory;
  sdg_alignment: SDGAlignment[];
  kpi_targets: KPITarget[];
  start_date: string;
  end_date?: string;
  status: ProgramStatus;
  budget: number;
  funds_allocated: number;
  funds_utilized: number;
  cover_image?: string;
  logo?: string;
  sort_order: number;
  metadata?: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface Timeline {
  start_date: string;
  end_date?: string;
  milestones?: Array<{
    date: string;
    description: string;
    completed: boolean;
  }>;
}

export interface ImpactMetrics {
  beneficiaries_reached?: number;
  jobs_created?: number;
  income_increased?: number;
  businesses_started?: number;
  custom_metrics?: Record<string, number>;
}

export interface Project {
  id: string;
  program_id: string;
  name: MultilingualText;
  description: MultilingualText;
  budget_required: number;
  budget_received: number;
  budget_utilized: number;
  timeline: Timeline;
  location: Location;
  impact_metrics: ImpactMetrics;
  donation_allocation_percentage: number;
  is_active: boolean;
  is_featured: boolean;
  cover_image?: string;
  gallery?: string[];
  created_at: string;
  updated_at: string;
}

export interface PaymentDetails {
  card_last4?: string;
  card_brand?: string;
  mobile_money_number?: string;
  mobile_money_provider?: string;
  bank_name?: string;
  transaction_reference?: string;
}

export interface Donation {
  id: string;
  donor_id: string;
  amount: number;
  currency: Currency;
  local_amount: number;
  exchange_rate: number;
  donation_type: DonationType;
  project_id?: string;
  program_id?: string;
  payment_method: PaymentMethod;
  payment_status: PaymentStatus;
  transaction_id: string;
  payment_details: PaymentDetails;
  receipt_sent: boolean;
  receipt_sent_at?: string;
  receipt_number?: string;
  is_anonymous: boolean;
  metadata?: Record<string, any>;
  donor_message?: string;
  is_test: boolean;
  created_at: string;
  updated_at: string;
}

export interface PaymentMethodDetails {
  type: PaymentMethod;
  card_last4?: string;
  card_brand?: string;
  mobile_money_number?: string;
}

export interface RecurringDonation {
  id: string;
  donor_id: string;
  amount: number;
  currency: Currency;
  frequency: RecurringFrequency;
  project_id?: string;
  program_id?: string;
  status: RecurringStatus;
  next_charge_date: string;
  last_charged_date?: string;
  last_charge_id?: string;
  payment_method_id: string;
  subscription_id: string;
  payment_method_details: PaymentMethodDetails;
  total_charges: number;
  total_amount: number;
  start_date: string;
  end_date?: string;
  cancellation_reason?: string;
  send_reminders: boolean;
  created_at: string;
  updated_at: string;
}

export interface SalesData {
  products_sold?: number;
  revenue?: number;
  customers_served?: number;
}

export interface NextWeekPlan {
  goals?: string[];
  activities?: string[];
  support_needed?: string;
}

export interface WeeklyTracking {
  id: string;
  beneficiary_id: string;
  week_ending: string;
  attendance: AttendanceStatus;
  task_given: string;
  task_completion_status: TaskStatus;
  income_this_week: number;
  expenses_this_week: number;
  current_capital: number;
  sales_data: SalesData;
  challenges: string;
  solutions_implemented: string;
  notes: string;
  next_week_plan: NextWeekPlan;
  submitted_by: string;
  is_offline_sync: boolean;
  sync_session_id?: string;
  offline_data?: Record<string, any>;
  submitted_at: string;
  verified_at?: string;
  verified_by?: string;
}

export interface Milestone {
  description: string;
  target_date: string;
  completed: boolean;
  completed_date?: string;
}

export interface ActionPlan {
  steps?: string[];
  resources_needed?: string[];
  timeline?: string;
}

export interface Goal {
  id: string;
  beneficiary_id: string;
  description: string;
  type: GoalType;
  target_amount?: number;
  current_progress: number;
  target_date: string;
  status: GoalStatus;
  milestones: Milestone[];
  notes: string;
  action_plan: ActionPlan;
  created_at: string;
  updated_at: string;
  completed_at?: string;
}

export interface Story {
  id: string;
  title: MultilingualText;
  content: MultilingualText;
  author_name: string;
  author_role: AuthorRole;
  author_photo?: string;
  program_id: string;
  beneficiary_id?: string;
  media?: Array<{
    type: 'image' | 'video';
    url: string;
    caption?: string;
  }>;
  is_featured: boolean;
  is_published: boolean;
  published_date?: string;
  language: Language;
  view_count: number;
  share_count: number;
  metadata?: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  type: NotificationType;
  title: MultilingualText;
  message: MultilingualText;
  data?: Record<string, any>;
  status: NotificationStatus;
  channel: NotificationChannel;
  scheduled_for?: string;
  sent_at?: string;
  delivered_at?: string;
  read_at?: string;
  delivery_report?: Record<string, any>;
  created_at: string;
}

export interface ActivityLog {
  id: string;
  user_id: string;
  action: string;
  entity_type: string;
  entity_id: string;
  old_values?: Record<string, any>;
  new_values?: Record<string, any>;
  changes?: Record<string, any>;
  ip_address: string;
  user_agent: string;
  location?: Location;
  created_at: string;
}

export interface BeneficiaryDocument {
  id: string;
  beneficiary_id: string;
  document_type: DocumentType;
  file_url: string;
  file_name: string;
  file_size: number;
  mime_type: string;
  uploaded_by: string;
  verified: boolean;
  verified_by?: string;
  verified_at?: string;
  created_at: string;
}

export interface EmergencyContact {
  id: string;
  beneficiary_id: string;
  name: string;
  relationship: string;
  phone: string;
  alternate_phone?: string;
  address: string;
  is_primary: boolean;
  created_at: string;
  updated_at: string;
}

export interface ImpactMetric {
  id: string;
  program_id: string;
  metric_name: string;
  metric_value: number;
  measurement_unit: string;
  period: MetricPeriod;
  period_date: string;
  source: MetricSource;
  notes?: string;
  verified_by?: string;
  verified_at?: string;
  created_at: string;
}
