import React, { useState, useEffect } from "react";

function ImgSlice({ images, interval }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <div className="grid absolute left-1/2 overflow-hidden" id="con-pic">
      <img
        src={images[currentIndex]}
        alt={`${currentIndex + 1}`}
        className="hidden md:block h-80 object-corver md:h-96 md:mt-10 md:object-cover"
        id="con-img-right"
      />
    </div>
  );
}

export default ImgSlice;
