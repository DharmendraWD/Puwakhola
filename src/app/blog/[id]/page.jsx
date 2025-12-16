import React from 'react';
import wp from "../../../../public/img/wp1.jpg"
import { Form } from './Form';
import Navbar from '@/components/Header/Navbar/Navbar';
import Footer from '@/components/Misc/Footer/Footer';
import toast from 'react-hot-toast';
import Image from 'next/image';
import Link from 'next/link';
import HTMLReactParser from 'html-react-parser';
import bimg1 from "../../../../public/img/blog/blog1.jpg"



const STATISTICS = [
    { value: "500k", label: "cost savings" },
    { value: "$500k", label: "cost savings" },
    { value: "95%", label: "customer satisfactions" },
    { value: "5%", label: "market shares growth" },
];

  const data = [
    {
      id: 1,
      title: 'Puwakhola Achieves Record Power Generation',
      desc: 'Our facilities reached a milestone with 100% operational capacity throughout the monsoon season, demonstrating exceptional reliability.',
      date: 'December 5, 2024',
      category: '',
      img: 'https://images.unsplash.com/photo-1688589089961-86b830d990b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBuZXdzfGVufDF8fHx8MTc2NTM1MDk4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'New Community Development Initiative Launched',
      desc: 'Partnership program brings education and infrastructure improvements to local communities in our project areas.',
      date: 'November 28, 2024',
      category: '',
      img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW18ZW58MXx8fHwxNzY1Mjc1NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Expansion Project Receives Environmental Clearance',
      desc: 'Our upcoming 20 MW expansion has been approved following rigorous environmental impact assessments.',
      date: 'November 15, 2024',
      category: '',
      img: 'https://images.unsplash.com/photo-1487875961445-47a00398c267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1MjY1NzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];


export default async  function NewsDets(props) {
    const { params } = props;
  const awaitedParams = await params;
  const id = awaitedParams.id-1;





    const backgroundImage = data[id].img || wp;

    return (
        <>
        {/* <Navbar></Navbar> */}
        <div className="min-h-[100vh] flex items-end justify-center font-[Inter] relative overflow-hidden bg-gray-100">
            
            {/* Background Image and Overlay Container */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    {/* Dark Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                </div>
            </div>

            {/* Content Container (z-10 for stacking above the background) */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 m-auto">

                {/* Main Text Content */}
                <div className="text-center flex flex-col justify-around mb-12">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
                        {data[id].title  ?? " "}
                    </h1>
                    <div className="mt-4 multiline-ellipsis2 text-lg text-gray-200 max-w-3xl mx-auto px-4 sm:px-0">
                    
                    {data[id].desc || null}
          
                    </div>
                </div>

            </div>
        </div>
        
         {/* ------------------------------------- */}
         <div className="min-h-screen py-12 sm:py-16 md:py-20 font-[Inter] bg-[#e9e9e9]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Responsive Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
                    
                    {/* Column 1: Main Content (Takes up 2/3 of the width on medium/large screens) */}
                    <div className="md:col-span-2 mb-10 md:mb-0">
                        <NewsStudy  data={data} id={id}/>
                    </div>

                    {/* Column 2: Newsletter Sidebar (Takes up 1/3 of the width on medium/large screens) */}
                    <div className="md:col-span-1">
                        {/* <NewsletterSidebar /> */}
                    </div>

                </div>
            </div>
        </div> 

        <div>
<div className='max-w-7xl mx-auto mt-8 mb-8 flex gap-4 justify-between'>
    <h1 className='text-xl ml-3 font-semibold'>Other Blogs</h1>
    {/* <Link  href="/blog">
    <button className='bg-[#9999db] cursor-pointer px-[20px] py-[7px] text-[#272797]'>
        See all
    </button>
    </Link> */}
</div>
<div style={{justifyItems:"center"}} className="space-y-8 mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white">
    

   {
    data?.map((blog, index) => (
        <div key={index} className="bg-white max-w-[400px] min-w-[400px] justify-between rounded-2xl rounded-br-[95px] shadow-xl transition-all duration-300 hover:shadow-2xl overflow-hidden flex flex-col h-full">
            {/* Image Container */}
            <div className="w-full h-auto overflow-hidden p-4">
                <Image
                width={300}
                height={300}
            // <img  src={`${BASE_CONTENT}/${member.image.replace(/\\/g, '/')}`}  className="team-img" />

                   src={blog.img}
                    alt={blog.title ?? " "}
                    className="w-[100%] h-[200px] object-cover transition duration-500 ease-in-out hover:scale-[1.03]"
                    // Fallback placeholder image on error\
                    unoptimized
                   
                />
            </div>
            
            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-800 leading-snug mb-3">
                   {blog.title ?? " "}
                </h3>
                <div className="text-base multiline-ellipsis text-gray-600 mb-4 flex-grow">
                     {HTMLReactParser(blog?.desc)} 
                </div>
                <Link href={`/blog/${blog.id}`} className="text-blue-600 font-medium hover:text-blue-700 transition duration-150 self-start">
                    Read more
                </Link>
            </div>
        </div>
    ))
   }
</div>
</div>
<Footer></Footer>
        </>
    );
}






// Main Case Study Content Component
const NewsStudy = async({data, id}) => {


    return (
        <>
        <div className="text-gray-700 leading-relaxed  space-y-8">
            <section>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                                    {data[id].title || null}

                </h2>
                <div className="text-lg">
                 
                            {data[id].desc || null}

                </div>
            </section>

        


    
        </div>

</>
    );
};

