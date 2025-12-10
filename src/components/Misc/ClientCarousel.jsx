import { Shield, Award, Users, TrendingUp } from 'lucide-react';

 function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: 'Reliable Infrastructure',
      description: 'State-of-the-art facilities built to withstand the test of time and nature.',
    },
    {
      icon: Award,
      title: 'Industry Excellence',
      description: 'Recognized for our commitment to quality and sustainable practices.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Empowering local communities with clean energy and economic opportunities.',
    },
    {
      icon: TrendingUp,
      title: 'Future Growth',
      description: 'Continuously expanding our capacity to meet Nepal\'s energy demands.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm mb-4">
            About Puwakhola Hydropower
          </div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Clean Energy</span> Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 15 years of experience in hydroelectric power generation, Puwakhola Hydropower stands as a beacon of sustainable development in Nepal. Our commitment to excellence and environmental stewardship drives every project we undertake.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50/30"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default AboutSection