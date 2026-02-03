# LCEO - Life-Changing Endeavor Organization

> Empowering vulnerable young women and girls in Rwanda through education, entrepreneurship, and mental resilience programs.

## 🌟 Overview

This is the official frontend application for Life-Changing Endeavor Organization (LCEO), a Rwandan NGO dedicated to transforming lives through comprehensive support programs. The application serves three distinct user types:

- **👥 Public Visitors/Donors**: Browse programs, make donations, read impact stories
- **👩‍💼 Beneficiaries**: Submit business reports, track progress, manage goals
- **🛡️ Admin Staff**: Manage content, track impact, oversee operations

## ✨ Features

### Public Website
- 🏠 **Homepage** with interactive hero, impact stats, and testimonials
- ℹ️ **About Us** with mission, vision, values, and team
- 🔄 **How We Work** with program details and methodologies
- 🎯 **Strategic Direction** with goals and SDG alignment
- 📊 **Impact & Stories** showcasing real transformation stories
- 📚 **Resources** with downloadable materials
- 🎁 **Donate** with recurring donation support
- 🤝 **Get Involved** with volunteer and partnership opportunities

### Interactive Features
- 🏛️ **Virtual Tour** of LCEO facilities
- 📖 **Day in the Life** stories with before/after galleries
- 📈 **Real-time Impact Counter** showing current statistics
- 🤖 **Multi-language Chatbot** (English/French/Kinyarwanda)
- 🔍 **Smart Tools** for program eligibility and resource finding

### User Dashboards

#### Beneficiary Dashboard
- 📝 Submit weekly/monthly business progress reports
- 🎯 Set and track personal goals
- 💰 Monitor capital growth and business metrics
- 📨 Communicate with mentors
- 📊 View progress charts and statistics

#### Donor Dashboard
- 💳 View donation history
- 🔄 Manage recurring donations
- 📈 Track impact of contributions
- 📧 Download tax receipts
- 📊 See impact metrics

#### Admin Dashboard
- 👥 Manage beneficiaries and programs
- 📊 View analytics and reports
- 📝 Create and publish stories
- 💰 Track donations and financial metrics
- 📥 Import/export data
- 🔄 Sync with Kobo Toolbox
- 📋 View activity logs

## 🎨 Design

### Brand Colors
- **Primary**: `#5bc3ab` (Teal/Mint Green) - Growth and hope
- **Secondary**: `#e9cfa4` (Warm Beige) - Warmth and community
- **Accent**: `#FF6B35` (Orange) - Energy and action
- **Success**: `#28A745` (Green) - Achievement

### Design Principles
- Clean, modern, and trustworthy
- Mobile-first responsive design
- Accessible (WCAG 2.1 AA compliant)
- Multi-language support (EN/FR/RW)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env with your backend API URL

# Start development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:5173` to see the app.

## 📖 Documentation

- **[Quick Start Guide](./QUICK_START.md)** - Get up and running quickly
- **[Backend Integration](./BACKEND_INTEGRATION.md)** - Complete integration guide
- **[Backend Requirements](./BACKEND_REQUIREMENTS.md)** - API response formats
- **[API Testing Checklist](./API_TESTING_CHECKLIST.md)** - Test your backend
- **[Changelog](./CHANGELOG.md)** - Recent updates and changes

## 🔐 Demo Credentials

The app currently runs in demo mode. Use these credentials to test:

**Admin:**
- Email: `admin@lceo.org`
- Password: `admin123`

**Donor:**
- Email: `donor@lceo.org`
- Password: `donor123`

**Beneficiary:**
- Email: `beneficiary@lceo.org`
- Password: `beneficiary123`
- Or Phone: `0788123456` / `beneficiary123`

⚠️ **Remove these in production!**

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Radix UI** - Accessible components
- **Recharts** - Data visualization
- **Lucide React** - Icons
- **Motion (Framer Motion)** - Animations
- **React Hook Form** - Form management
- **Sonner** - Toast notifications

### State Management
- React Context API for auth and translations
- Local state with useState/useReducer

### Backend Integration
- Centralized API service layer (`/src/services/api.ts`)
- JWT token authentication
- Type-safe API calls with TypeScript

## 📁 Project Structure

```
lceo-frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── pages/              # Page components
│   │   │   ├── ui/                 # Reusable UI components
│   │   │   ├── AuthContext.tsx     # Authentication
│   │   │   ├── TranslationContext.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Chatbot.tsx
│   │   │   └── ...
│   │   └── App.tsx                 # Main app
│   ├── services/
│   │   └── api.ts                  # API service layer
│   ├── types/
│   │   └── backend.ts              # TypeScript types
│   └── styles/
│       ├── theme.css               # Design tokens
│       └── index.css               # Global styles
├── public/                         # Static assets
├── .env.example                    # Environment template
└── package.json
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file:

```env
REACT_APP_API_URL=http://localhost:3000/api
NODE_ENV=development
REACT_APP_ENABLE_DEMO_MODE=true
REACT_APP_ENABLE_CHATBOT=true
```

### API Integration

1. Set your backend URL in `.env`
2. Enable real authentication in `AuthContext.tsx` (see BACKEND_INTEGRATION.md)
3. Update dashboard components to fetch real data
4. Configure CORS on your backend

See [BACKEND_INTEGRATION.md](./BACKEND_INTEGRATION.md) for detailed steps.

## 📊 Backend Schema Alignment

This frontend is **100% aligned** with the LCEO backend database schema:

- All TypeScript types match backend tables exactly
- All API endpoints match backend routes
- All enums match backend enum values
- Support for multilingual content (EN/RW/FR)
- Support for phone number authentication

See [/src/types/backend.ts](./src/types/backend.ts) for complete type definitions.

## 🌍 Multi-Language Support

The app supports three languages:

- **English (EN)** - Default
- **Français (FR)** - French
- **Kinyarwanda (RW)** - National language of Rwanda

Users can switch languages from the header. Beneficiaries can set their preferred language in their profile.

## 📱 Responsive Design

The app is fully responsive and works on:

- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- Proper ARIA labels
- Sufficient color contrast
- Focus indicators

## 🧪 Testing

```bash
# Run tests (if configured)
npm test

# Build and preview production
npm run build
npm run preview
```

## 🚢 Deployment

### Build

```bash
npm run build
```

The `dist/` folder contains the production build.

### Deploy to Vercel/Netlify

```bash
# Vercel
vercel deploy

# Netlify
netlify deploy --prod
```

### Environment Variables

Set these in your deployment platform:

- `REACT_APP_API_URL` - Your backend API URL
- `NODE_ENV=production`

## 🔒 Security

- JWT token authentication
- Secure token storage in localStorage
- CSRF protection (via SameSite cookies on backend)
- XSS prevention (React auto-escapes content)
- Input validation
- Protected routes
- Role-based access control

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

Copyright © 2024 Life-Changing Endeavor Organization. All rights reserved.

## 📞 Support

For questions or support:
- **Email**: info@lceo.org
- **Phone**: +250 XXX XXX XXX
- **Address**: Kigali, Rwanda

## 🙏 Acknowledgments

- All LCEO staff and volunteers
- Our amazing beneficiaries who inspire us daily
- Our generous donors who make this work possible
- The open-source community for amazing tools

---

**Built with ❤️ for empowering vulnerable young women in Rwanda**

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Public website with all pages
- ✅ Interactive features (virtual tour, chatbot, etc.)
- ✅ User authentication and dashboards
- ✅ Backend integration ready
- ✅ Multi-language support

### Phase 2 (Planned)
- ⏳ Real-time notifications
- ⏳ Mobile app (React Native)
- ⏳ SMS integration for beneficiaries
- ⏳ Payment gateway integration (Stripe, MTN Mobile Money)
- ⏳ Advanced analytics and reporting
- ⏳ Automated report generation
- ⏳ WhatsApp integration

### Phase 3 (Future)
- 📋 AI-powered insights and recommendations
- 📋 Predictive analytics for beneficiary success
- 📋 Community forum for beneficiaries
- 📋 Mobile USSD support for feature phones
- 📋 Offline-first progressive web app

---

**Last Updated:** January 28, 2026
**Version:** 1.0.0 - Backend Aligned
