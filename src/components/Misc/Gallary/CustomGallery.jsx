"use client";
// import React, { useState, useEffect } from "react";
// import { Gallery } from "next-gallery";
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FiX, FiChevronLeft, FiChevronRight, FiDownload } from 'react-icons/fi';

import img1 from "../../../../public/img/gallary/1.png";
import img2 from "../../../../public/img/gallary/2.png";
import img3 from "../../../../public/img/gallary/3.png";
import img4 from "../../../../public/img/gallary/4.png";
import img5 from "../../../../public/img/gallary/5.png";
import img6 from "../../../../public/img/gallary/6.png";

const galleryImages = [
  { src: img1, aspect_ratio: 16 / 9, alt: "Image 1" },
  { src: img2, aspect_ratio: 16 / 9, alt: "Image 2" },
  { src: img3, aspect_ratio: 16 / 9, alt: "Image 3" },
  { src: img4, aspect_ratio: 16 / 9, alt: "Image 4" },
  { src: img5, aspect_ratio: 16 / 9, alt: "Image 5" },
  { src: img6, aspect_ratio: 16 / 9, alt: "Image 6" },
];


// --- 2. LIGHTBOX COMPONENT (Fullscreen Viewer) ---

// --- 2. LIGHTBOX COMPONENT (Fullscreen Viewer) ---

function Lightbox({ images, isOpen, onClose, initialIndex }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  // Using useCallback for optimization since these functions are used in useEffect
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  // Handle keyboard navigation (Escape, Arrows) - dependencies updated to include useCallback functions
  useEffect(() => {
    const handleKeydown = (event) => {
      if (!isOpen) return;
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') goToPrevious();
      if (event.key === 'ArrowRight') goToNext();
    };

    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [isOpen, onClose, goToPrevious, goToNext]); // Dependencies updated

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const handleDownload = (e) => {
    e.stopPropagation(); // Stop closing lightbox
    const link = document.createElement('a');
    link.href = currentImage.src;
    // Create a clean filename from the alt text
    link.download = (currentImage.alt.replace(/[^a-z0-9]/gi, '_') + '.jpg').toLowerCase();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const buttonStyle = "p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/30 text-white transition duration-200 backdrop-blur-sm z-50 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white/20";
  const iconStyle = "w-6 h-6 md:w-8 md:h-8";
  
  return (
    <div 
      className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-2 md:p-6"
      onClick={onClose}
    >
      <div 
        // ***** CHANGES ARE HERE *****
        className="relative flex items-center justify-center max-h-[95vh] w-full sm:w-auto sm:min-w-[70%] max-w-[95vw] lg:min-w-[70%]"
        // ***** END CHANGES *****
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="relative w-full h-full">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            layout="intrinsic" 
            width={1920} 
            height={1080}
            objectFit="contain" 
            className="rounded-lg shadow-2xl min-w-[100%] max-h-[90vh] w-auto h-auto transition duration-300"
            quality={90}
          />
        </div>
        
        {/* CLOSE Button (Top Right) */}
        <button
          className={`${buttonStyle} absolute top-4 right-4`}
          onClick={onClose}
          aria-label="Close Lightbox"
        >
          <FiX className={iconStyle} />
        </button>
        
        {/* DOWNLOAD Button (Top Left) */}
        <button
          className={`${buttonStyle} absolute top-4 left-4`}
          onClick={handleDownload}
          aria-label="Download Image"
        >
          <FiDownload className={iconStyle} />
        </button>

        {/* PREV Button */}
        <button
          className={`${buttonStyle} absolute left-4 md:left-8`}
          onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
          aria-label="Previous Image"
        >
          <FiChevronLeft className={iconStyle} />
        </button>

        {/* NEXT Button */}
        <button
          className={`${buttonStyle} absolute right-4 md:right-8`}
          onClick={(e) => { e.stopPropagation(); goToNext(); }}
          aria-label="Next Image"
        >
          <FiChevronRight className={iconStyle} />
        </button>

        {/* Caption */}
        <div className="absolute bottom-0 w-full p-4 text-center bg-black/50 backdrop-blur-sm rounded-b-lg">
             <p className="text-white text-sm md:text-base font-light">{currentImage.alt}</p>
        </div>

      </div>
    </div>
  );
}


// --- 3. MAIN GALLERY COMPONENT ---

export default function CustomGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = useCallback((index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  return (
    <section className="min-h-screen p-4 md:p-12 bg-gray-100" id="gallery">
        <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm mb-4">
          Gallery
        </div>
        <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
          Moments That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Define Us
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore a visual journey of our projects, innovations, and the people
          driving sustainable energy solutions forward.
        </p>
      </div>
      
      {/* Responsive Gallery Grid (1, 2, or 3 columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {galleryImages.map((image, index) => (
          <div
            key={image.alt}
            className="group relative overflow-hidden rounded-xl shadow-2xl cursor-pointer transition duration-500 ease-in-out hover:shadow-blue-500/50 hover:scale-[1.03]"
            onClick={() => openLightbox(index)}
          >
            {/* Image using Next.js Image Component */}
            <div className="aspect-[16/9] w-full relative">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition duration-700 ease-in-out group-hover:opacity-75 group-hover:blur-sm"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index < 3} // Prioritize loading the first few images
              />
            </div>

            {/* Beautiful Hover Effect UI */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
              <p className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition duration-500 ease-out">
                View Photo
              </p>
              <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                {image.alt}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Viewer */}
      <Lightbox
        images={galleryImages}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        initialIndex={currentImageIndex}
      />
    </section>
  );
}