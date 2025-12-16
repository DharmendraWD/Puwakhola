import { ImageWithFallback } from '@/components/ImageWithFallback';
import { Linkedin, Mail } from 'lucide-react';
import kadmKc from '../../../../public/img/proj/kadamKc.jpeg'
import madhuKar from '../../../../public/img/proj/madhukargarg.jpeg'
import abhigya from '../../../../public/img/proj/Abhigya.jpeg'
import kiran from '../../../../public/img/proj/kiranmalla.jpeg'
import ArjunKh from '../../../../public/img/proj/ArjunKh.jpeg'

 function TeamSection() {
  const team = [
    {
      name: 'Kadam Kc',
      role: 'Managing DIrector',
      image: kadmKc.src,
      bio: `Kadam KC, an entrepreneur with a master's in environmental science and geotechnical engineering from UK universities, has over 15 years in business. While in the UK, he was active in both business and social work. After returning to Nepal, he focused on hydropower, successfully completing Puwa Khola-1 Hydropower (4 MW). He chairs Aayu Entertainments Pvt. Ltd. and is launching Fishtail Dream Park in Pokhara. He also founded Dhaulagiri Construction and Development Pvt. Ltd. and serves on the board of High Himalaya Hydro Construction Pvt. Ltd.`,
    },
    {
      name: 'Madhukar Garg',
      role: 'Head of Engineering',
      image: madhuKar.src,
      bio: `Madhukar Garg, an entrepreneur with a master's in Electrical Power Engineering from NTNU (NORAD) and Kathmandu University, has extensive experience with reputed organizations like Hulas Steel Industries. He is skilled in the technical aspects of hydropower, with expertise in electro-mechanical equipment and transmission lines. Currently, he has successfully completed the Puwa Khola-1 Hydropower (4 MW) project and is focused on the hydropower sector. He is involved in several ongoing and upcoming hydropower projects.`,
    },
    {
      name: "Arjun Kharel",
      role: 'Board of Director',
      image: ArjunKh.src,
      bio: `Arjun Kharel, an entrepreneur with a bachelor's in business administration, is a key investor in the hydropower sector. He has invested in several projects, including Puwa Khola-1 Hydropower (4 MW), contributing to Nepal’s energy infrastructure. Through his investments, he aims to advance the country’s energy sector.`,
    },
    {
      name: 'Abhigya Malla',
      role: 'Board of Director',
      image: abhigya.src,
      bio: `Ms. Abhigya Malla, with a master's in professional accountancy and a Master of Commerce in Finance from Macquarie University, Australia, is a project developer and youth contractor in hydropower. She is involved in projects like Union Mewa (24 MW), Puwa Khola (4 MW), and Upper Tamor A (60 MW). As Vice President/Finance Controller at High Himalaya Hydro Construction Pvt. Ltd. and Managing Director at Union Hydropower Public Ltd., she works to improve Nepal's hydropower sector and infrastructure.`,
    },
    {
      name: 'Kiran Malla',
      role: 'Chairman',
      image: kiran.src,
      bio: `Mr. Kiran Malla, founder chairman of High Himalaya Hydro Construction Pvt. Ltd., has over 37 years in the hydropower sector. He has led the development of several projects, including Puwa Khola-One (21 MW), Union Mewa (23 MW), Hongu Hydroelectric (28.9 MW), and Upper Tamor A (60 MW). With contributions to over 50 projects, his company has completed more than 35, making it Nepal's top private hydropower construction firm. He holds a civil engineering degree from IIT Roorkee and a master's in hydropower from Norway.`,
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
              <div className=" overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full object-top h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t pointer-events-none from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 mb-4 max-h-[200px] my-scroll overflow-y-scroll">{member.bio}</p>
                
                {/* <div className="flex gap-3">
                  <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div> */}
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