import React, { useState, useEffect } from "react";

function TextSlice({ text, interval }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [text, interval]);

  return (
    <div className="my-10 md:my-14 lg:my-16 border-primary-700 border-2 py-2 lg:py-3 px-16 w-fit content-center text-center rounded-3xl" id="textslice">
      <span className="text-3xl md:text-4xl lg:text-6xl">
        <b>{text[currentIndex]}</b>
      </span>
    </div>
  );
}

export default TextSlice;
