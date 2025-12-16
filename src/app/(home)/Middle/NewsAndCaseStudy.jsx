import { ImageWithFallback } from '@/components/ImageWithFallback';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

 function NewsSection() {
  const news = [
    {
      id: 1,
      title: 'Puwakhola Achieves Record Power Generation',
      excerpt: 'Our facilities reached a milestone with 100% operational capacity throughout the monsoon season, demonstrating exceptional reliability.',
      date: 'December 5, 2024',
      category: '',
      image: 'https://images.unsplash.com/photo-1688589089961-86b830d990b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBuZXdzfGVufDF8fHx8MTc2NTM1MDk4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'New Community Development Initiative Launched',
      excerpt: 'Partnership program brings education and infrastructure improvements to local communities in our project areas.',
      date: 'November 28, 2024',
      category: '',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW18ZW58MXx8fHwxNzY1Mjc1NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Expansion Project Receives Environmental Clearance',
      excerpt: 'Our upcoming 20 MW expansion has been approved following rigorous environmental impact assessments.',
      date: 'November 15, 2024',
      category: '',
      image: 'https://images.unsplash.com/photo-1487875961445-47a00398c267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1MjY1NzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section id="news" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm mb-4">
            Latest Updates
          </div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about our latest projects, achievements, and contributions to Nepal's renewable energy landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <Link href={`/blog/${article.id}`} className="flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
{/* 
        <div className="text-center mt-12">
          <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
            View All News
          </button>
        </div> */}
      </div>
    </section>
  );
}

export default NewsSection;