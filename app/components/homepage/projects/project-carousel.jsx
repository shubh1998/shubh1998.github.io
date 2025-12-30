"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectCarousel = ({ images, name, settings = {} }) => {
  const {
    dots = true,
    infinite = true,
    speed = 500,
    slidesToShow = 1,
    slidesToScroll = 1,
    autoplay = false,
    autoplaySpeed = 3000,
    arrows = true,
    fade = false,
    pauseOnHover = true
  } = settings;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoplay);

  const totalSlides = images.length;

  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, autoplaySpeed]);

  const goToNext = () => {
    if (infinite) {
      setCurrentIndex((prev) => (prev + slidesToScroll) % totalSlides);
    } else {
      setCurrentIndex((prev) => 
        Math.min(prev + slidesToScroll, totalSlides - slidesToShow)
      );
    }
  };

  const goToPrevious = () => {
    if (infinite) {
      setCurrentIndex((prev) => 
        prev === 0 ? totalSlides - slidesToScroll : prev - slidesToScroll
      );
    } else {
      setCurrentIndex((prev) => Math.max(prev - slidesToScroll, 0));
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && autoplay) setIsAutoPlaying(true);
  };

  if (!images || images.length === 0) {
    return (
      <Image
        src="/png/placeholder.png"
        alt={name}
        width={1080}
        height={720}
        className="w-full h-full rounded-lg object-contain"
      />
    );
  }

  if (images.length === 1) {
    return (
      <Image
        src={images[0]}
        alt={name}
        width={1080}
        height={720}
        className="w-full h-full rounded-lg object-contain"
      />
    );
  }

  return (
    <div 
      className="relative w-full h-full group/carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main carousel container */}
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        <div
          className={`flex transition-transform duration-${speed} ease-in-out ${
            fade ? 'absolute inset-0' : ''
          }`}
          style={{
            transform: fade ? 'none' : `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full h-full transition-opacity duration-${speed} ${
                fade
                  ? currentIndex === index
                    ? 'opacity-100 relative'
                    : 'opacity-0 absolute inset-0'
                  : ''
              }`}
            >
              <Image
                src={image || '/png/placeholder.png'}
                alt={`${name} - Image ${index + 1}`}
                width={1080}
                height={720}
                className="w-full h-full object-contain"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {arrows && totalSlides > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Previous slide"
          >
            <FaChevronLeft size={16} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Next slide"
          >
            <FaChevronRight size={16} />
          </button>
        </>
      )}

      {/* Dots Navigation */}
      {dots && totalSlides > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-white w-4'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;
