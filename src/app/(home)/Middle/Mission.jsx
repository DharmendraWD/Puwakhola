import { Target, Eye, Heart } from 'lucide-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { FaBolt, FaMountain, FaCalendarAlt, FaMapMarkerAlt, FaPlug } from 'react-icons/fa';
import { FiTarget } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  const IconComponent = project.icon;
  
  // Dynamic color classes
  const borderColor = project.color === 'blue' ? 'border-blue-300/50' : 'border-green-300/50';
  const shadowColor = project.color === 'blue' ? 'shadow-blue-500/30' : 'shadow-green-500/30';
  const iconBg = project.color === 'blue' ? 'bg-blue-600/70' : 'bg-green-600/70';
  const iconText = project.color === 'blue' ? 'text-blue-200' : 'text-green-200';
  const titleText = project.color === 'blue' ? 'text-blue-50' : 'text-green-50';

  return (
    <div
      className={`p-6 sm:p-8 rounded-2xl border-2 ${borderColor} shadow-2xl ${shadowColor} 
        backdrop-blur-xl bg-white/10 text-white 
        transform transition duration-500 hover:scale-[1.02] hover:shadow-4xl h-full
        flex flex-col
      `}
    >
      {/* Header and Icon */}
      <div className="flex items-center justify-between mb-4 border-b border-white/20 pb-4">
        <h3 className={`text-2xl font-extrabold tracking-tight ${titleText}`}>
          {project.title}
        </h3>
        <div className={`p-3 rounded-full ${iconBg} shadow-lg`}>
          <IconComponent className={`w-6 h-6 ${iconText}`} />
        </div>
      </div>
      
      <p className="mb-4 text-sm font-light text-white/80 flex-grow">{project.description}</p>
      
      {/* Details Grid */}
      <div className="space-y-3 pt-4 border-t border-white/20">
        
        {/* Capacity */}
        <DetailItem 
          icon={FaBolt} 
          label="Capacity" 
          value={project.capacity} 
          color={project.color}
        />
        
        {/* Commission/Status */}
        {project.status === 'Commissioned' ? (
          <DetailItem 
            icon={FaCalendarAlt} 
            label="Commissioned Date" 
            value={project.commissionedDate} 
            color={project.color}
          />
        ) : (
           <DetailItem 
            icon={FiTarget} 
            label="Status & Stake" 
            value={`${project.status} (${project.stakes})`} 
            color={project.color}
          />
        )}
        
        {/* Location / Coordinates */}
        {project.location ? (
           <DetailItem 
            icon={FaMapMarkerAlt} 
            label="Location" 
            value={project.location} 
            color={project.color}
          />
        ) : (
           <DetailItem 
            icon={FaMapMarkerAlt} 
            label="Coordinates" 
            value={project.coordinates} 
            color={project.color}
          />
        )}
        
        {/* Altitude / Region */}
        {project.altitude && (
           <DetailItem 
            icon={FaMountain} 
            label="Altitude Range" 
            value={project.altitude} 
            color={project.color}
          />
        )}
      </div>
    </div>
  );
};

// --- 3. Detail Item Sub-Component ---
const DetailItem = ({ icon: Icon, label, value, color }) => {
  const textColor = color === 'blue' ? 'text-blue-300' : 'text-green-300';
  
  return (
    <div className="flex items-start">
      <Icon className={`w-4 h-4 mt-1 mr-3 flex-shrink-0 ${textColor}`} />
      <div>
        <span className="text-sm font-semibold text-white/60 block">{label}:</span>
        <span className="text-base font-medium text-white block">{value}</span>
      </div>
    </div>
  );
};
export function MissionVisionSection() {
// --- 1. Project Data Structure ---
const projects = [
  {
    title: "Puwa Khola One Hydropower Project",
    company: "Puwa Khola-One Hydropower Limited",
    capacity: "4 MW",
    status: "Commissioned",
    commissionedDate: "Ashoj 23, 2074 BS",
    foundedDate: "Poush 16, 2065 B.S.",
    location: "Ilam District",
    icon: FaPlug,
    color: "blue",
    description: "Successfully commissioned a 4MW Hydropower plant in the Ilam District, representing the company's first major achievement in power generation."
  },
  {
    title: "Aayu Malun Khola Hydropower Project (AMKHP)",
    company: "Puwa Khola-One Hydropower Limited (51% Stake)",
    capacity: "21 MW",
    status: "Under Development",
    stakes: "51%",
    coordinates: "27°21'28\" N to 27°23'31\" N / 86°24'34\" E to 86°26'36\" E",
    altitude: "925m amsl to 1500m amsl",
    region: "Higher Himalayan region",
    icon: FaMountain,
    color: "green",
    description: "A significant expansion project in the Higher Himalayan region, with the company undertaking a majority stake for development."
  }
];


  return (
    <section id='projects' className="py-8 lg:py-8 bg-gradient-to-br from-slate-50 to-blue-50/30">
       <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm mb-4">
           Projects
          </div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            Project Successfully   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Completed</span> Milestone
          </h2>
        </div>

   {/* // Background container for the colorful glassmorphism effect */}
    <div className="bg-[#00192e] pb-20 mb-4 px-4 md:px-12 flex items-center justify-center  relative overflow-hidden">
        
        {/* Decorative Background Circles for Color Pop */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="max-w-6xl mx-auto z-10 w-full">
            <h1 className="text-5xl font-extrabold text-center text-white mb-12 tracking-tight">
                {/* Major Hydropower Projects */}
            </h1>
            
            {/* Responsive Grid for Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    </div>

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
               Puwa Khola-One Hydropower Limited promotes sustainable hydropower in Nepal through innovation, expertise, and responsible development. We are committed to harnessing nature's power for a brighter future, fostering community prosperity, and contributing to a greener world.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-gray-900">Our Values</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
              - Innovation: We strive for continuous improvement and embrace innovation to meet the evolving needs of our stakeholders.
              <br />
- Reliability: We uphold the highest standards of quality, safety, and reliability in all aspects of our operations.
<br />
- Sustainability: We are committed to minimizing our ecological footprint and promoting responsible resource management.
<br />
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-gray-900">Our Mission</h3>
              </div>
              <div className="space-y-2">
                Become an innovative and key Hydropower developer in Nepal.
                {/* {['Sustainability', 'Integrity', 'Innovation', 'Community Partnership'].map((value) => (
                  <div key={value} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVisionSection;