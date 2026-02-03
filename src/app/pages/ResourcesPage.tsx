import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { FileText, Download } from 'lucide-react';

export function ResourcesPage() {
  const resources = [
    { title: '2024 Annual Report', type: 'Annual Report', year: '2024' },
    { title: 'Impact Brief Q4 2024', type: 'Impact Brief', year: '2024' },
    { title: 'Gender Transformation Case Study', type: 'Case Study', year: '2023' },
    { title: 'IkiraroBiz Program Evaluation', type: 'Research', year: '2023' },
    { title: '2023 Annual Report', type: 'Annual Report', year: '2023' },
    { title: 'Mental Health Program Guide', type: 'Report', year: '2024' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-[#0066CC] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Resources</h1>
            <p className="text-xl">Reports, research, and insights from our work</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0066CC]/10 p-3 rounded-lg">
                      <FileText className="h-8 w-8 text-[#0066CC]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 text-slate-900">
                        {resource.title}
                      </h3>
                      <div className="text-sm text-slate-600 mb-4">
                        {resource.type} • {resource.year}
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
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

      <Footer />
    </div>
  );
}
