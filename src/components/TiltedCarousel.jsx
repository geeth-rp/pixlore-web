import React, { useState } from 'react';

const TiltedCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(items.length / 2));
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    if (touchStart - touchEnd > 50) {
      // Swipe left
      handleNext();
    }
    if (touchStart - touchEnd < -50) {
      // Swipe right
      handlePrev();
    }
    // reset
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div 
      className="tilted-carousel-container" 
      onTouchStart={handleTouchStart} 
      onTouchMove={handleTouchMove} 
      onTouchEnd={handleTouchEnd}
    >
      {/* Abstract Background Blobs */}
      <div className="carousel-blob blob-violet"></div>
      <div className="carousel-blob blob-cyan"></div>
      <div className="carousel-blob blob-gold"></div>
      
      <div className="tilted-carousel-track">
        {items.map((item, index) => {
          const diff = index - currentIndex;
          
          // Math for the fanning effect
          const rotateZ = diff * 5; // 5 degrees tilt per card
          const translateX = diff * 35; // 35% horizontal shift per card
          const translateY = Math.abs(diff) * 10; // slightly dip lower cards
          const scale = 1 - Math.abs(diff) * 0.08; // scale down by 8% per slot
          const zIndex = 100 - Math.abs(diff);
          const opacity = Math.max(1 - Math.abs(diff) * 0.25, 0); // fade out side cards
          
          // Hide items that are too far away to improve performance and look
          if (Math.abs(diff) > 3) return null;

          return (
            <div 
              key={index}
              className={`tilted-carousel-card ${diff === 0 ? 'active' : ''}`}
              style={{
                transform: `translate(-50%, -50%) translateX(${translateX}%) translateY(${translateY}px) rotateZ(${rotateZ}deg) scale(${scale})`,
                zIndex,
                opacity,
                pointerEvents: diff === 0 ? 'auto' : 'none',
              }}
              onClick={() => {
                if (diff !== 0) setCurrentIndex(index);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
      
      <div className="carousel-nav">
        <button className="carousel-nav-btn prev" onClick={handlePrev} aria-label="Previous">
          &#8249;
        </button>
        <button className="carousel-nav-btn next" onClick={handleNext} aria-label="Next">
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default TiltedCarousel;
