"use client";

import React, { useState, useEffect, useRef, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@nextui-org/react';
import { FaRocket, FaBookOpen, FaStar } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Add types for AnimatedText props
interface AnimatedTextProps {
  text: string;
  className?: string;
  words?: boolean;
  letters?: boolean;
  staggerChildren?: number;
  delay?: number;
  duration?: number;
  animationType?: "fade" | "slide-up";
}

// Animated text component with improved animation options
const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "", 
  words = false, 
  letters = false,
  staggerChildren = 0.02,
  delay = 0,
  duration = 0.5,
  animationType = "fade"
}) => {
  const getAnimationProps = () => {
    switch(animationType) {
      case 'fade':
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration, staggerChildren, delayChildren: delay }
        };
      case 'slide-up':
        return {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration, staggerChildren, delayChildren: delay }
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration, staggerChildren, delayChildren: delay }
        };
    }
  };
  
  if (words) {
    const wordsArray = text.split(' ');
    
    return (
      <motion.h2 className={className} aria-label={text} {...getAnimationProps()}>
        {wordsArray.map((word: string, i: number) => (
          <motion.span
            key={i}
            className="inline-block"
            {...getAnimationProps()}
          >
            {word}{' '}
          </motion.span>
        ))}
      </motion.h2>
    );
  }
  
  if (letters) {
    return (
      <motion.h2 className={className} aria-label={text} {...getAnimationProps()}>
        {Array.from(text).map((letter: string, i: number) => (
          <motion.span
            key={i}
            className="inline-block"
            {...getAnimationProps()}
          >
            {(letter === ' ' ? '\\u00A0' : letter) as ReactNode}
          </motion.span>
        ))}
      </motion.h2>
    );
  }
  
  return <motion.h2 className={className} {...getAnimationProps()}>{text}</motion.h2>;
};

// Add types for FloatingElement props
interface FloatingElementProps {
  emoji: string;
  delay: number;
  duration: number;
  size: number;
  className?: string;
}

// Enhanced floating elements with better performance
const FloatingElement: React.FC<FloatingElementProps> = ({ emoji, delay, duration, size, className = "" }) => {
  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${className}`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: size,
        opacity: 0.5
      }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ 
        y: [0, -15, 0, -10, 0],
        opacity: [0.1, 0.3, 0.2, 0.4, 0.3],
        rotate: [0, 10, -10, 15, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      {emoji}
    </motion.div>
  );
};

// Add types for FloatingElements props
interface FloatingElementsContainerProps {
  elements: FloatingElementProps[];
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsContainerProps> = ({ elements, className = "" }) => {
  return (
    <div className={`${className}`}>
      {elements.map((element: FloatingElementProps, index: number) => (
        <FloatingElement key={index} {...element} />
      ))}
    </div>
  );
};

// Reviews carousel component
const ReviewsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reviews = [
    { 
      name: "Sarah J.",
      role: "Frontend Developer",
      company: "Google",
      text: "The courses transformed my career trajectory completely.",
      rating: 5
    },
    { 
      name: "Mike T.",
      role: "Data Scientist",
      company: "Microsoft",
      text: "The mentorship program was worth every penny.",
      rating: 5
    },
    { 
      name: "Priya K.",
      role: "Cloud Architect",
      company: "Amazon",
      text: "Incredible depth of content and expert guidance.",
      rating: 4
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [reviews.length]);
  
  return (
    <div className="relative overflow-hidden h-24 mt-6 w-full max-w-sm">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <div className="flex gap-1 mb-2">
              {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <p className="text-white text-sm mb-2">&quot;{reviews[activeIndex].text}&quot;</p>
            <div className="flex justify-between items-center">
              <div className="text-xs">
                <p className="text-white font-medium">{reviews[activeIndex].name}</p>
                <p className="text-gray-300">{reviews[activeIndex].role}, {reviews[activeIndex].company}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'bg-white scale-125' : 'bg-white/40'}`}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Transform values for parallax effect - further reduced for better stability
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Mouse movement effect refinement with reduced intensity
    if (imageRef.current) {
      let requestId: number | null = null; // Explicitly type requestId
      let targetX = 0;
      let targetY = 0;
      let currentX = 0;
      let currentY = 0;
      
      const handleMouseMove = (e: MouseEvent) => { // Type the event
        const { clientX, clientY } = e;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        // Reduced movement intensity by 50%
        targetX = ((clientX / windowWidth) - 0.5) * 10;
        targetY = ((clientY / windowHeight) - 0.5) * 10;
      };
      
      const updatePosition = () => {
        const easing = 0.1;
        currentX += (targetX - currentX) * easing;
        currentY += (targetY - currentY) * easing;
        
        // Check if ref is still current before accessing style
        if (imageRef.current) { 
          // Reduced transform intensity
          imageRef.current.style.transform = `perspective(1000px) rotateY(${currentX * 0.3}deg) rotateX(${-currentY * 0.3}deg) translateX(${currentX * 0.3}px) translateY(${currentY * 0.3}px)`;
        }
        
        requestId = requestAnimationFrame(updatePosition);
      };
      
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      requestId = requestAnimationFrame(updatePosition);
      
      // Cleanup function
      return () => {
        window.removeEventListener('mousemove', handleMouseMove); // Remove listener
        if (requestId) { // Check if requestId is not null
          cancelAnimationFrame(requestId);
        }
      };
    }
  }, []);
  
  return (
    <section 
      ref={heroRef} 
      className="relative w-full bg-gradient-to-b from-gray-900 via-indigo-950 to-gray-900 py-24 md:py-32 overflow-visible"
      aria-label="Hero section"
    >
      {/* Background elements with further reduced intensity */}
      <motion.div 
        className="absolute inset-0 opacity-15" 
        style={{ y: bgY }}
      >
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        
        {/* Additional subtle glowing orbs with reduced opacity */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-[0.07]"></div>
        <div className="absolute top-0 left-0 w-48 h-48 bg-pink-500 rounded-full filter blur-3xl opacity-[0.07] animate-pulse" style={{ animationDuration: '15s', animationDelay: '2s' }}></div>
      </motion.div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[length:40px_40px] opacity-40"></div>
      
      {/* Floating elements - reduced quantity, size, and opacity */}
      <FloatingElements
        elements={[
          { emoji: '💻', delay: 0, duration: 15, size: 25 },
          { emoji: '🚀', delay: 2, duration: 25, size: 20 },
          { emoji: '📊', delay: 6, duration: 18, size: 22 },
        ]}
        className="absolute inset-0 pointer-events-none opacity-40"
      />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-20">
          {/* Text content */}
          <motion.div 
            className="flex flex-col w-full md:w-1/2 text-center md:text-left"
            style={{ opacity, y: textY }}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/40 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2 animate-pulse"></span>
                LearnExpert Platform
              </span>
            </motion.div>
            
            <AnimatedText
              text="Accelerate Your Tech Career Through Expert-Led Learning"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-indigo-400 leading-tight"
              animationType="slide-up"
              duration={0.6}
              delay={0.3}
              staggerChildren={0.05}
              words
            />
            
            <motion.p 
              className="text-lg text-gray-300 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Access hands-on courses, personalized coaching, and a supportive community to master in-demand technical skills and advance your career.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mt-2 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button 
                as={Link} 
                href="/register" 
                color="primary" 
                variant="shadow" 
                size="lg"
                startContent={<FaRocket className="text-white" />}
                className="font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-indigo-500/30"
              >
                Start Learning Now
              </Button>
              
              <Button 
                as={Link} 
                href="/courses" 
                variant="bordered" 
                size="lg"
                startContent={<FaBookOpen />}
                className="text-white border-white/30 font-medium hover:bg-white/10 transition-all duration-300"
              >
                Browse Courses
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex items-center justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden transform transition-transform hover:scale-110 hover:z-10">
                    <Image
                      src={`/assets/avatar-${i}.jpg`}
                      alt={`User ${i}`}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-600 flex items-center justify-center text-white text-xs font-bold transform transition-transform hover:scale-110 hover:z-10">
                  +2K
                </div>
              </div>
              <div className="ml-4">
                <div className="text-white font-medium">Join 12,000+ learners</div>
                <div className="flex items-center text-indigo-300 text-sm">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FaStar key={i} className="text-yellow-400 text-xs mr-1" />
                  ))}
                  <span className="ml-1">4.9/5 average rating</span>
                </div>
              </div>
            </motion.div>
            
            {/* Reviews carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 max-w-sm mx-auto md:mx-0"
            >
              <ReviewsCarousel />
            </motion.div>
          </motion.div>
          
          {/* Hero image - improved dashboard display */}
          <motion.div 
            className="w-full md:w-1/2 relative mt-8 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div 
              ref={imageRef} 
              className="relative w-full aspect-[4/3] max-w-lg mx-auto transition-transform duration-700 ease-out"
            >
              {/* Dashboard frame glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 blur-2xl opacity-25"
                animate={{ 
                  opacity: [0.2, 0.3, 0.2],
                  scale: [1, 1.02, 1],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              {/* Dashboard frame with header and proper aspect ratio */}
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-white/20 bg-gray-900/80 backdrop-blur-sm shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
                {/* Dashboard header bar */}
                <div className="bg-gray-800/90 h-8 flex items-center px-4">
                  <div className="flex space-x-2 items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-white/80 text-xs font-medium">
                    LearnExpert Platform Interactive Dashboard
                  </div>
                </div>
                
                {/* Dashboard content - use next/image for better quality */}
                <div className="relative h-[calc(100%-2rem)]">
                  <Image
                    src="/assets/hero-image.jpg"
                    alt="LearnExpert Platform Interactive Dashboard"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
                
                {/* Live mentoring badge */}
                <motion.div 
                  className="absolute top-12 right-6 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-green-500/20 shadow-lg shadow-green-500/10"
                  initial={{ opacity: 0, y: -20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-white text-sm font-medium">Live Mentoring Now</span>
                  </div>
                </motion.div>
                
                {/* Progress badge with better contrast */}
                <motion.div 
                  className="absolute top-12 left-6 bg-indigo-900/90 backdrop-blur-sm rounded-lg p-3 border border-indigo-500/40 shadow-lg shadow-indigo-500/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-xs text-indigo-200 mb-1">Current Progress</div>
                  <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                    />
                  </div>
                  <div className="text-white text-xs mt-1 font-medium">75% Complete</div>
                </motion.div>
                
                {/* New lessons badge */}
                <motion.div 
                  className="absolute bottom-6 right-6 bg-purple-900/90 backdrop-blur-sm rounded-lg p-2 border border-purple-500/30 shadow-lg shadow-purple-500/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <div className="w-2 h-2 rounded-full bg-red-500 absolute -top-1 -right-1"></div>
                      <svg className="w-4 h-4 text-purple-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                      </svg>
                    </div>
                    <span className="text-white text-xs font-medium">New lessons available</span>
                  </div>
                </motion.div>
                
                {/* Interactive learning badge */}
                <motion.div 
                  className="absolute bottom-6 left-6 bg-blue-900/90 backdrop-blur-sm rounded-lg p-2 border border-blue-500/30 shadow-lg shadow-blue-500/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-xs font-medium">Interactive Learning</span>
                    <svg className="w-4 h-4 text-blue-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 8L16 12L10 16V8Z" fill="currentColor" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Trusted companies section - fixed marquee */}
        <motion.div 
          className="mt-28 md:mt-40 text-center pb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-gray-400 mb-8 text-lg">Trusted by professionals from leading companies</p>
          
          <div className="relative h-12 mx-auto max-w-5xl overflow-hidden">
            {/* First marquee - sliding from right to left */}
            <motion.div 
              className="flex absolute left-0 whitespace-nowrap"
              animate={{ 
                x: [0, '-50%'],
              }}
              transition={{ 
                x: {
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }
              }}
            >
              {[...Array(2)].map((_, setIndex) => (
                <div key={`set-${setIndex}`} className="flex">
                  {['Google', 'Microsoft', 'Amazon', 'Meta', 'IBM', 'Oracle', 'Apple'].map((company, index) => (
                    <div 
                      key={`${setIndex}-${index}`} 
                      className="mx-12 text-gray-400 text-lg font-semibold opacity-70 hover:opacity-100 transition-opacity inline-block"
                    >
                      {company}
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
            
            {/* Second marquee - sliding from left to right (opposite direction) */}
            <motion.div 
              className="flex absolute left-0 top-7 whitespace-nowrap"
              animate={{ 
                x: ['-50%', 0],
              }}
              transition={{ 
                x: {
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }
              }}
            >
              {[...Array(2)].map((_, setIndex) => (
                <div key={`set2-${setIndex}`} className="flex">
                  {['Tesla', 'Spotify', 'Adobe', 'Netflix', 'Shopify', 'Slack', 'Intel'].map((company, index) => (
                    <div 
                      key={`${setIndex}-${index}`} 
                      className="mx-12 text-gray-400 text-lg font-semibold opacity-70 hover:opacity-100 transition-opacity inline-block"
                    >
                      {company}
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
            
            {/* Gradient fade edges with improved contrast */}
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator with increased bottom spacing */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 1.5,
          y: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white/80 text-sm mb-2 font-medium">Scroll to explore</span>
          <div className="w-5 h-9 rounded-full border-2 border-white/50 flex justify-center items-start p-1">
            <motion.div 
              className="w-1 h-1 bg-white rounded-full"
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}