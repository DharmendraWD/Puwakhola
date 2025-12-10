
"use client";
import { ArrowRight, Zap } from 'lucide-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';

 function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-white -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
              <Zap className="w-4 h-4" />
              <span className="text-sm">Powering Nepal's Future</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl text-gray-900">
              Harnessing Nature's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Power</span> for a Sustainable Tomorrow
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Leading the way in clean, renewable hydroelectric energy. We transform the mighty rivers of Nepal into sustainable power that lights up communities and drives progress.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full hover:shadow-xl transition-all duration-300 flex items-center gap-2 group">
                Explore Our Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl text-blue-600">50+</div>
                <div className="text-sm text-gray-600">MW Capacity</div>
              </div>
              <div>
                <div className="text-3xl text-blue-600">10k+</div>
                <div className="text-sm text-gray-600">Homes Powered</div>
              </div>
              <div>
                <div className="text-3xl text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right content - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1705747894609-6a7d17a8cfb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeWRyb2VsZWN0cmljJTIwZGFtfGVufDF8fHx8MTc2NTI4MTQ5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Hydroelectric Dam"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1738918922725-d70c666ddccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeWRyb3Bvd2VyJTIwdHVyYmluZXxlbnwxfHx8fDE3NjUzNTA4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Hydropower Turbine"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1641584511182-094468c129ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHJpdmVyJTIwbmVwYWx8ZW58MXx8fHwxNzY1MzUwODU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Mountain River"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1763312181367-6b4db7a9811d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjB3YXRlcnxlbnwxfHx8fDE3NjUzNTA4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Renewable Energy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-600">100% Clean Energy</div>
                  <div className="text-green-600">Zero Emissions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection