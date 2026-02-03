import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Card } from '@/app/components/ui/card';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { useTranslation } from '@/app/components/TranslationContext';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// FAQ Database with multilingual support
const faqDatabase: Record<string, { en: string; fr: string; rw: string }> = {
  'eligibility': {
    en: 'To be eligible for our programs, you must be a young woman or girl (14-30 years old) in Rwanda facing economic or educational challenges. Apply through our Get Involved page!',
    fr: 'Pour être éligible à nos programmes, vous devez être une jeune femme ou fille (14-30 ans) au Rwanda confrontée à des défis économiques ou éducatifs. Postulez via notre page S\'impliquer!',
    rw: 'Kugira ngo uhabwe iyo mahirwe, ugomba kuba umukobwa cyangwa umukenyezi (14-30 y\'amavuko) mu Rwanda uhuye n\'ibibazo by\'ubukungu cyangwa uburezi. Andikira ku rubuga rwacu Jya mu bikorwa!',
  },
  'programs': {
    en: 'We offer 4 main programs: 1) IkiraroBiz (Entrepreneurship), 2) School Retention Program, 3) Mental Resilience & Human Capital, 4) Pad Box Initiative. Each addresses different needs.',
    fr: 'Nous offrons 4 programmes principaux: 1) IkiraroBiz (Entrepreneuriat), 2) Programme de maintien à l\'école, 3) Résilience mentale et capital humain, 4) Initiative Pad Box. Chacun répond à des besoins différents.',
    rw: 'Dutanga gahunda 4 z\'ingenzi: 1) IkiraroBiz (Ubucuruzi), 2) Gahunda yo gukomeza kwiga, 3) Ubwiyunge bw\'imitekerereze n\'ubushobozi, 4) Gahunda ya Pad Box. Buri gahunda ikemura ibibazo bitandukanye.',
  },
  'donate': {
    en: 'You can donate through our Donate page. We accept one-time and monthly recurring donations. Every contribution directly supports our beneficiaries!',
    fr: 'Vous pouvez faire un don via notre page Faire un don. Nous acceptons les dons uniques et mensuels récurrents. Chaque contribution soutient directement nos bénéficiaires!',
    rw: 'Urashobora gutanga impano mu rubuga rwacu rwo gutanga. Twakira impano z\'igihe kimwe n\'impano za buri kwezi. Buri impano ifasha abungirwa bacu ku buryo butaziguye!',
  },
  'contact': {
    en: 'Contact us at info@lceo.org.rw or call +250 788 123 456. Our office is in Kigali, Rwanda.',
    fr: 'Contactez-nous à info@lceo.org.rw ou appelez +250 788 123 456. Notre bureau est à Kigali, Rwanda.',
    rw: 'Twandikire kuri info@lceo.org.rw cyangwa uduhamagare kuri +250 788 123 456. Ibiro byacu biri i Kigali, mu Rwanda.',
  },
  'mental_health': {
    en: 'Our Mental Resilience program offers trauma counseling, peer support groups, and life skills training. We have partnerships with mental health professionals across Rwanda.',
    fr: 'Notre programme de Résilience mentale offre un conseil en traumatisme, des groupes de soutien par les pairs et une formation en compétences de vie. Nous avons des partenariats avec des professionnels de la santé mentale à travers le Rwanda.',
    rw: 'Gahunda yacu y\'Ubwiyunge bw\'imitekerereze itanga inama ku bibazo by\'imitekerereze, amatsinda yo gufashanya, n\'amahugurwa ku bubasha bw\'ubuzima. Dufite ubufatanye n\'inzobere mu buzima bw\'imitekerereze mu Rwanda hose.',
  },
  'career': {
    en: 'We provide career counseling in tailoring, food processing, technology, healthcare, and business management. Our mentors help you discover your path!',
    fr: 'Nous offrons des conseils de carrière en couture, transformation alimentaire, technologie, soins de santé et gestion d\'entreprise. Nos mentors vous aident à découvrir votre voie!',
    rw: 'Dutanga inama ku mwuga mu budozi, gutunganya ibiryo, ikoranabuhanga, ubuvuzi, n\'imicungire y\'ubucuruzi. Abatoza bacu babafasha kubona inzira yanyu!',
  },
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { language, t } = useTranslation();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Add welcome message when opened
    if (isOpen && messages.length === 0) {
      const welcomeMsg: Message = {
        id: Date.now(),
        text: t('chatbot.greeting'),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages([welcomeMsg]);
    }
  }, [isOpen, language]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Check for keywords and return appropriate response
    if (lowerMessage.includes('eligible') || lowerMessage.includes('qualify') || lowerMessage.includes('éligible') || lowerMessage.includes('habwe')) {
      return faqDatabase.eligibility[language];
    }
    if (lowerMessage.includes('program') || lowerMessage.includes('programme') || lowerMessage.includes('gahunda')) {
      return faqDatabase.programs[language];
    }
    if (lowerMessage.includes('donate') || lowerMessage.includes('don') || lowerMessage.includes('tanga') || lowerMessage.includes('impano')) {
      return faqDatabase.donate[language];
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('twandikire')) {
      return faqDatabase.contact[language];
    }
    if (lowerMessage.includes('mental') || lowerMessage.includes('health') || lowerMessage.includes('counseling') || lowerMessage.includes('santé mentale') || lowerMessage.includes('imitekerereze')) {
      return faqDatabase.mental_health[language];
    }
    if (lowerMessage.includes('career') || lowerMessage.includes('job') || lowerMessage.includes('carrière') || lowerMessage.includes('mwuga')) {
      return faqDatabase.career[language];
    }

    // Default response
    const defaults = {
      en: 'Thank you for your question! For specific inquiries, please contact us at info@lceo.org.rw or visit our Resources page for more information.',
      fr: 'Merci pour votre question! Pour des demandes spécifiques, veuillez nous contacter à info@lceo.org.rw ou visiter notre page Ressources pour plus d\'informations.',
      rw: 'Murakoze kubaza! Ku bibazo bidasanzwe, twandikire kuri info@lceo.org.rw cyangwa usure ku rubuga rwacu rw\'Ibikorwa kugira ngo ubone amakuru menshi.',
    };
    return defaults[language];
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Get bot response after a short delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const quickQuestions = [
    { en: 'Am I eligible?', fr: 'Suis-je éligible?', rw: 'Nhabwa?' },
    { en: 'What programs?', fr: 'Quels programmes?', rw: 'Gahunda zihe?' },
    { en: 'How to donate?', fr: 'Comment donner?', rw: 'Natanga nte?' },
    { en: 'Need mental health help', fr: 'Besoin d\'aide mentale', rw: 'Nkeneye ubufasha bw\'imitekerereze' },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full w-16 h-16 shadow-lg bg-primary hover:bg-primary/90"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <Card className="w-96 h-[500px] flex flex-col shadow-2xl">
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <div>
                <h3 className="font-semibold">LCEO Assistant</h3>
                <p className="text-xs text-blue-100">
                  {language === 'en' && 'Always here to help'}
                  {language === 'fr' && 'Toujours là pour vous aider'}
                  {language === 'rw' && 'Hano kugira ngo tubafashe'}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-accent" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Quick questions */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-500 mb-2">
                {language === 'en' && 'Quick questions:'}
                {language === 'fr' && 'Questions rapides:'}
                {language === 'rw' && 'Ibibazo byihuse:'}
              </p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="sm"
                    onClick={() => setInputValue(q[language])}
                    className="text-xs"
                  >
                    {q[language]}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t('chatbot.askQuestion')}
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
