import { Target, Eye, Heart } from 'lucide-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';

export function MissionVisionSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739156652224-fda317f00e94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeWRyb2VsZWN0cmljJTIwcGxhbnR8ZW58MXx8fHwxNzY1MzUwODU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Hydroelectric Plant"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating stat card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6">
              <div className="text-4xl text-blue-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime Reliability</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To harness the power of Nepal's rivers responsibly, delivering clean, reliable, and affordable energy that empowers communities and drives sustainable economic growth while preserving our natural heritage for future generations.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be Nepal's leading hydropower company, recognized globally for excellence in renewable energy production, environmental stewardship, and positive community impact, setting the benchmark for sustainable development in South Asia.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-gray-900">Our Values</h3>
              </div>
              <div className="space-y-2">
                {['Sustainability', 'Integrity', 'Innovation', 'Community Partnership'].map((value) => (
                  <div key={value} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVisionSection;