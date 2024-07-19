import  { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden w-[400px] h-[300px] mx-auto">
      <div className="relative w-full h-full flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="relative items-center bottom-20 justify-center left-1/2 transform -translate-x-1/2 flex space-x-2 md:hidden">
        {images.map((_, index) => (
          <div key={index} className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'} cursor-pointer`} onClick={() => setCurrentIndex(index)}></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
