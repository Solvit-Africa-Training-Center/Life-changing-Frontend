import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Card, CardContent } from '@/app/components/ui/card';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function StrategicDirectionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-[#0066CC] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Strategic Direction</h1>
            <p className="text-xl">Our framework for sustainable, transformative change</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Philosophy</h2>
              <div className="prose prose-lg text-slate-700">
                <p>
                  At LCEO, we believe that lasting change comes from within communities. Our
                  gender-transformative approach doesn't just support individuals—it transforms
                  entire social systems to create an environment where girls and young women can
                  thrive.
                </p>
              </div>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-[#0066CC]">
                  Rugero Rwiza Community Change Model (RR-CCM)
                </h3>
                <p className="text-slate-700 mb-6">
                  Our unique community change model engages multiple stakeholders to create sustainable transformation:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-2"><span className="text-[#0066CC]">→</span> Individual empowerment and skill-building</li>
                  <li className="flex gap-2"><span className="text-[#0066CC]">→</span> Family engagement and support</li>
                  <li className="flex gap-2"><span className="text-[#0066CC]">→</span> Community mobilization and advocacy</li>
                  <li className="flex gap-2"><span className="text-[#0066CC]">→</span> Institutional partnerships and policy influence</li>
                </ul>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">National & Global Alignment</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-3 text-[#0066CC]">Rwanda Vision 2050</h4>
                    <p className="text-slate-600">
                      Supporting Rwanda's vision of becoming a high-income, knowledge-based economy
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-3 text-[#0066CC]">NST2 Alignment</h4>
                    <p className="text-slate-600">
                      Contributing to National Strategy for Transformation priorities
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
