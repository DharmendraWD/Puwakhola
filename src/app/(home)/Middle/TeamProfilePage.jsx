import { ImageWithFallback } from '@/components/ImageWithFallback';
import { Linkedin, Mail } from 'lucide-react';

 function TeamSection() {
  const team = [
    {
      name: 'Rajesh Sharma',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjUzNDEwODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: '20+ years in renewable energy sector',
    },
    {
      name: 'Sita Adhikari',
      role: 'Chief Operating Officer',
      image: 'https://images.unsplash.com/photo-1614786269829-d24616faf56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFufGVufDF8fHx8MTc2NTMxMjk5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Expert in hydropower operations',
    },
    {
      name: 'Prakash Thapa',
      role: 'Chief Engineer',
      image: 'https://images.unsplash.com/photo-1690051840072-0c8a4a498854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMG1hbnxlbnwxfHx8fDE3NjUzNTA5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Specialist in dam infrastructure',
    },
    {
      name: 'Anita Gurung',
      role: 'Director of Sustainability',
      image: 'https://images.unsplash.com/photo-1758520144420-3e5b22e9b9a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGVjdXRpdmV8ZW58MXx8fHwxNzY1MjkwMDYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Leading our environmental initiatives',
    },
  ];

  return (
    <section id="team" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm mb-4">
            Meet Our Team
          </div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            The Minds Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Power</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced leadership team brings together decades of expertise in renewable energy, engineering, and sustainable development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                
                <div className="flex gap-3">
                  <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;