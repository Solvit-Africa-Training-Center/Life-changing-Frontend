import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { FileText, Download, Calendar } from 'lucide-react';

export function ResourcesPage() {
  const resources = [
    {
      title: "2024 Annual Report",
      type: "Annual Report",
      year: 2024,
      description: "Comprehensive overview of our programs, impact metrics, and financial statements for 2024",
      pages: 42,
      size: "3.2 MB"
    },
    {
      title: "IkiraroBiz Program Impact Brief",
      type: "Impact Brief",
      year: 2024,
      description: "Detailed analysis of entrepreneurship outcomes, business sustainability rates, and beneficiary testimonials",
      pages: 12,
      size: "1.5 MB"
    },
    {
      title: "School Retention Case Study: Gasabo District",
      type: "Case Study",
      year: 2023,
      description: "In-depth examination of the Pad Box Initiative's effect on school attendance and academic performance",
      pages: 18,
      size: "2.1 MB"
    },
    {
      title: "Gender-Transformative Approach: Research Findings",
      type: "Research",
      year: 2023,
      description: "Evidence-based analysis of our RR-CCM model and its effectiveness in shifting community norms",
      pages: 28,
      size: "2.8 MB"
    },
    {
      title: "Mental Resilience Program Outcomes",
      type: "Impact Brief",
      year: 2024,
      description: "Quantitative and qualitative data on mental health improvements and leadership development",
      pages: 10,
      size: "1.3 MB"
    },
    {
      title: "2023 Annual Report",
      type: "Annual Report",
      year: 2023,
      description: "Full report on programs, beneficiaries reached, and financial performance for fiscal year 2023",
      pages: 38,
      size: "3.0 MB"
    }
  ];

  const categories = ['All', 'Annual Reports', 'Impact Briefs', 'Case Studies', 'Research'];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
          <p className="text-xl text-blue-100">
            Reports, research, and insights from our programs
          </p>
        </div>
      </section>

      {/* Resources Library */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Publication Library</h2>
            <p className="text-muted-foreground mb-6">
              Download our reports and research to learn more about our impact and approach
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button key={category} variant="outline" size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-16 h-20 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="text-primary" size={32} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-bold text-lg">{resource.title}</h3>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="px-2 py-1 bg-secondary/10 text-secondary rounded">
                          {resource.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {resource.year}
                        </span>
                        <span>{resource.pages} pages</span>
                        <span>{resource.size}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {resource.description}
                      </p>
                      <Button size="sm" className="w-full">
                        <Download className="mr-2" size={16} />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">Additional Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-primary" size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2">Program Guidelines</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Detailed implementation guides for each of our core programs
                </p>
                <Button variant="outline" size="sm">
                  View Guidelines
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-secondary" size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2">Financial Statements</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Audited financial reports demonstrating fiscal transparency
                </p>
                <Button variant="outline" size="sm">
                  View Financials
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-accent" size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2">Media Kit</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Logos, photos, and fact sheets for media and partners
                </p>
                <Button variant="outline" size="sm">
                  Download Kit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
