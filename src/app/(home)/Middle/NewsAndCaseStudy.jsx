import { ImageWithFallback } from '@/components/ImageWithFallback';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import blog1 from "../../../../public/img/blog/blog2.jpg"
import blog2 from "../../../../public/img/blog/blog1.jpg"
import blog3 from "../../../../public/img/blog/blog4.jpg"

 function NewsSection() {
  const news = [
    {
      id: 1,
      title: 'Puwa Khola- 1 Hydropower Appoints LS Capital as IPO Issue Manager',
      excerpt: `Puwa Khola- 1 Hydropower Limited has appointed LS Capital Limited as the IPO issue and sales manager for issuing 19,46,660 ordinary shares to the general public at a face value of Rs 100 per share.
 
 <br />
 <br>
 <br>
 The agreement was signed by Managing Director Mr. Kadam KC on behalf of Puwa Khola-1 Hydropower and Mr. Bijaya Lal Shrestha, Chief Executive Officer on behalf of Laxmi Sunrise Capital Limited. Puwa Khola- 1 Hydropower Limited's 4 MW hydropower project located in Ilam district has been completed and put into operation.
 



      `,
      date: 'Thu, Jan 25, 2024',
      category: '',
      image: blog1.src,
    },
    {
      id: 2,
      title: 'Puwa Khola 1 Hydropower To Develop 21 MW Aayu Malun Khola Hydropower Project In Okhaldhunga',
      excerpt: `Puwa Khola 1 Hydropower Limited is going to build the 21 MW Aayu Malun Khola Hydropower Project in Okhaldhunga district. For this purpose, the company has already received the construction license from the Department of Electricity Development.
      <br>
      <br>
      <br>
      The department granted the construction permit to the company on Mangsir 6, 2079 BS. The license has a validity until Mangsir 5, 2114 BS.

The department has provided the construction license to the promoter company on the basis of the environmental impact assessment report and study report of the project approved by the Ministry of Forest and Environment.

<br>
<br>
<br>
Before issuing the license, the Department Of Electricity Development had issued a notice requesting the stakeholders to submit written opinions/suggestions within 35 days if there is any adverse impact due to the construction and operation of this project.

The project is a run-of-the-river (ROR) type project. It will be built on the Malun River in Okhaldhunga district.

Puwa Khola 1 Hydropower is currently operating a 4 MW Puwa Khola-1 Hydropower Project in Illam District. The project began commercial electricity production from Ashwin 23, 2074 BS.


      `,
      date: 'Jan 22, 2023',
      category: '',
      image: blog2.src,
    },
    {
      id: 3,
      title: 'पुवा खोला–वान हाईड्रोपावरले आईपीओ निष्कासन गर्ने',
      excerpt: `
      काठमाण्डौ । पुवा खोला–वान हाईड्रोपावर लिमिटेडले आईपीओ निष्कासन गर्ने भएको छ । कम्पनीले आईपीओ निष्कासनको प्रस्ताव पारित गर्न विशेष साधारण सभा डाकेको छ ।  
उक्त विशेष सभा यही असार २७ गते काठमाण्डौको अनामनगरमा रहेको कम्पनीको कार्यालयमा बिहान ११ बजेदेखि सुरु हुनेछ । 
<br>
<br>
<br>
सभामा कम्पनीको आईपीओ निष्कासनको रकम वृद्धि गरी आईपीओ जारी गर्ने, आईपीओबाट प्राप्त पूँजीको उपयोगबारे निर्णय गर्ने र चुक्तापूँजी वृद्धिको उपयोगिताको विशेषमा निर्णय गर्ने जस्ता विशेष प्रस्तावहरु पारित गरिनेछन् ।  

यस्तै कम्पनीको प्रबन्धपत्र तथा नियमावली संशोधन गर्ने प्रस्ताव समेत पारित गरिनेछ ।     

      `,
      date: 'बिहीबार, असार २६,२०८२',
      category: '',
      image: blog3.src,
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