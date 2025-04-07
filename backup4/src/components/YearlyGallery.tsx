import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Plus } from 'lucide-react';

interface Photo {
  url: string;
  caption: string;
}

interface YearlyGalleryProps {
  year: string;
  photos: Photo[];
}

const YearlyGallery: React.FC<YearlyGalleryProps> = ({ year, photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-8 text-center">{year} Performances</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {photos.slice(0, 3).map((photo, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => openModal(index)}
          >
            <img 
              src={photo.url}
              alt={photo.caption}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-center text-gray-700">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
      
      {photos.length > 3 && (
        <div className="text-center mt-8">
          <button
            onClick={() => openModal(0)}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            View All {photos.length} Photos
          </button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative">
              <img
                src={photos[currentIndex].url}
                alt={photos[currentIndex].caption}
                className="w-full h-[70vh] object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={goToPrevious}
                  className="bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={goToNext}
                  className="bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-white text-lg">{photos[currentIndex].caption}</p>
              <p className="text-gray-400 mt-2">
                {currentIndex + 1} of {photos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YearlyGallery; 