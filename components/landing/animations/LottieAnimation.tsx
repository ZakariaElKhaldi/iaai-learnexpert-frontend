"use client";

import React, { useRef, useEffect, useState } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import { motion, useInView } from 'framer-motion';

interface LottieAnimationProps {
  animationData: any;
  autoplay?: boolean;
  loop?: boolean;
  speed?: number;
  direction?: 1 | -1;
  className?: string;
  style?: React.CSSProperties;
  playOnHover?: boolean;
  playOnView?: boolean;
  viewThreshold?: number;
  animationControl?: boolean;
  onComplete?: () => void;
  onLoopComplete?: () => void;
  renderer?: 'svg' | 'canvas';
  width?: string | number;
  height?: string | number;
}

export default function LottieAnimation({
  animationData,
  autoplay = true,
  loop = true,
  speed = 1,
  direction = 1,
  className = '',
  style = {},
  playOnHover = false,
  playOnView = false,
  viewThreshold = 0.5,
  animationControl = false,
  onComplete,
  onLoopComplete,
  renderer = 'svg',
  width = '100%',
  height = '100%',
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const [isPaused, setIsPaused] = useState(!autoplay || playOnHover || playOnView);
  const isInView = useInView(containerRef, { amount: viewThreshold });
  
  // Setup animation
  useEffect(() => {
    if (!containerRef.current) return;
    
    animationRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer,
      loop,
      autoplay: autoplay && !playOnHover && !playOnView,
      animationData,
    });
    
    // Set speed and direction
    animationRef.current.setSpeed(speed);
    animationRef.current.setDirection(direction);
    
    // Set callbacks
    if (onComplete) {
      animationRef.current.addEventListener('complete', onComplete);
    }
    
    if (onLoopComplete) {
      animationRef.current.addEventListener('loopComplete', onLoopComplete);
    }
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
        animationRef.current = null;
      }
    };
  }, [animationData, autoplay, loop, renderer, speed, direction]);
  
  // Handle hover state
  const handleMouseEnter = () => {
    if (playOnHover && animationRef.current) {
      animationRef.current.play();
      setIsPaused(false);
    }
  };
  
  const handleMouseLeave = () => {
    if (playOnHover && animationRef.current) {
      animationRef.current.pause();
      setIsPaused(true);
    }
  };
  
  // Handle play controls
  const togglePlay = () => {
    if (!animationRef.current) return;
    
    if (isPaused) {
      animationRef.current.play();
      setIsPaused(false);
    } else {
      animationRef.current.pause();
      setIsPaused(true);
    }
  };
  
  // Control animation based on view
  useEffect(() => {
    if (!playOnView || !animationRef.current) return;
    
    if (isInView) {
      animationRef.current.play();
      setIsPaused(false);
    } else if (!autoplay) {
      animationRef.current.pause();
      setIsPaused(true);
    }
  }, [isInView, playOnView, autoplay]);
  
  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        width,
        height,
        ...style,
      }}
      ref={containerRef}
      onMouseEnter={playOnHover ? handleMouseEnter : undefined}
      onMouseLeave={playOnHover ? handleMouseLeave : undefined}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {animationControl && (
        <button
          onClick={togglePlay}
          className="absolute bottom-2 right-2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 focus:outline-none z-10"
          aria-label={isPaused ? 'Play animation' : 'Pause animation'}
        >
          {isPaused ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          )}
        </button>
      )}
    </motion.div>
  );
} 