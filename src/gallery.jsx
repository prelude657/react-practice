import React, { useState } from 'react';
import './Gallery.css'; // Make sure this CSS matches what you will paste below

const photos = [
  'https://picsum.photos/id/1015/400/300',
  'https://picsum.photos/id/1016/400/300',
  'https://picsum.photos/id/1018/400/300',
  'https://picsum.photos/id/1019/400/300',
  'https://picsum.photos/id/1020/400/300',
  'https://picsum.photos/id/1021/400/300',
  'https://picsum.photos/id/1022/400/300',
  'https://picsum.photos/id/1023/400/300',
  'https://picsum.photos/id/1024/400/300',
  'https://picsum.photos/id/1025/400/300',
  'https://picsum.photos/id/1026/400/300',
  'https://picsum.photos/id/1027/400/300',
];

const PhotoGallery = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      (prevIndex - 1 + photos.length) % photos.length
    );
  };

  const visiblePhotos = Array.from({ length: visibleCount }, (_, i) => {
    const index = (startIndex + i) % photos.length;
    return photos[index];
  });

  return (
    <div className="gallery-container">
      <div className="gallery-wrapper">
        <button className="nav-button left" onClick={handlePrev}>
          &#8249;
        </button>

        <div className="gallery-track">
          <div className="gallery">
            {visiblePhotos.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Photo ${idx}`}
                className="gallery-image"
              />
            ))}
          </div>
        </div>

        <button className="nav-button right" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default PhotoGallery;
