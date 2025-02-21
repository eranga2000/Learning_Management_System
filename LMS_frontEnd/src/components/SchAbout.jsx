import React, { useState, useEffect, useRef } from 'react';
import hImg from '../assets/hImg2.png';
import { motion } from 'framer-motion';

const SchAbout = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // IntersectionObserver logic to detect when the section enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true); // Trigger animation when the section is in view
          } else {
            setAnimate(false); // Reset animation when out of view
          }
        });
      },
      {
        threshold: 0.1, // Trigger the animation when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      id="sch-about"
      ref={sectionRef}
      initial="hidden"
      animate={animate ? 'visible' : 'hidden'}
      variants={fadeIn}
      className="font-kumbh"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 m-12">
        {/* Text Section */}
        <div className="text-black font-kumbh flex-1 ml-10">
          <h1 className="text-4xl lg:text-6xl font-bold lg:text-left text-center">
            About
          </h1>
          <h3 className="text-2xl lg:text-4xl font-bold mt-2 lg:text-left text-center">
            R/Pathagama Maha Vidyalaya
          </h3>
          <p className="text-base lg:text-base lg:text-justify text-center mt-2">
            R/Pathagama Maha Vidyalaya, established in 1891, stands as a pillar
            of Sri Lankan education. With dedicated faculty and a serene
            environment, we provide well-rounded education that fosters growth
            and prepares students for success in the modern world.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-xs lg:max-w-sm flex-shrink-0 mr-10">
          <img
            src={hImg}
            alt="School Image"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SchAbout;
