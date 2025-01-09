// src/components/LogoAnimation.js
import React, { useEffect, useState } from 'react';

const LogoAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 8000); // Adjust the timeout based on how long the animation is
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    showAnimation && (
      <div className="logo-animation">
        <video
          src="/A1.mp4"
          autoPlay
          loop
          muted
          type="video/mp4"
        />
      </div>
    )
  );
};

export default LogoAnimation;
