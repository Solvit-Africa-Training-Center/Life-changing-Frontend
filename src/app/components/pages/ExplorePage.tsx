import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { VirtualTour } from '@/app/components/VirtualTour';
import { DayInLife } from '@/app/components/DayInLife';
import { BeforeAfterGallery } from '@/app/components/BeforeAfterGallery';
import { ImpactCounter } from '@/app/components/ImpactCounter';
import { SmartTools } from '@/app/components/SmartTools';
import { Map, Users, ImageIcon, TrendingUp, Zap } from 'lucide-react';

export function ExplorePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore LCEO's Impact
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover real stories, experience our communities, and see how we're transforming lives across Rwanda
          </p>
        </div>
      </section>

      {/* Interactive Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="impact-counter" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              <TabsTrigger value="impact-counter" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span className="hidden sm:inline">Live Impact</span>
              </TabsTrigger>
              <TabsTrigger value="virtual-tour" className="flex items-center gap-2">
                <Map className="w-4 h-4" />
                <span className="hidden sm:inline">Virtual Tour</span>
              </TabsTrigger>
              <TabsTrigger value="day-in-life" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Day in Life</span>
              </TabsTrigger>
              <TabsTrigger value="before-after" className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Transformations</span>
              </TabsTrigger>
              <TabsTrigger value="smart-tools" className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span className="hidden sm:inline">Smart Tools</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="impact-counter">
              <ImpactCounter />
            </TabsContent>

            <TabsContent value="virtual-tour">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">Virtual Tour of Bugesera Communities</h2>
                <p className="text-gray-600">
                  Explore our community centers and see where the transformation happens
                </p>
              </div>
              <VirtualTour />
            </TabsContent>

            <TabsContent value="day-in-life">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">A Day in the Life</h2>
                <p className="text-gray-600">
                  Follow real beneficiaries through their daily journey of transformation and growth
                </p>
              </div>
              <DayInLife />
            </TabsContent>

            <TabsContent value="before-after">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">Transformation Stories</h2>
                <p className="text-gray-600">
                  See the powerful before and after stories of lives changed through LCEO programs
                </p>
              </div>
              <BeforeAfterGallery />
            </TabsContent>

            <TabsContent value="smart-tools">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">Smart Tools & Resources</h2>
                <p className="text-gray-600">
                  Check your eligibility, find resources, and get personalized guidance
                </p>
              </div>
              <SmartTools />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
