import React, { useState } from 'react';

const ImageMagnifier = ({ src, zoom = 2.5 }) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierStyle, setMagnifierStyle] = useState({});

  const handleMouseMove = (e) => {
    const { top, left, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const backgroundX = (x / width) * 100;
    const backgroundY = (y / height) * 100;

    setMagnifierStyle({
      top: `${y - 75}px`,
      left: `${x + 25}px`,
      width: '350px',
      height: '350px',
      backgroundImage: `url(${src})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: `${width * zoom}px ${height * zoom}px`,
      backgroundPosition: `${backgroundX}% ${backgroundY}%`,
    });
  };

  return (
    <div
      className="relative w-full h-[400px] md:w-full"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt="Zoomable"
        className="w-full h-full object-cover object-center rounded shadow-lg"
      />

      {showMagnifier && (
        <div
          className="absolute border border-black z-[999] pointer-events-none rounded"
          style={magnifierStyle}
        />
      )}
    </div>
  );
};

export default ImageMagnifier;
