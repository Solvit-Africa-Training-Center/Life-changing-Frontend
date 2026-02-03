import { Menu, X, ChevronDown, Users, Target, Compass, BookOpen, FileText, Heart, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Search, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  description?: string;
  icon?: any;
  image?: string; // New: for mega menu thumbnails
}

interface MegaSection {
  title: string;
  items: NavItem[];
  layout: 'list' | 'grid-2col' | 'text-grid-2col';
}

interface NavGroup {
  label: string;
  id?: string;
  items?: NavItem[];
  variant?: 'default' | 'mega';
  sections?: MegaSection[]; // For complex 3-column menus
  featured?: {
    image: string;
    title: string;
    description: string;
    cta1: { label: string; id: string };
    cta2: { label: string; id: string };
  };
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navGroups: NavGroup[] = [
    {
      label: 'Who We Are',
      variant: 'mega',
      sections: [
        {
          title: 'Organization',
          layout: 'list',
          items: [
            { id: 'about', label: 'About Us', description: 'Our mission, vision, and team.', icon: Users },
            { id: 'how-we-work', label: 'How We Work', description: 'Our holistic approach to change.', icon: Compass },
          ]
        },
        {
          title: 'Information',
          layout: 'list',
          items: [
            { id: 'strategic-direction', label: 'Strategic Direction', description: 'Our roadmap for the future.', icon: Target },
            { id: 'resources', label: 'Annual Reports', description: 'Financials and yearly progress.', icon: FileText },
          ]
        },
        {
          title: 'Connect',
          layout: 'list',
          items: [
            { id: 'news', label: 'Latest News', description: 'Stay updated with our global work.', icon: BookOpen },
          ]
        }
      ]
    },
    {
      label: 'Our Impact',
      variant: 'mega',
      sections: [
        {
          title: 'Stories',
          layout: 'list',
          items: [
            { id: 'impact', label: 'Impact Stories', description: '500+ projects delivered worldwide.', image: '/impact_stories_thumb_1769784605930.png' },
            { id: 'success-stories', label: 'Success Stories', description: 'Climbing the ladder of success.', image: '/beneficiaries_thumb_1769784622033.png' },
          ]
        },
        {
          title: 'Feedback',
          layout: 'list',
          items: [
            { id: 'testimonials', label: 'Testimonials', description: 'See what our donors say about us.', icon: Users },
          ]
        },
        {
          title: 'Global Harvest',
          layout: 'list',
          items: [
            { id: 'explore', label: 'Market Outcomes', description: 'Agricultural projects feeding thousands.', image: '/impact_featured_large_1769784645487.png' },
          ]
        }
      ]
    },
    {
      label: 'Resources',
      id: 'resources'
    },
    {
      label: 'Get Involved',
      variant: 'mega',
      sections: [
        {
          title: 'Support Us',
          layout: 'list',
          items: [
            { id: 'get-involved', label: 'Ways to Give', description: 'Volunteer, partner, or advocate.', icon: Users },
          ]
        },
        {
          title: 'Contribute',
          layout: 'list',
          items: [
            { id: 'donate', label: 'Donate', description: 'Support our cause directly.', icon: BookOpen },
          ]
        }
      ]
    }
  ];

  const loginGroup: NavGroup = {
    label: 'Login',
    variant: 'mega',
    sections: [
      {
        title: 'Recipients',
        layout: 'list',
        items: [
          { id: 'beneficiary-login', label: 'Beneficiary', description: 'Access project updates', icon: Users },
        ]
      },
      {
        title: 'Donors',
        layout: 'list',
        items: [
          { id: 'donor-login', label: 'Donor Portal', description: 'Manage your gifts', icon: Heart },
        ]
      },
      {
        title: 'Staff',
        layout: 'list',
        items: [
          { id: 'admin-login', label: 'Admin Access', description: 'Internal management', icon: Target },
        ]
      }
    ]
  };

  const dashboardItems = [
    { id: 'beneficiary-login', label: 'Beneficiary Login' },
    { id: 'donor-login', label: 'Donor Login' },
    { id: 'admin-login', label: 'Admin Login' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col w-full font-sans site-header-fixed transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}
    >
      {/* Top Bar - Animates height/opacity on scroll */}
      <motion.div
        className="bg-accent text-white hidden lg:block border-b border-white/5 overflow-hidden"
        initial={false}
        animate={{
          height: isScrolled ? 0 : 'auto',
          opacity: isScrolled ? 0 : 1
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="py-1.5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[13px]">
            <div className="flex items-center gap-6 font-medium">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-secondary" />
                <span>+123 456 7890</span>
              </div>
              <div className="w-px h-3 bg-white/20"></div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-secondary" />
                <span>email@example.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-secondary transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Youtube className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <header className={`bg-white border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-0' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-14' : 'h-18'}`}>
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer gap-2 shrink-0"
              onClick={() => onNavigate('home')}
            >
              <div className={`flex items-center justify-center rounded-full bg-primary shadow-sm ${isScrolled ? 'w-8 h-8' : 'w-10 h-10'} transition-all duration-300`}>
                <Target className="text-white w-6 h-6" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className={`font-extrabold text-accent tracking-tight leading-none font-heading transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}>LCEO<span className="text-secondary">.</span></span>
                <span className="text-[9px] text-gray-400 font-bold tracking-widest uppercase">Nonprofit</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navGroups.map((group) => (
                <div
                  key={group.label}
                  className={`relative group ${group.items?.some(i => i.id === currentPage) ||
                    group.sections?.some(s => s.items.some(i => i.id === currentPage)) ||
                    group.id === currentPage ? 'active' : ''
                    }`}
                  onMouseEnter={() => setActiveDropdown(group.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => group.id && handleNavClick(group.id)}
                    className={`px-4 py-2 text-[15px] font-bold text-accent transition-colors font-heading flex items-center gap-1 rounded-full hover:bg-gray-50 whitespace-nowrap
                      ${group.items?.some(i => i.id === currentPage) || group.id === currentPage ? 'text-primary bg-primary/5' : ''}`}
                  >
                    <span className="nav-link-animated">{group.label}</span>
                    {(group.items || group.sections) && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === group.label ? 'rotate-180 text-secondary' : 'text-gray-400'}`}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {activeDropdown === group.label && (group.items || group.sections) && (
                      <motion.div
                        initial={{ opacity: 0, y: -30, scaleY: 0.5 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 8,
                          mass: 1.2,
                          duration: 1.2
                        }}
                        style={{ originY: 0 }}
                        className={
                          group.variant === 'mega'
                            ? `mega-menu-container ${group.label === 'Get Involved' ? 'mega-compact' : ''}`
                            : 'absolute top-full mt-4 bg-white rounded-xl shadow-2xl border border-gray-100 w-72 py-2 left-0'
                        }
                      >
                        {group.variant === 'mega' ? (
                          <div className="mega-menu-grid-wrapper">
                            {group.sections ? (
                              <div className="mega-sections-container">
                                {group.sections.map((section, idx) => (
                                  <div key={idx} className="mega-section-col">
                                    <h4 className="mega-menu-heading">{section.title}</h4>
                                    <div className="mega-section-list">
                                      {section.items.map((item) => (
                                        <button
                                          key={item.id}
                                          onClick={() => handleNavClick(item.id)}
                                          className="mega-section-item-btn"
                                        >
                                          {item.image ? (
                                            <div className="mega-section-thumb">
                                              <img src={item.image} alt={item.label} />
                                            </div>
                                          ) : (
                                            item.icon && (
                                              <div className="mega-section-icon">
                                                <item.icon size={22} strokeWidth={1.5} />
                                              </div>
                                            )
                                          )}
                                          <div>
                                            <div className="mega-section-title">{item.label}</div>
                                            <div className="mega-section-desc">{item.description}</div>
                                          </div>
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <>
                                {/* Main Grid Column (Default Mega) */}
                                <div className="mega-menu-main-column">
                                  <h4 className="mega-menu-heading">
                                    {group.label === 'Who We Are' ? 'Our Foundation' : 'Strategic Outreach'}
                                  </h4>
                                  <div className="mega-items-grid">
                                    {group.items?.map((item) => (
                                      <button
                                        key={item.id}
                                        onClick={() => handleNavClick(item.id)}
                                        className="mega-menu-item-btn"
                                      >
                                        {item.image ? (
                                          <div className="mega-menu-thumb">
                                            <img src={item.image} alt={item.label} />
                                          </div>
                                        ) : (
                                          <div className="mega-menu-icon">
                                            {item.icon ? <item.icon size={22} strokeWidth={1.5} /> : <ChevronDown size={22} />}
                                          </div>
                                        )}
                                        <div>
                                          <div className="mega-menu-text-title">
                                            {item.label}
                                          </div>
                                          <div className="mega-menu-text-desc">
                                            {item.description}
                                          </div>
                                        </div>
                                      </button>
                                    ))}
                                  </div>
                                </div>

                                {/* Sidebar Column */}
                                <div className="mega-sidebar">
                                  {group.featured ? (
                                    <div className="sidebar-featured-card">
                                      <img src={group.featured.image} alt="Featured" className="sidebar-featured-img" />
                                      <h5 className="sidebar-featured-title">
                                        {group.featured.title}
                                      </h5>
                                      <p className="sidebar-featured-desc">
                                        {group.featured.description}
                                      </p>
                                      <div className="sidebar-cta-group">
                                        <Button
                                          onClick={() => handleNavClick(group.featured!.cta1.id)}
                                          className="w-full bg-secondary text-primary-foreground hover:bg-primary/90 font-bold py-5 text-sm rounded-xl"
                                        >
                                          {group.featured.cta1.label}
                                        </Button>
                                        <Button
                                          onClick={() => handleNavClick(group.featured!.cta2.id)}
                                          variant="outline"
                                          className="w-full border-primary/20 text-gray-700 hover:bg-primary/5 hover:text-primary font-bold py-5 text-sm rounded-xl"
                                        >
                                          {group.featured.cta2.label}
                                        </Button>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="sidebar-featured-card">
                                      <h4 className="mega-menu-heading">Insights</h4>
                                      <div className="space-y-6">
                                        <div className="group/article cursor-pointer" onClick={() => handleNavClick('about')}>
                                          <div className="sidebar-badge bg-primary/10 text-primary">BLOG</div>
                                          <h5 className="sidebar-featured-title">
                                            Difference between Non-profit & Charity
                                          </h5>
                                          <div className="article-link">
                                            Learn More <ArrowRight size={14} />
                                          </div>
                                        </div>
                                        <div className="group/article cursor-pointer" onClick={() => handleNavClick('about')}>
                                          <div className="sidebar-badge bg-primary/20 text-primary font-black">GUIDE</div>
                                          <h5 className="sidebar-featured-title">
                                            How to start a fundraiser locally
                                          </h5>
                                          <div className="article-link">
                                            Learn More <ArrowRight size={14} />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </>
                            )}
                          </div>
                        ) : (
                          <div className="py-2">
                            {group.items.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className="block w-full text-left px-5 py-3 hover:bg-gray-50 transition-colors group/item flex items-center gap-3"
                              >
                                {item.icon && <item.icon size={16} className="text-gray-400 group-hover/item:text-primary transition-colors" />}
                                <div>
                                  <div className="text-sm font-bold text-gray-800 group-hover/item:text-primary mb-0.5">
                                    {item.label}
                                  </div>
                                  {item.description && (
                                    <div className="text-xs text-gray-500 font-medium">
                                      {item.description}
                                    </div>
                                  )}
                                </div>
                              </button>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <button className="text-accent hover:text-primary transition-colors p-2 hover:bg-gray-100 rounded-full">
                <Search className="w-4 h-4" />
              </button>

              <div
                className={`relative group ${activeDropdown === 'Login' ? 'active' : ''}`}
                onMouseEnter={() => setActiveDropdown('Login')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="text-[14px] font-bold text-accent flex items-center gap-1 cursor-pointer font-heading px-3 py-2 rounded-md hover:bg-gray-50 whitespace-nowrap"
                >
                  <span className="nav-link-animated">Login</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'Login' ? 'rotate-180 text-secondary' : 'text-gray-400'}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'Login' && (
                    <motion.div
                      initial={{ opacity: 0, y: -20, scaleY: 0.8 }}
                      animate={{ opacity: 1, y: 0, scaleY: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 12 }}
                      style={{ originY: 0 }}
                      className="mega-menu-container mega-compact mega-compact-right"
                    >
                      <div className="mega-sections-container">
                        {loginGroup.sections!.map((section, idx) => (
                          <div key={idx} className="mega-section-col">
                            <h4 className="mega-menu-heading">{section.title}</h4>
                            <div className="mega-section-list">
                              {section.items.map((item) => (
                                <button
                                  key={item.id}
                                  onClick={() => handleNavClick(item.id)}
                                  className="mega-section-item-btn"
                                >
                                  {item.icon && (
                                    <div className="mega-section-icon">
                                      <item.icon size={18} strokeWidth={1.5} />
                                    </div>
                                  )}
                                  <div>
                                    <div className="mega-section-title text-[13px]">{item.label}</div>
                                    <div className="mega-section-desc text-[11px]">{item.description}</div>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Button
                onClick={() => onNavigate('donate')}
                className={`bg-secondary text-primary-foreground hover:bg-primary/90 font-bold rounded-md uppercase tracking-wide text-[11px] shadow-sm transition-all hover:-translate-y-0.5 active:scale-95 whitespace-nowrap ${isScrolled ? 'px-4 py-2.5' : 'px-5 py-3'}`}
              >
                Donate Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-gray-100 bg-white absolute w-full shadow-xl overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
                {navGroups.map((group) => (
                  <div key={group.label} className="space-y-2">
                    {group.sections ? (
                      <div className="space-y-3">
                        <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-2">
                          {group.label}
                        </div>
                        <div className="pl-4 space-y-4 border-l-2 border-gray-100 mt-2">
                          {group.sections.map((section, sIdx) => (
                            <div key={sIdx} className="space-y-1">
                              <div className="text-[10px] font-bold text-primary/60 uppercase mb-1">{section.title}</div>
                              {section.items.map((item) => (
                                <button
                                  key={item.id}
                                  onClick={() => handleNavClick(item.id)}
                                  className="block w-full text-left px-2 py-1.5 rounded-lg text-sm font-semibold text-gray-700 hover:text-primary transition-colors"
                                >
                                  <span className="nav-link-animated">{item.label}</span>
                                </button>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : group.items ? (
                      <>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2">
                          {group.label}
                        </div>
                        <div className="pl-4 space-y-1 border-l-2 border-gray-100">
                          {group.items.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => handleNavClick(item.id)}
                              className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${currentPage === item.id ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:text-primary'
                                }`}
                            >
                              <span className="nav-link-animated">{item.label}</span>
                            </button>
                          ))}
                        </div>
                      </>
                    ) : (
                      <button
                        onClick={() => group.id && handleNavClick(group.id)}
                        className="block w-full text-left px-2 py-2 text-base font-bold text-gray-800 hover:text-primary"
                      >
                        <span className="nav-link-animated">{group.label}</span>
                      </button>
                    )}
                  </div>
                ))}

                <div className="pt-6 pb-2 space-y-2 border-t border-gray-100 mt-4">
                  <div className="text-xs font-bold text-gray-400 px-2 uppercase tracking-widest mb-2">
                    Account Access
                  </div>
                  {dashboardItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className="block w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <div className="pt-4">
                  <Button
                    onClick={() => handleNavClick('donate')}
                    className="w-full bg-secondary text-primary-foreground hover:bg-primary/90 font-bold py-6 text-base rounded-lg shadow-sm"
                  >
                    Donate Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </motion.div>
  );
}