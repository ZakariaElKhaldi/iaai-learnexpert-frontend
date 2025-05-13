"use client";

import dynamic from 'next/dynamic';

// Dynamically import the LottieAnimation to ensure it only runs on the client
const LottieAnimation = dynamic(() => import('./LottieAnimation'), {
  ssr: false, // This ensures the component only renders on client-side
});

export default LottieAnimation; 