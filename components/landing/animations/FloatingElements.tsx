"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  children: React.ReactNode;
  xOffset?: number;
  yOffset?: number;
  duration?: number;
  delay?: number;
  className?: string;
  rotationRange?: number;
}

// Individual floating element component
export function FloatingElement({
  children,
  xOffset = 0,
  yOffset = 20,
  duration = 12,
  delay = 0,
  className = '',
  rotationRange = 5
}: FloatingElementProps) {
  // Random initial rotation
  const initialRotation = Math.random() * rotationRange * 2 - rotationRange;
  
  // Animation variants
  const floatingAnimation = {
    initial: {
      y: 0,
      x: 0,
      rotate: initialRotation,
    },
    animate: {
      y: [0, -yOffset, 0, yOffset, 0],
      x: [0, xOffset/2, xOffset, xOffset/2, 0],
      rotate: [initialRotation, initialRotation + rotationRange/2, initialRotation, initialRotation - rotationRange/2, initialRotation],
      transition: {
        duration,
        delay,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut",
      }
    }
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={floatingAnimation}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
}

interface FloatingElementsProps {
  elements?: React.ReactNode[];
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  randomizeProps?: boolean;
  xOffset?: number;
  yOffset?: number;
  duration?: number;
  delay?: number;
  rotationRange?: number;
}

// Container component for multiple floating elements or a single child
export default function FloatingElements({
  elements,
  children,
  className = '',
  containerClassName = '',
  randomizeProps = true,
  xOffset,
  yOffset,
  duration,
  delay,
  rotationRange
}: FloatingElementsProps) {
  // If we have a single child, we can just wrap it directly
  if (children && !elements) {
    return (
      <FloatingElement
        xOffset={xOffset || 0}
        yOffset={yOffset || 20}
        duration={duration || 12}
        delay={delay || 0}
        rotationRange={rotationRange || 5}
        className={className}
      >
        {children}
      </FloatingElement>
    );
  }
  
  // Helper to generate random number within a range
  const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
  
  // If we have an array of elements, render each one with randomized properties
  return (
    <div className={`relative ${containerClassName}`}>
      {elements && elements.map((element, index) => {
        // Randomize animation properties if requested
        const elementDuration = randomizeProps ? randomInRange(3, 6) : (duration || 4);
        const elementDelay = randomizeProps ? randomInRange(0, 2) : (delay !== undefined ? delay : index * 0.2);
        const elementYOffset = randomizeProps ? randomInRange(8, 15) : (yOffset || 10);
        const elementXOffset = randomizeProps ? randomInRange(3, 8) : (xOffset || 5);
        const elementRotationRange = randomizeProps ? randomInRange(1, 5) : (rotationRange || 3);
        
        return (
          <FloatingElement
            key={index}
            duration={elementDuration}
            delay={elementDelay}
            yOffset={elementYOffset}
            xOffset={elementXOffset}
            rotationRange={elementRotationRange}
            className={className}
          >
            {element}
          </FloatingElement>
        );
      })}
    </div>
  );
} 