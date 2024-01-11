import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Heart = () => {
  const heartRef = useRef(null);

  useEffect(() => {
    const heart = heartRef.current;

    const handleMouseMove = (e) => {
      gsap.to(heart, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power4.out',
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={heartRef} className="heart"></div>;
};

export default Heart;
