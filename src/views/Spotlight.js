import React, { useEffect, useRef } from 'react';

const Spotlight = () => {
  const spotlightRef = useRef(null);
  let spotlightSize = 'transparent 90px, rgba(0, 0, 0, 1) 120px)';

  const updateSpotlight = (e) => {
    if (spotlightRef.current) {
      spotlightRef.current.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => updateSpotlight(e);
    const handleMouseUp = (e) => {
      spotlightSize = 'transparent 90px, rgba(0, 0, 0, 1) 120px)';
      updateSpotlight(e);
    };
    const handleMouseDown = (e) => {
      spotlightSize = 'transparent 110px, rgba(0, 0, 0, 0.9) 140px)';
      updateSpotlight(e);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

  return <div className="spotlight" ref={spotlightRef} />;
};

export default Spotlight;
