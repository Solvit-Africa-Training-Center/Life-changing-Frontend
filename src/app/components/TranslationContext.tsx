import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'rw';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.howWeWork': 'How We Work',
    'nav.strategicDirection': 'Strategic Direction',
    'nav.impact': 'Impact & Stories',
    'nav.resources': 'Resources',
    'nav.donate': 'Donate',
    'nav.getInvolved': 'Get Involved',
    'nav.login': 'Login',
    'nav.logout': 'Logout',
    
    // Homepage
    'home.hero.title': 'Unlocking Potential, Empowering Lives',
    'home.hero.subtitle': 'Transforming vulnerable young women and girls in Rwanda into confident, educated, and economically independent leaders',
    'home.hero.joinCircle': 'Join Our Impact Circle',
    'home.hero.learnMore': 'Learn More',
    'home.stats.womenReached': 'Women & Girls Reached',
    'home.stats.girlsInSchool': 'Girls Kept in School',
    'home.stats.businessesLaunched': 'Businesses Launched',
    'home.stats.changeChampions': 'Change Champions Trained',
    
    // Dashboard
    'dashboard.welcome': 'Welcome back',
    'dashboard.overview': 'Overview',
    'dashboard.reports': 'Reports',
    'dashboard.profile': 'Profile',
    'dashboard.settings': 'Settings',
    
    // Chatbot
    'chatbot.greeting': 'Hello! How can I help you today?',
    'chatbot.askQuestion': 'Ask a question...',
    'chatbot.send': 'Send',
    'chatbot.close': 'Close',
    
    // Programs
    'program.education': 'Education Support',
    'program.entrepreneurship': 'Entrepreneurship',
    'program.mentalHealth': 'Mental Resilience',
    'program.schoolRetention': 'School Retention',
    
    // Common
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.view': 'View',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.howWeWork': 'Comment nous travaillons',
    'nav.strategicDirection': 'Direction stratégique',
    'nav.impact': 'Impact et histoires',
    'nav.resources': 'Ressources',
    'nav.donate': 'Faire un don',
    'nav.getInvolved': 'S\'impliquer',
    'nav.login': 'Connexion',
    'nav.logout': 'Déconnexion',
    
    // Homepage
    'home.hero.title': 'Libérer le potentiel, autonomiser les vies',
    'home.hero.subtitle': 'Transformer les jeunes femmes et filles vulnérables au Rwanda en leaders confiantes, éduquées et économiquement indépendantes',
    'home.hero.joinCircle': 'Rejoignez notre cercle d\'impact',
    'home.hero.learnMore': 'En savoir plus',
    'home.stats.womenReached': 'Femmes et filles touchées',
    'home.stats.girlsInSchool': 'Filles maintenues à l\'école',
    'home.stats.businessesLaunched': 'Entreprises lancées',
    'home.stats.changeChampions': 'Champions du changement formés',
    
    // Dashboard
    'dashboard.welcome': 'Bienvenue',
    'dashboard.overview': 'Vue d\'ensemble',
    'dashboard.reports': 'Rapports',
    'dashboard.profile': 'Profil',
    'dashboard.settings': 'Paramètres',
    
    // Chatbot
    'chatbot.greeting': 'Bonjour! Comment puis-je vous aider aujourd\'hui?',
    'chatbot.askQuestion': 'Posez une question...',
    'chatbot.send': 'Envoyer',
    'chatbot.close': 'Fermer',
    
    // Programs
    'program.education': 'Soutien à l\'éducation',
    'program.entrepreneurship': 'Entrepreneuriat',
    'program.mentalHealth': 'Résilience mentale',
    'program.schoolRetention': 'Maintien à l\'école',
    
    // Common
    'common.submit': 'Soumettre',
    'common.cancel': 'Annuler',
    'common.save': 'Sauvegarder',
    'common.delete': 'Supprimer',
    'common.edit': 'Modifier',
    'common.view': 'Voir',
    'common.loading': 'Chargement...',
    'common.error': 'Erreur',
    'common.success': 'Succès',
  },
  rw: {
    // Navigation
    'nav.home': 'Ahabanza',
    'nav.about': 'Aho dutuye',
    'nav.howWeWork': 'Uko dukora',
    'nav.strategicDirection': 'Icyerekezo',
    'nav.impact': 'Ingaruka n\'inkuru',
    'nav.resources': 'Ibikorwa',
    'nav.donate': 'Tanga',
    'nav.getInvolved': 'Jya mu bikorwa',
    'nav.login': 'Injira',
    'nav.logout': 'Sohoka',
    
    // Homepage
    'home.hero.title': 'Gufungura ubushobozi, guha imbaraga ubuzima',
    'home.hero.subtitle': 'Guhindura abakobwa n\'abakenyezi bo mu Rwanda mu bayobozi bifite icyizere, uburezi, n\'ubwisanzure bw\'ubukungu',
    'home.hero.joinCircle': 'Jya mu bikorwa byacu',
    'home.hero.learnMore': 'Menya byinshi',
    'home.stats.womenReached': 'Abagore n\'abakobwa bagejejweho',
    'home.stats.girlsInSchool': 'Abakobwa bakomeje kwiga',
    'home.stats.businessesLaunched': 'Ubucuruzi bwatunganijwe',
    'home.stats.changeChampions': 'Intsinzi z\'impinduka zatojwe',
    
    // Dashboard
    'dashboard.welcome': 'Murakaza neza',
    'dashboard.overview': 'Incamake',
    'dashboard.reports': 'Raporo',
    'dashboard.profile': 'Umwirondoro',
    'dashboard.settings': 'Igenamiterere',
    
    // Chatbot
    'chatbot.greeting': 'Muraho! Nkubafasha nte uyu munsi?',
    'chatbot.askQuestion': 'Baza ikibazo...',
    'chatbot.send': 'Ohereza',
    'chatbot.close': 'Funga',
    
    // Programs
    'program.education': 'Inkunga y\'uburezi',
    'program.entrepreneurship': 'Ubucuruzi',
    'program.mentalHealth': 'Ubwiyunge bw\'imitekerereze',
    'program.schoolRetention': 'Gukomeza kwiga',
    
    // Common
    'common.submit': 'Ohereza',
    'common.cancel': 'Hagarika',
    'common.save': 'Bika',
    'common.delete': 'Siba',
    'common.edit': 'Hindura',
    'common.view': 'Reba',
    'common.loading': 'Biratangira...',
    'common.error': 'Ikosa',
    'common.success': 'Byagenze neza',
  },
};

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
